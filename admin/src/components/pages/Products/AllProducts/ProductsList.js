import React, { useEffect } from 'react';
import { Space, Switch, Table } from 'antd';
import { BiTrash, BiEdit } from 'react-icons/bi';
import { FaSearchPlus } from 'react-icons/fa';
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from '../../../../features/product/productSlice';


const columns = [
    {
        title: 'SL. NO',
        dataIndex: 'key',
    },
    {
        title: 'IMAGE',
        dataIndex: 'image',
    },
    {
        title: 'NAME',
        dataIndex: 'name',
    },
    {
        title: 'CATEGORY',
        dataIndex: 'category',
    },
    {
        title: 'COLOR',
        dataIndex: 'color',
    },
    {
        title: 'BRAND',
        dataIndex: 'brand',
    },
    {
        title: 'PRICE',
        dataIndex: 'price',
    },
    {
        title: 'SALE PRICE',
        dataIndex: 'salePrice',
    },
    {
        title: 'QUANTITY',
        dataIndex: 'quantity',
    },
    {
        title: 'STATUS',
        dataIndex: 'status',
    },
    {
        title: 'PUBLISHED',
        dataIndex: 'published',
    },
    {
        title: 'ACTIONS',
        dataIndex: 'actions',
    },
];

const ProductsList = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getProducts());
    }, [dispatch]);

    const productState = useSelector((state) => state.product.products);

    const data1 = [];
    for (let i = 0; i < productState.length; i++) {
        data1.push({
            key: i + 1,
            image: <img src='' alt='img' className='w-16 h-16' />,
            name: productState[i].name,
            brand: productState[i].brand,
            category: productState[i].category,
            color: productState[i].color,
            price: <div className='font-semibold'>${productState[i].price}</div>,
            salePrice: <div className='font-semibold'>${productState[i].salePrice}</div>,
            quantity: productState[i].quantity,
            status: productState[i].quantity > 0 ?
                <p className='bg-green-600 text-white text-center rounded font-medium py-1'>In stock</p>
                :
                <p className='bg-red-600 text-white text-center rounded font-medium py-1'>Stock out</p>,
            published: <div className='text-center'><Switch size="small" defaultChecked /></div>,
            actions: (
                <Space size="middle">
                    <BiEdit className='text-[#2f60b5] text-xl' />
                    <BiTrash className='text-red-600 text-xl' />
                    <FaSearchPlus className='text-[#2f60b5] text-lg' />
                </Space>
            ),

        });
    }
    return (
        <div>
            <Table columns={columns} dataSource={data1} />
        </div>
    );
};
export default ProductsList;