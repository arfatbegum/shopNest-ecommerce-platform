import React, { useEffect } from 'react';
import { Modal, Space, Table } from 'antd';
import { useState } from 'react';
import { BiTrash } from 'react-icons/bi';
import { FaSearchPlus } from 'react-icons/fa';
import { deleteAEnquiry, updateAEnquiry, getEnquiries, resetState } from '../../../features/enquiry/enquirySlice';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from "react-router-dom";

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
        title: 'MOBILE',
        dataIndex: 'mobile',
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

const EnquiriesList = () => {
    const dispatch = useDispatch();
    const [open, setOpen] = useState(false);
    const [enquiryId, setEnquiryId] = useState("");

    const showModal = (e) => {
        setOpen(true);
        setEnquiryId(e);
    };

    const hideModal = () => {
        setOpen(false);
    };

    useEffect(() => {
        dispatch(resetState());
        dispatch(getEnquiries());
    }, [dispatch]);

    const enquiryState = useSelector((state) => state.enquiry.enquiries);

    const data1 = [];
    for (let i = 0; i < enquiryState.length; i++) {
        data1.push({
            key: i + 1,
            name: enquiryState[i].name,
            email: enquiryState[i].email,
            mobile: enquiryState[i].mobile,
            date: enquiryState[i].createdAt,
            status: (
                <select
                    name=""
                    defaultValue={enquiryState[i].status ? enquiryState[i].status : "Submitted"}
                    className="p-2"
                    onChange={(e) => setEnquiryStatus(e.target.value, enquiryState[i]._id)}
                >
                    <option value="Submitted">Submitted</option>
                    <option value="Contacted">Contacted</option>
                    <option value="In Progress">In Progress</option>
                    <option value="Resolved">Resolved</option>
                </select>
            ),

            actions: (
                <Space size="middle">
                    <BiTrash
                        className='text-red-600 text-xl'
                        onClick={() => showModal(enquiryState[i]._id)}
                    />
                    <Link to={`/admin/enquiryDetails/${enquiryState[i]._id}`} >
                        <FaSearchPlus className='text-[#2f60b5] text-lg' />
                    </Link>
                </Space>
            ),
        });
    }
    const setEnquiryStatus = (e, i) => {
        console.log(e, i);
        const data = { id: i, enqData: e };
        dispatch(updateAEnquiry(data));
    };

    const deleteEnquiry = (e) => {
        dispatch(deleteAEnquiry(e));

        setOpen(false);
        setTimeout(() => {
            dispatch(getEnquiries());
        }, 100);
    };

    return (
        <div>
            <Table columns={columns} dataSource={data1} />
            <Modal
                title="Confirmation"
                centered
                open={open}
                onOk={() => {
                    deleteEnquiry(enquiryId);
                }}
                onCancel={hideModal}
                okText="Ok"
                cancelText="Cancel"
            >
                Are you sure you want to delete this brand?
            </Modal>
        </div>
    );
};
export default EnquiriesList;