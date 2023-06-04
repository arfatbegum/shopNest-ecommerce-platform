import React from 'react';
import { Select, Space, Table } from 'antd';
import { useState } from 'react';
import { BiTrash, BiEdit } from 'react-icons/bi';
import { FaSearchPlus } from 'react-icons/fa';

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
        title: 'EMAIL',
        dataIndex: 'email',
    },
    {
        title: 'PHONE NO.',
        dataIndex: 'phone',
    },
    {
        title: 'DATE',
        dataIndex: 'date',
    },
    {
        title: 'STATUS',
        dataIndex: 'status',
    },
    {
        title: 'ACTIONS',
        dataIndex: 'actions'
    },
];
const data = [];

const EnquiriesList = () => {
    const [selectedRowKeys, setSelectedRowKeys] = useState([]);
    const handleChange = (value) => {
        console.log(`selected ${value}`);
    };
    for (let i = 1; i < 46; i++) {
        data.push({
            key: i,
            number: i,
            name: `Alicia Brown ${i}`,
            email: `admin@gmail.com ${i}`,
            phone: `0533431648 ${i}`,
            date: Date.now(),
            status: (
                <>
                    <Select
                        defaultValue="Submitted"
                        style={{
                            width: 120,
                          }}
                        onChange={handleChange}
                        options={[
                            {
                                options: [
                                    {
                                        value: 'Submitted',
                                    },
                                    {
                                        value: 'Contacted',
                                    },
                                    {
                                        value: 'In Progress',
                                    },
                                    {
                                        value: 'Resolved',
                                    },
                                ],
                            }
                        ]}
                    />
                </>
            ),
            actions: (
                <Space size="middle">
                <BiEdit className='text-[#2f60b5] text-xl' />
                    <BiTrash className='text-red-600 text-xl' />
                    <FaSearchPlus className='text-[#2f60b5] text-lg' />
                </Space>
            ),

        });
    }

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
export default EnquiriesList;