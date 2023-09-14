import { Space, Table } from 'antd';
import React, { useEffect } from 'react';
import { BiEdit, BiTrash } from 'react-icons/bi';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { getOrderByUser } from '../../../redux/features/auth/authSlice';

const columns = [
    {
        title: "SL. No",
        dataIndex: "key",
    },
    {
        title: "Product Name",
        dataIndex: "name",
    },
    {
        title: "Brand",
        dataIndex: "brand",
    },
    {
        title: "Count",
        dataIndex: "count",
    },
    {
        title: "Color",
        dataIndex: "color",
    },
    {
        title: "Amount",
        dataIndex: "amount",
    },
    {
        title: "Date",
        dataIndex: "date",
    },

    {
        title: "Action",
        dataIndex: "action",
    },
];

const OrderDetails = () => {
    const location = useLocation();
    const dispatch = useDispatch();

    const userId = location.pathname.split("/")[3];
    useEffect(() => {
        dispatch(getOrderByUser(userId));
    }, [dispatch,userId]);
    const orderState = useSelector((state) => state.auth.orderbyuser[0].products);
    const data1 = [];
    for (let i = 0; i < 3; i++) {
        data1.push({
            key: i + 1,
            name: orderState[i].product.title,
            brand: orderState[i].product.brand,
            count: orderState[i].count,
            amount: orderState[i].product.price,
            color: orderState[i].product.color,
            date: orderState[i].product.createdAt,
            action: (
                <>
                    <Space size="middle">
                        <BiEdit className='text-[#2f60b5] text-xl' />
                        <BiTrash className='text-red-600 text-xl' />
                    </Space>
                </>
            ),
        });
    }
    return (
        <div>
            <h3 className="font-bold text-xl text-black uppercase mb-5">Order Details</h3>
            <div>
                <Table columns={columns} dataSource={data1} />
            </div>
        </div>
    );
};

export default OrderDetails;