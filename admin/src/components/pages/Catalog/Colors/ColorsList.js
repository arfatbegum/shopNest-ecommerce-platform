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
        image: <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/Solid_red.svg/512px-Solid_red.svg.png?20150316143248' alt='img' className='w-16 h-16 rounded'/>,
        name: `Red ${i}`,
        published:<Switch size="small" defaultChecked />,
        actions: <BiTrash />,

    });
}

const ColorsList = () => {
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
export default ColorsList;