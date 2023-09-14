import React, { useEffect } from 'react';
import { Table } from 'antd';
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getOrders, updateOrderStatus } from "../../../redux/features/auth/authSlice";
import { FaSearchPlus } from 'react-icons/fa';
const columns = [
    {
        title: 'SL. NO',
        dataIndex: 'key',
    },
    {
        title: 'CUSTOMER NAME',
        dataIndex: 'name',
    },
    {
        title: 'ADDRESS',
        dataIndex: 'address',
    },
    {
        title: "DATE",
        dataIndex: "date",
    },
    {
        title: "PAYMENT METHOD",
        dataIndex: "paymentMethod",
    },
    {
        title: "PAYMENT STATUS",
        dataIndex: "paymentStatus",
    },
    {
        title: "TRANSACTION ID",
        dataIndex: "transactionId",
    },
    {
        title: 'AMOUNT',
        dataIndex: 'amount',
    },
    {
        title: 'STATUS',
        dataIndex: 'status',
    },
    {
        title: 'ACTIONS',
        dataIndex: 'actions',
    },
];

const OrdersList = () => {
    const dispatch = useDispatch();
    const orderState = useSelector((state) => state.auth.orders);
    console.log(orderState)
    useEffect(() => {
        dispatch(getOrders());
    }, [dispatch])

    const handleStatusChange = (orderId, newStatus) => {
        updateOrderStatus(orderId, newStatus);
    };

    const data1 = [];
    for (let i = 0; i < orderState.length; i++) {
        data1.push({
            key: i + 1,
            name: orderState[i].shippingInfo.firstname + " " + orderState[i].shippingInfo.lastname,
            address: orderState[i].shippingInfo.address + "," + orderState[i].shippingInfo.city + "," + orderState[i].shippingInfo.country,
            paymentMethod: orderState[i].paymentInfo.paymentMethod,
            paymentStatus: orderState[i].paymentInfo.paymentStatus,
            transactionId: orderState[i].paymentInfo.paypalTransactionId,
            amount: orderState[i].totalPrice,
            date: new Date(orderState[i].createdAt).toLocaleString(),
            status: (
                <select
                    name=""
                    defaultValue={orderState[i].orderStatus ? orderState[i].orderStatus : "Ordered"}
                    className="p-2"
                    onChange={(e) => handleStatusChange(orderState[i]._id, e.target.value)}
                >
                    <option value="Ordered">Ordered</option>
                    <option value="Processing">Processing</option>
                    <option value="Delivered">Delivered</option>
                    <option value="Cancelled">Cancelled</option>
                </select>
            ),
            actions: (
                <Link to={`/admin/orderDetails/${orderState[i]._id}`} >
                    <FaSearchPlus className='text-[#2f60b5] text-lg' />
                </Link>
            ),
        });
    }
    return (
        <div>
            <Table columns={columns} dataSource={data1} />
        </div>
    );
};
export default OrdersList;