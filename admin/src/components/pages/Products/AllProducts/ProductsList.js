import React from 'react';
import { Space, Switch, Table } from 'antd';
import { useState } from 'react';
import { BiTrash, BiEdit } from 'react-icons/bi';
import { FaSearchPlus } from 'react-icons/fa';
const columns = [
    {
        title: 'SL. NO',
        dataIndex: 'number',
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
        render: () => (
            <Space size="middle">
                <BiEdit className='text-[#2f60b5] text-xl' />
                <BiTrash className='text-red-600 text-xl' />
                <FaSearchPlus className='text-[#2f60b5] text-lg' />
            </Space>
        ),
    },
];
const data = [];
for (let i = 1; i < 46; i++) {
    data.push({
        key: i,
        number: i,
        image: <img src='' alt='img' className='w-16 h-16'/>,
        name: `Edward King ${i}`,
        category: `Watches ${i}`,
        price: 2000,
        salePrice: 1250,
        quantity: 11,
        status: <p className='bg-green-600 text-white text-center rounded font-medium py-1'>In stock</p>,
        published: <div className='text-center'><Switch size="small" defaultChecked/></div>,
        actions: <BiTrash />,

    });
}

const ProductsList = () => {
    const [selectedRowKeys, setSelectedRowKeys] = useState([]);

    const onSelectChange = (newSelectedRowKeys) => {
        console.log('selectedRowKeys changed: ', newSelectedRowKeys);
        setSelectedRowKeys(newSelectedRowKeys);
    };
    const rowSelection = {
        selectedRowKeys,
        onChange: onSelectChange,
    };
    return (
        <div>
            <Table rowSelection={rowSelection} columns={columns} dataSource={data} />
        </div>
    );
};
export default ProductsList;