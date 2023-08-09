import React, { useEffect } from 'react';
import { Table } from 'antd';
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { BiTrash, BiEdit } from 'react-icons/bi';
import { getOrders } from "../../../features/auth/authSlice";
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
        title: "Date",
        dataIndex: "date",
    },
    {
        title: 'AMOUNT',
        dataIndex: 'amount',
    },
    {
        title: 'ACTIONS',
        dataIndex: 'actions',
    },
];

const OrdersList = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getOrders());
    }, [dispatch]);

    const orderState = useSelector((state) => state.auth.orders);

    const data1 = [];
    for (let i = 0; i < orderState.length; i++) {
        data1.push({
            key: i + 1,
            name: orderState[i].orderby.firstname,
            amount: orderState[i].paymentIntent.amount,
            date: new Date(orderState[i].createdAt).toLocaleString(),
            action: (
                <>
                    <Link to="/">
                        <BiEdit className='text-[#2f60b5] text-xl' />
                    </Link>
                    <Link to="/">
                        <BiTrash className='text-red-600 text-xl' />
                    </Link>
                    <Link to={`/admin/orderDetails/${orderState[i]._id}`} >
                        <FaSearchPlus className='text-[#2f60b5] text-lg' />
                    </Link>
                </>
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