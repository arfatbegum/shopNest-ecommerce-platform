import React, { useEffect } from 'react';
import { Drawer, Modal, Space, Table } from 'antd';
import { useState } from 'react';
import { BiTrash, BiEdit } from 'react-icons/bi';
import { useDispatch, useSelector } from "react-redux";
import { deleteABlogCategory, getCategories, resetState } from '../../../../redux/features/blogCategories/blogCategorySlice';
import UpdateCategory from './UpdateCategory';
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
        title: 'ACTIONS',
        dataIndex: 'actions',
    },
];

const CategoryList = () => {
    const [openDrawer, setOpenDrawer] = useState(false);
    const [open, setOpen] = useState(false);
    const [blogCategoryId, setBlogCategoryId] = useState("");
   
    const showDrawer = (e) => {
        setOpenDrawer(true);
        setBlogCategoryId(blogCategoryState[e]._id);
    };

    const onClose = () => {
        setOpenDrawer(false);
    };

    const showModal = (e) => {
        setOpen(true);
        setBlogCategoryId(e);
    }

    const hideModal = () => {
        setOpen(false);
    };

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(resetState());
        dispatch(getCategories());
    }, [dispatch]);

    const blogCategoryState = useSelector((state) => state.blogCategory.blogCategories);

    const data1 = [];
    for (let i = 0; i < blogCategoryState.length; i++) {
        data1.push({
            key: i + 1,
            name: blogCategoryState[i].title,
            actions: (
                <Space size="middle">
                    <BiEdit
                        className='text-[#2f60b5] text-xl'
                        onClick={() => showDrawer(i)}
                    />
                    <BiTrash
                        className='text-red-600 text-xl cursor-pointer'
                        onClick={() => showModal(blogCategoryState[i]._id)}
                    />
                </Space>

            ),
        });
    }

    const deleteCategory = () => {
        dispatch(deleteABlogCategory(blogCategoryId));
        setOpen(false);
        setTimeout(() => {
            dispatch(getCategories());
        }, 1000);
    }
    return (
        <div>
            <Table columns={columns} dataSource={data1} />
            <Modal
                title="Confirmation"
                centered
                open={open}
                onOk={() => {
                    deleteCategory(blogCategoryId);
                }}
                onCancel={hideModal}
                okText="Ok"
                cancelText="Cancel"
            >
                Are you sure you want to delete this Blog Category?
            </Modal>
            <Drawer title="Update Category" width={700} placement="right" onClose={onClose} open={openDrawer}>
                <UpdateCategory categoryId={blogCategoryId} onClose={onClose} />
            </Drawer>
        </div>
    );
};
export default CategoryList;