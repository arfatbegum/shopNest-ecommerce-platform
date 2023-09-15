import { Table } from 'antd';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation, Link } from 'react-router-dom';
import { getOrderByUser } from '../../../redux/features/auth/authSlice';
import { FaBackspace, FaBackward } from 'react-icons/fa';
import { BiArrowBack, BiArrowFromRight, BiRightArrow } from 'react-icons/bi';

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
        title: "Color",
        dataIndex: "color",
    },
    {
        title: "Price",
        dataIndex: "price",
    },
    {
        title: "Qunatity",
        dataIndex: "quantity",
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
    const orderState = useSelector((state) => state?.auth?.orderbyuser?.getOrder);
    const orderItems = orderState?.orderItems || [];

    useEffect(() => {
        dispatch(getOrderByUser(userId));
    }, [dispatch, userId]);

    const data1 = [];
    for (let i = 0; i < orderItems.length; i++) {
        data1.push({
            key: i + 1,
            name: orderItems[i].productId?.name,
            brand: orderItems[i].productId?.brand,
            price: orderItems[i].price,
            quantity: orderItems[i].quantity,
            action: (
                <Link className='flex items-center gap-2 text-blue-700 font-semibold' to="/admin/orders">
                   Go Orders<BiRightArrow/>
                </Link>
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