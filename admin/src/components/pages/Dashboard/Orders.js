import React from 'react';
import { Button, Space, Table } from 'antd';
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
                <BiEdit className='text-blue-700'/>
            </Space>
        ),
    },
];
const data = [];
for (let i = 1; i < 46; i++) {
    data.push({
        key: i,
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
    const [selectedRowKeys, setSelectedRowKeys] = useState([]);
    const [loading, setLoading] = useState(false);
    const start = () => {
        setLoading(true);
        // ajax request after empty completing
        setTimeout(() => {
            setSelectedRowKeys([]);
            setLoading(false);
        }, 1000);
    };
    const onSelectChange = (newSelectedRowKeys) => {
        console.log('selectedRowKeys changed: ', newSelectedRowKeys);
        setSelectedRowKeys(newSelectedRowKeys);
    };
    const rowSelection = {
        selectedRowKeys,
        onChange: onSelectChange,
    };
    const hasSelected = selectedRowKeys.length > 0;
    return (
        <div>
            <div
                style={{
                    marginBottom: 16,
                }}
            >
                <Button type="primary" onClick={start} disabled={!hasSelected} loading={loading}>
                    Reload
                </Button>
                <span
                    style={{
                        marginLeft: 8,
                    }}
                >
                    {hasSelected ? `Selected ${selectedRowKeys.length} items` : ''}
                </span>
            </div>
            <Table rowSelection={rowSelection} columns={columns} dataSource={data} />
        </div>
    );
};

export default Orders;