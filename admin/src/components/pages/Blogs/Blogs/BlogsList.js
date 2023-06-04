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
        title: 'NAME',
        dataIndex: 'name',
    },
    {
        title: 'CATEGORY',
        dataIndex: 'category',
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
        image: <img src='https://1000logos.net/wp-content/uploads/2016/11/Chanel-logo.png' alt='img' className='w-24 h-12'/>,
        name: `Red ${i}`,
        category: `Technology ${i}`,
        actions: <BiTrash />,

    });
}

const BrandsList = () => {
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
export default BrandsList;