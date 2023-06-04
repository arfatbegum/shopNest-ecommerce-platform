import { Space, Table } from 'antd';
import React from 'react';
import { BiEdit, BiTrash } from 'react-icons/bi';

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
    const data1 = [];
    for (let i = 0; i < 3; i++) {
        data1.push({
            key: i + 1,
            name: `Smart Watch ${i}`,
            brand: `Apple ${i}`,
            count: 2,
            amount: 123,
            color: `Brown ${i}`,
            date: Date.now(),
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