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
        title: 'ORDER TIME',
        dataIndex: 'time',
    },
    {
        title: 'CUSTOMER NAME',
        dataIndex: 'name',
    },
    {
        title: 'Address',
        dataIndex: 'address',
    },
    {
        title: 'METHOD',
        dataIndex: 'method',
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
        title: 'Action',
        dataIndex: 'action',
        render: () => (
            <Space size="middle">
                <BiTrash className='text-red-600'/>
                <BiEdit className='text-[#2f60b5]'/>
            </Space>
        ),
    },
];
const data = [];
for (let i = 1; i < 46; i++) {
    data.push({
        number: i,
        name: `Edward King ${i}`,
        time: new Date().toGMTString(),
        method: "cash",
        amount: 235,
        status: "pending",
        address: `London, Park Lane no. ${i}`,
        action: <BiTrash />,

    });
}
const Orders = () => {

    return (
        <div>
            <Table  columns={columns} dataSource={data} />
        </div>
    );
};

export default Orders;