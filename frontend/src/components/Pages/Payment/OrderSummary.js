import { PayPalButton } from "react-paypal-button-v2";
import { useDispatch } from "react-redux";
import { createOrder, resetCart } from "../../../redux/features/user/userSlice";
import { toast } from 'react-toastify';
import { useNavigate } from "react-router-dom";

const OrderSummary = ({ cart, shippingInfo }) => {
    const navigate = useNavigate()
    const shippingFee = cart && cart.length > 0 ? 15 : 0;
    const taxRate = cart && cart.length > 0 ? 0.15 : 0;

    const calculateSubtotal = () => {
        if (!Array.isArray(cart)) {
            return 0;
        }
        const totalQuantity = cart.reduce((total, item) => total + item.quantity, 0);
        const subtotal = cart.reduce((total, item) => total + (item.price * item.quantity), 0);
        return { subtotal, totalQuantity };
    };

    const calculateTax = (subtotal) => {
        const tax = subtotal * taxRate;
        return isNaN(tax) ? 0 : tax;
    };

    const calculateTotal = () => {
        const { subtotal } = calculateSubtotal();
        const tax = calculateTax(subtotal);
        const total = subtotal + shippingFee + tax;

        // If total is NaN, return 0
        return isNaN(total) ? 0 : total;
    };

    const { subtotal, totalQuantity } = calculateSubtotal();

    const dispatch = useDispatch();
    const placeOrder = async (paypalEmail, paymentStatus, paypalPayerId, paypalTransactionId) => {
        const orderData = {
            shippingInfo,
            orderItems: cart,
            totalPrice: calculateTotal(),
            totalPriceAfterDiscount: calculateTotal(),
            paymentInfo: {
                paymentMethod: 'paypal',
                paypalEmail: paypalEmail,
                paymentStatus: paymentStatus,
                paypalPayerId: paypalPayerId,
                paypalTransactionId: paypalTransactionId,
            },
        };
        dispatch(createOrder(orderData));

    };

    const handlePaymentSuccess = (details) => {
        if (!shippingInfo) {
            toast.error("Shipping information is missing. Can't place order.");
            return;
        }
        const paypalEmail = details.payer?.email_address || '';
        const paypalPayerId = details.payer?.payer_id || '';
        const paymentStatus = details.status || '';
        const paypalTransactionId = details.id || '';

        placeOrder(paypalEmail, paymentStatus, paypalPayerId, paypalTransactionId);

        dispatch(resetCart());
        toast.success("Order placed successfully!");
        navigate("/")
    };

    return (
        <div className='lg:w-2/6 w-full bg-white p-4'>
            <div className='p-4'>
                <div className='text-gray-700'>
                    <p className='text-[16px] font-medium flex justify-between mb-2'>Quantity <span>{totalQuantity}</span></p>
                    <p className='text-[16px] font-medium flex justify-between mb-2'>SubTotal <span>${subtotal}</span></p>
                    <p className='text-[16px] font-medium flex justify-between mb-2'>Shipping <span>${shippingFee}</span></p>
                    <p className='text-[16px] font-medium flex justify-between mb-2'>Tax 15% <span>${calculateTax(subtotal)}</span></p>
                    <hr className='my-5' />
                    <p className='text-[16px] font-bold flex justify-between mb-4'>Total <span>${calculateTotal()}</span></p>
                </div>
            </div>
            <PayPalButton
                amount={calculateTotal()}
                currency="USD"
                onSuccess={handlePaymentSuccess}
                onError={(error) => {
                    toast.error('Payment error:', error);
                }}
                options={{
                    clientId: "AXwWXSSnPGX8bALY1GqEU2yy3uG8F4LX98KftAmg33H2Y8Npa2oaw0ywG7fq52QLrEwSfo4r3fKgJdEB",
                }}
            />
        </div>
    );
};

export default OrderSummary;
