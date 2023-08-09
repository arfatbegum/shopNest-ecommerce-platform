import React, { useEffect } from 'react';
import { Drawer, Modal, Space, Table } from 'antd';
import { useState } from 'react';
import { BiTrash, BiEdit } from 'react-icons/bi';
import { useDispatch, useSelector } from "react-redux";
import UpdateBlog from './UpdateBlog';
import { deleteABlog, getBlogs, resetState } from '../../../../features/blog/blogSlice';

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
        title: 'CATEGORY',
        dataIndex: 'category',
    },
    {
        title: 'ACTIONS',
        dataIndex: 'actions'
    },
];

const BrandsList = () => {
    const [open, setOpen] = useState(false);
    const [openDrawer, setOpenDrawer] = useState(false);
    const [blogId, setblogId] = useState("");

    const showModal = (e) => {
        setOpen(true);
        setblogId(e);
    };

    const hideModal = () => {
        setOpen(false);
    };

    const showDrawer = (e) => {
        setOpenDrawer(true);
        setblogId(blogState[e]._id);
    };

    const onClose = () => {
        setOpenDrawer(false);
    };

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(resetState());
        dispatch(getBlogs());
    }, [dispatch]);

    const blogState = useSelector((state) => state.blog.blogs);
    const data1 = [];
    for (let i = 0; i < blogState.length; i++) {
        data1.push({
            key: i + 1,
            name: blogState[i].title,
            category: blogState[i].category,
            actions: (
                <Space size="middle">
                    <BiEdit
                        className='text-[#2f60b5] text-xl'
                        onClick={() => showDrawer(i)}
                    />
                    <BiTrash
                        className='text-red-600 text-xl'
                        onClick={() => showModal(blogState[i]._id)}
                    />
                </Space>
            ),
        });
    }
    const deleteBlog = (e) => {
        dispatch(deleteABlog(e));

        setOpen(false);
        setTimeout(() => {
            dispatch(getBlogs());
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
                    deleteBlog(blogId);
                }}
                onCancel={hideModal}
                okText="Ok"
                cancelText="Cancel"
            >
                Are you sure you want to delete this Blog?
            </Modal>
            <Drawer title="Update Blog" width={700} placement="right" onClose={onClose} open={openDrawer}>
                <UpdateBlog blogId={blogId} onClose={onClose} />
            </Drawer>
        </div>
    );
};
export default BrandsList;