const OrderSummary = ({ cart }) => {
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

    return (
        <div className='lg:w-2/6 w-full bg-white p-4'>
            <h1 className='text-gray-600 font-semibold text-lg my-5 ml-4'>Items</h1>
            <div>
                {cart?.map((cartItem) => (
                    <div key={cartItem._id} className='flex justify-between p-4'>
                        <div className='flex gap-8'>
                            <div className="indicator">
                                <img src={cartItem?.images && cartItem.images[0] ? cartItem.images[0].url : 'fallback-image-url'} className='w-12 h-12' alt="" />
                                <span className="badge badge-sm indicator-item bg-primary py-3 font-bold border-none text-white">{cartItem.quantity}</span>
                            </div>
                            <h1 className='font-semibold text-gray-700'>{cartItem?.productId?.name}</h1>
                        </div>
                        <h3 className='font-semibold text-gray-700'>${cartItem.price}</h3>
                    </div>
                ))}
            </div>
            <hr className='my-5' />
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
        </div>
    );
};

export default OrderSummary;
