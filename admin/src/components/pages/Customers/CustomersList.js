import React, { useEffect } from 'react';
import { Space, Table } from 'antd';
import { useDispatch, useSelector } from "react-redux";
import { BiTrash, BiEdit } from 'react-icons/bi';
import { getUsers } from '../../../features/customers/customerSlice';

const columns = [
    {
        title: 'SL. NO',
        dataIndex: 'key',
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
        title: 'MOBILE NO.',
        dataIndex: 'mobile',
    },
    {
        title: 'JOINING DATE',
        dataIndex: 'date',
    },
    {
        title: 'ACTIONS',
        dataIndex: 'actions',
    },
];

const CustomersList = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getUsers());
    }, [dispatch]);

    const customerstate = useSelector((state) => state.customer.customers);

    const data1 = [];
    for (let i = 0; i < customerstate.length; i++) {
        if (customerstate[i].role !== "admin") {
            data1.push({
                key: i + 1,
                name: customerstate[i].firstname + " " + customerstate[i].lastname,
                email: customerstate[i].email,
                mobile: customerstate[i].mobile,
                date: customerstate[i].createdAt,
                actions: (
                    <Space size="middle">
                        <BiEdit className='text-[#2f60b5] text-xl' />
                        <BiTrash className='text-red-500 text-xl' />
                    </Space>
                ),
            });
        }
    }

    return (
        <div>
            <Table columns={columns} dataSource={data1} />
        </div>
    );
};
export default CustomersList;