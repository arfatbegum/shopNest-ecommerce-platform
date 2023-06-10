import React, { useEffect } from 'react';
import { Drawer, Modal, Space, Table } from 'antd';
import { useState } from 'react';
import { BiTrash, BiEdit } from 'react-icons/bi';
import { useDispatch, useSelector } from "react-redux";
import { deleteABrand, getBrands, resetState } from "../../../../features/brand/brandSlice.js";
import UpdateBrand from './UpdateBrand.js';

const columns = [
    {
        title: "SNo",
        dataIndex: "key",
    },
    {
        title: "Name",
        dataIndex: "name",
        sorter: (a, b) => a.name.length - b.name.length,
    },
    {
        title: "Action",
        dataIndex: "action",
    },
]


const BrandsList = () => {
    const [open, setOpen] = useState(false);
    const [openDrawer, setOpenDrawer] = useState(false);
    const [brandId, setbrandId] = useState("");

    const showModal = (e) => {
        setOpen(true);
        setbrandId(e);
    };

    const hideModal = () => {
        setOpen(false);
    };

    const showDrawer = (e) => {
        setOpenDrawer(true);
        setbrandId(brandState[e]._id);
    };

    const onClose = () => {
        setOpenDrawer(false);
    };

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(resetState());
        dispatch(getBrands());
    }, [dispatch]);

    const brandState = useSelector((state) => state.brand.brands);

    const data1 = [];
    for (let i = 0; i < brandState.length; i++) {
        data1.push({
            key: i + 1,
            name: brandState[i].title,
            action: (
                <Space size="middle">
                    <BiEdit
                        className='text-[#2f60b5] text-xl'
                        onClick={() => showDrawer(i)}
                    />
                    <BiTrash
                        className='text-red-600 text-xl'
                        onClick={() => showModal(brandState[i]._id)}
                    />
                </Space>
            ),

        });
    }
    const deleteBrand = (e) => {
        dispatch(deleteABrand(e));

        setOpen(false);
        setTimeout(() => {
            dispatch(getBrands());
        }, 100);
    };

    return (
        <div>
            <Modal
                title="Confirmation"
                centered
                open={open}
                onOk={() => {
                    deleteBrand(brandId);
                }}
                onCancel={hideModal}
                okText="Ok"
                cancelText="Cancel"
            >
                Are you sure you want to delete this brand?
            </Modal>
            <Drawer title="Update Category" width={700} placement="right" onClose={onClose} open={openDrawer}>
                <UpdateBrand brandId={brandId} onClose={onClose} />
            </Drawer>
            <Table columns={columns} dataSource={data1} />
        </div>
    );
};
export default BrandsList;