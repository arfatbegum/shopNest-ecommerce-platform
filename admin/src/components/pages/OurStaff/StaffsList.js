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
        title: 'ROLE',
        dataIndex: 'role',
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
for (let i = 1; i < 46; i++) {
    data.push({
        key: i,
        number: i,
        image: <img src='https://www.nasa.gov/sites/default/files/thumbnails/image/alicia_brown.jpg' alt='img' className='w-16 h-16'/>,
        name: `Alicia Brown ${i}`,
        email: `admin@gmail.com ${i}`,
        role: `Admin ${i}`,
        phone: `0533431648 ${i}`,
        date: Date.now(),
        status: <p className='bg-green-600 text-white text-center rounded font-medium py-1'>Active</p>,
        published:<Switch size="small" defaultChecked />,
        actions: <BiTrash />,

    });
}

const StaffsList = () => {
    const [selectedRowKeys, setSelectedRowKeys] = useState([]);

    const onSelectChange = (newSelectedRowKeys) => {
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
export default StaffsList;