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
        title: 'IMAGE',
        dataIndex: 'image',
    },
    {
        title: 'NAME',
        dataIndex: 'name',
    },
    {
        title: 'EMAIL',
        dataIndex: 'email',
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
        image: <img src='https://www.nasa.gov/sites/default/files/thumbnails/image/alicia_brown.jpg' alt='img' className='w-16 h-16'/>,
        name: `Alicia Brown ${i}`,
        email: `admin@gmail.com ${i}`,
        phone: `0533431648 ${i}`,
        date: Date.now(),
        actions: <BiTrash />,

    });
}

const CustomersList = () => {
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
export default CustomersList;