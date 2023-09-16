import React, { useEffect } from 'react';
import { Drawer, Modal, Space, Table } from 'antd';
import { useState } from 'react';
import { BiTrash, BiEdit } from 'react-icons/bi';
import { useDispatch, useSelector } from "react-redux";
import { deleteACoupon, getAllCoupon } from "../../../../redux/features/coupon/couponSlice";
import UpdateCoupon from './UpdateCoupon';

const columns = [
    {
        title: 'SL. NO',
        dataIndex: 'key',
    },
    {
        title: 'COUPONS NAME',
        dataIndex: 'name',
    },
    {
        title: 'DISCOUNT',
        dataIndex: 'discount',
    },
    {
        title: 'START DATE',
        dataIndex: 'start',
    },
    {
        title: 'EXPIRY DATE',
        dataIndex: 'expiry',
    },
    {
        title: 'ACTIONS',
        dataIndex: 'actions',
    },
];

const CouponsList = () => {
    const [open, setOpen] = useState(false);
    const [openDrawer, setOpenDrawer] = useState(false);
    const [couponId, setcouponId] = useState("");
    const dispatch = useDispatch();
    const couponState = useSelector((state) => state.coupon.coupons);

    useEffect(() => {
        dispatch(getAllCoupon());
    }, [dispatch]);
    
    const showModal = (e) => {
        setOpen(true);
        setcouponId(e);
    };

    const hideModal = () => {
        setOpen(false);
    };

    const showDrawer = (e) => {
        setOpenDrawer(true);
        setcouponId(couponState[e]._id);
    };

    const onClose = () => {
        setOpenDrawer(false);
    };

    const data1 = [];
    for (let i = 0; i < couponState.length; i++) {
        data1.push({
            key: i + 1,
            name: couponState[i].name,
            discount: couponState[i].discount,
            start: couponState[i].createdAt,
            expiry: new Date(couponState[i].expiry).toLocaleString(),
            actions: (
                <Space size="middle">
                    <BiEdit
                        className='text-[#2f60b5] text-xl'
                        onClick={() => showDrawer(i)}
                    />
                    <BiTrash
                        className='text-red-600 text-xl'
                        onClick={() => showModal(couponState[i]._id)}
                    />
                </Space>
            ),
        });
    }
    const deleteCoupon = (e) => {
        dispatch(deleteACoupon(e));
        setOpen(false);
        setTimeout(() => {
            dispatch(getAllCoupon());
        }, 1000);
    };

    return (
        <div>
            <Table columns={columns} dataSource={data1} />
            <Modal
                title="Confirmation"
                centered
                open={open}
                onOk={() => {
                    deleteCoupon(couponId);
                }}
                onCancel={hideModal}
                okText="Ok"
                cancelText="Cancel"
            >
                Are you sure you want to delete this Coupon?
            </Modal>
            <Drawer title="Update Coupon" width={700} placement="right" onClose={onClose} open={openDrawer}>
                <UpdateCoupon couponId={couponId} onClose={onClose} />
            </Drawer>
        </div>
    );
};
export default CouponsList;