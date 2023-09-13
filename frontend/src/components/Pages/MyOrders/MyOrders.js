import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getOrders } from "../../../redux/features/user/userSlice";
import Meta from "../../Shared/Meta";
import BreadCrumb from "../../Shared/BreadCrumb";
import Loader from "../../Shared/Loader";


const MyOrders = () => {
    const dispatch = useDispatch();
    const orders = useSelector((state) => state.auth.orders);
    const isLoading = useSelector((state) => state?.auth?.isLoading);

    useEffect(() => {
        dispatch(getOrders());
    }, [dispatch])

    return (
        <div>
            <Meta title={"My Orders - ShopNest"} />
            <BreadCrumb title="My Orders" />
            {isLoading ? (
                <Loader />
            ) : (
                <>
                    <div className="bg-white rounded lg:mx-10 mx-4">
                        <table className="min-w-max w-full table-auto">
                            <thead>
                                <tr className="bg-gray-200 text-gray-600 uppercase text-sm leading-normal">
                                    <th className="py-3 px-6 text-left">Name</th>
                                    <th className="py-3 px-6 text-left">Address</th>
                                    <th className="py-3 px-6 text-left">Items</th>
                                    <th className="py-3 px-6 text-center">Quantity</th>
                                    <th className="py-3 px-6 text-center">Total</th>
                                    <th className="py-3 px-6 text-center">Payment Method</th>
                                    <th className="py-3 px-6 text-center">Payment Status</th>
                                    <th className="py-3 px-6 text-center">PayerId</th>
                                    <th className="py-3 px-6 text-center">TransactionId</th>
                                    <th className="py-3 px-6 text-center">Status</th>
                                </tr>
                            </thead>
                            <tbody className="text-gray-700 text-sm font-normal">
                                {orders &&
                                    orders.length > 0 &&
                                    orders.map((order) => (
                                        <tr className="border-b border-gray-200 bg-white" key={order._id}>
                                            <td className="py-3 px-6 text-center">
                                                {order.shippingInfo.firstname} {order.shippingInfo.lastname}
                                            </td>
                                            <td className="py-3 px-6 text-center">
                                                {order.shippingInfo.address}, {order.shippingInfo.city}
                                            </td>
                                            <td className="py-3 px-6 text-left">
                                                {order.orderItems.map((item, index) => (
                                                    <div className="avatar" key={index}>
                                                        <div className="w-12">
                                                            <img src={item?.productId.images && item.productId.images[0] ? item.productId.images[0].url : 'fallback-image-url'} alt="Product" />
                                                        </div>
                                                    </div>
                                                ))}
                                            </td>
                                            <td className="py-3 px-6 text-left">
                                                {order.orderItems.map((item) => (
                                                    <span key={item.productId._id}>{item.quantity}</span>
                                                ))}
                                            </td>
                                            <td className="py-3 px-6 text-center">
                                                ${order.totalPrice}
                                            </td>
                                            <td className="py-3 px-6 text-center uppercase font-bold">
                                                {order.paymentInfo.paymentMethod}
                                            </td>
                                            <td className="py-3 px-6 text-center text-green-500 font-bold">
                                                {order.paymentInfo.paymentStatus}
                                            </td>
                                            <td className="py-3 px-6 text-center">
                                                {order.paymentInfo.paypalPayerId}
                                            </td>
                                            <td className="py-3 px-6 text-center">
                                                {order.paymentInfo.paypalTransactionId}
                                            </td>
                                            <td className="py-3 px-6 text-center">
                                                {order.orderStatus}
                                            </td>
                                        </tr>
                                    ))}
                            </tbody>
                        </table>
                    </div>
                </>
            )
            }
        </div >

    );
};

export default MyOrders;