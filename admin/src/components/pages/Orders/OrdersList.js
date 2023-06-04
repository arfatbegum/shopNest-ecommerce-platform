import React from 'react';
import { Space, Table } from 'antd';
import { useState } from 'react';
import { BiTrash, BiEdit } from 'react-icons/bi';
const columns = [
    {
        title: 'SL. NO',
        dataIndex: 'number',
    },
    {
        title: 'CUSTOMER NAME',
        dataIndex: 'name',
    },
    {
        title: 'EMAIL',
        dataIndex: 'email',
    },
    {
        title: 'AMOUNT',
        dataIndex: 'amount',
    },
    {
        title: 'METHOD',
        dataIndex: 'method',
    },
    {
        title: 'PHONE NO.',
        dataIndex: 'phone',
    },
    {
        title: 'JOINING DATE',
        dataIndex: 'date',
    },
    {
        title: 'STATUS',
        dataIndex: 'status',
    },
    {
        title: 'ACTIONS',
        dataIndex: 'actions',
        render: () => (
            <Space size="middle">
                <BiEdit className='text-[#2f60b5] text-xl' />
                <BiTrash className='text-red-600 text-xl' />
            </Space>
        ),
    },
];
const data = [];
for (let i = 1; i < 46; i++) {
    data.push({
        key: i,
        number: i,
        image: <img src='https://www.nasa.gov/sites/default/files/thumbnails/image/alicia_brown.jpg' alt='img' className='w-16 h-16' />,
        name: `Alicia Brown ${i}`,
        email: `customer@gmail.com ${i}`,
        amount: <p className='font-medium uppercase'>$160</p>,
        method:<p className='font-medium uppercase'>cash</p>,
        phone: `0533431648 ${i}`,
        date: Date.now(),
        status: <p className='bg-green-600 text-white text-center rounded font-medium py-1'>Processing</p>,
        actions: <BiTrash />,

    });
}

const OrdersList = () => {
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
export default OrdersList;