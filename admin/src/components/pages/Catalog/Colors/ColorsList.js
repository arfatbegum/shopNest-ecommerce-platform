import React, { useEffect } from 'react';
import { Drawer, Modal, Space, Table } from 'antd';
import { useState } from 'react';
import { BiTrash, BiEdit } from 'react-icons/bi';
import { useDispatch, useSelector } from "react-redux";
import { deleteAColor, getColors } from "../../../../redux/features/color/colorSlice";
import UpdateColor from './UpdateColor';
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
        title: 'Code',
        dataIndex: 'code',
    },
    {
        title: 'ACTIONS',
        dataIndex: 'actions',
    },
];

const ColorsList = () => {
    const [open, setOpen] = useState(false);
    const [openDrawer, setOpenDrawer] = useState(false);
    const [colorId, setcolorId] = useState("");

    const showModal = (e) => {
        setOpen(true);
        setcolorId(e);
    };

    const hideModal = () => {
        setOpen(false);
    };

    const showDrawer = (e) => {
        setOpenDrawer(true);
        setcolorId(colorState[e]._id);
    };

    const onClose = () => {
        setOpenDrawer(false);
    };

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getColors());
    }, [dispatch]);

    const colorState = useSelector((state) => state.color.colors);
    const isLoading = useSelector((state) => state.color.isLoading);

    const data1 = [];
    for (let i = 0; i < colorState.length; i++) {
        data1.push({
            key: i + 1,
            name: colorState[i].title,
            code: colorState[i].colorCode,
            actions: (
                <Space size="middle">
                    <BiEdit
                        className='text-[#2f60b5] text-xl'
                        onClick={() => showDrawer(i)}
                    />
                    <BiTrash
                        className='text-red-600 text-xl'
                        onClick={() => showModal(colorState[i]._id)}
                    />
                </Space>
            ),
        });
    };

    const deleteColor = (e) => {
        dispatch(deleteAColor(e));

        setOpen(false);
        setTimeout(() => {
            dispatch(getColors());
        }, 1000);
    };
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
                            deleteColor(colorId);
                        }}
                        onCancel={hideModal}
                        okText="Ok"
                        cancelText="Cancel"
                    >
                        Are you sure you want to delete this Color?
                    </Modal>
                    <Drawer title="Update Color" width={700} placement="right" onClose={onClose} open={openDrawer}>
                        <UpdateColor colorId={colorId} onClose={onClose} />
                    </Drawer>
                </div>
            )}
        </>

    );
};
export default ColorsList;