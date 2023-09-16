import React, { useEffect } from 'react';
import { Drawer, Modal, Space, Table } from 'antd';
import { useState } from 'react';
import { BiTrash, BiEdit } from 'react-icons/bi';
import { useDispatch, useSelector } from "react-redux";
import { deleteAProductCategory, getCategories, resetState } from '../../../../redux/features/productCategories/productCategorySlice';
import UpdateCategory from './UpdateCategory';
import Loader from '../../../Loader/Loader';
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
    const [productCategoryId, setProductCategoryId] = useState("");
    const dispatch = useDispatch();

    const showDrawer = (e) => {
        const categoryData = productCategoryStat[e];
        setOpenDrawer(true);
        setProductCategoryId(categoryData._id);
    };

    const onClose = () => {
        setOpenDrawer(false);
    };

    const showModal = (e) => {
        setOpen(true);
        setProductCategoryId(e);
    }

    const hideModal = () => {
        setOpen(false);
    };

    useEffect(() => {
        dispatch(resetState());
        dispatch(getCategories());
    }, [dispatch]);

    const productCategoryStat = useSelector((state) => state.productCategory.pCategories);
    const isLoading = useSelector((state) => state.productCategory.isLoading);

    const data1 = [];
    for (let i = 0; i < productCategoryStat.length; i++) {
        data1.push({
            key: i + 1,
            name: productCategoryStat[i].title,
            actions: (
                <Space size="middle">
                    <BiEdit
                        className='text-[#2f60b5] text-xl'
                        onClick={() => showDrawer(i)}
                    />
                    <BiTrash
                        className='text-red-600 text-xl cursor-pointer'
                        onClick={() => showModal(productCategoryStat[i]._id)}
                    />
                </Space>

            ),
        });
    }

    const deleteCategory = () => {
        dispatch(deleteAProductCategory(productCategoryId));
        setOpen(false);
        setTimeout(() => {
            dispatch(getCategories());
        }, 1000);
    }
    return (
        <>
            {isLoading ? (
                <Loader />
            ) : (
                <div>
                    <Table columns={columns} dataSource={data1} />
                    <Modal
                        title="Confirmation"
                        centered
                        open={open}
                        onOk={() => {
                            deleteCategory(productCategoryId);
                        }}
                        onCancel={hideModal}
                        okText="Ok"
                        cancelText="Cancel"
                    >
                        Are you sure you want to delete this Product Category?
                    </Modal>
                    <Drawer title="Update Category" width={700} placement="right" onClose={onClose} open={openDrawer}>
                        <UpdateCategory categoryId={productCategoryId} onClose={onClose} />
                    </Drawer>
                </div>
            )}
        </>
    );
};
export default CategoryList;