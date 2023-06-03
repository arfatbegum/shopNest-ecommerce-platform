import React from 'react';
import { Space, Switch, Table } from 'antd';
import { useState } from 'react';
import { BiTrash, BiEdit } from 'react-icons/bi';
const columns = [
    {
        title: 'SL. NO',
        dataIndex: 'number',
    },
    {
        title: 'COUPONS NAME',
        dataIndex: 'name',
    },
    {
        title: 'DISCOUNT',
        dataIndex: 'discount',
    },
    {
        title: 'START DATE',
        dataIndex: 'start',
    },
    {
        title: 'END DATE',
        dataIndex: 'end',
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
            </Space>
        ),
    },
];
const data = [];
for (let i = 1; i < 11; i++) {
    data.push({
        key: i,
        number: i,
        name: `BLACK ${i}`,
        discount: `${i}%`,
        start: Date.now().toString(),
        end: Date.now(),
        status: <p className='bg-green-600 text-white text-center rounded font-medium py-1'>Active</p>,
        published: <div className='text-center'><Switch size="small" defaultChecked/></div>,
        actions: <BiTrash />,

    });
}

const CouponsList = () => {
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
export default CouponsList;