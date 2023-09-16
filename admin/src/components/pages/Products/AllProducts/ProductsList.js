import React, { useEffect, useState } from 'react';
import { Drawer, Modal, Space, Switch, Table } from 'antd';
import { BiTrash, BiEdit } from 'react-icons/bi';
import { FaSearchPlus } from 'react-icons/fa';
import { useDispatch, useSelector } from "react-redux";
import { deleteAProduct, getProducts } from '../../../../redux/features/product/productSlice';
import UpdateProduct from './UpdateProduct';


const columns = [
    {
        title: 'SL. NO',
        dataIndex: 'key',
    },
    {
        title: 'IMAGE',
        dataIndex: 'image',
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
        title: 'BRAND',
        dataIndex: 'brand',
    },
    {
        title: 'PRICE',
        dataIndex: 'price',
    },
    {
        title: 'SALE PRICE',
        dataIndex: 'salePrice',
    },
    {
        title: 'QUANTITY',
        dataIndex: 'quantity',
    },
    {
        title: 'STATUS',
        dataIndex: 'status',
    },
    {
        title: 'PUBLISHED',
        dataIndex: 'published',
    },
    {
        title: 'ACTIONS',
        dataIndex: 'actions',
    },
];

const ProductsList = () => {
    const [open, setOpen] = useState(false);
    const [openDrawer, setOpenDrawer] = useState(false);
    const [productId, setProductId] = useState("");

    const showModal = (e) => {
        setOpen(true);
        setProductId(e);
    };

    const hideModal = () => {
        setOpen(false);
    };

    const showDrawer = (e) => {
        setOpenDrawer(true);
        setProductId(productState[e]._id);
    };

    const onClose = () => {
        setOpenDrawer(false);
    };

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getProducts());
    }, [dispatch]);

    const productState = useSelector((state) => state.product.products);

    const data = [];
    for (let i = 0; i < productState.length; i++) {
        data.push({
            key: i + 1,
            image: <img src={productState[i]?.images[0]?.url} alt='img' className='w-16 h-16' />,
            name: productState[i].name,
            brand: productState[i].brand,
            category: productState[i].category,
            price: <div className='font-semibold'>${productState[i].price}</div>,
            salePrice: <div className='font-semibold'>${productState[i].salePrice}</div>,
            quantity: productState[i].quantity,
            status: productState[i].quantity > 0 ?
                <p className='bg-green-600 text-white text-center rounded text-sm font-medium'>In stock</p>
                :
                <p className='bg-red-600 text-white text-center rounded font-medium py-1'>Stock out</p>,
            published: <div className='text-center'><Switch size="small" defaultChecked /></div>,
            actions: (
                <Space size="middle">
                    <BiEdit className='text-[#2f60b5] text-xl'
                    onClick={() => showDrawer(i)}
                    />
                    <BiTrash
                        className='text-red-600 text-xl'
                        onClick={() => showModal(productState[i]._id)}
                    />
                    <FaSearchPlus className='text-[#2f60b5] text-lg' />
                </Space>
            ),

        });
    }

    const deleteProduct = (e) => {
        dispatch(deleteAProduct(e));

        setOpen(false);
        setTimeout(() => {
            dispatch(getProducts());
        }, 1000);
    };

    return (
        <div>
            <Modal
                title="Confirmation"
                centered
                open={open}
                onOk={() => {
                    deleteProduct(productId);
                }}
                onCancel={hideModal}
                okText="Ok"
                cancelText="Cancel"
            >
                Are you sure you want to delete this brand?
            </Modal>
            <Drawer title="Update Product" width={700} placement="right" onClose={onClose} open={openDrawer}>
                <UpdateProduct productId={productId} onClose={onClose} />
            </Drawer>
            <Table  columns={columns} dataSource={data} />
        </div>
    );
};
export default ProductsList;