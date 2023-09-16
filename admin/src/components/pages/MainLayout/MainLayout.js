import React, { useState } from 'react';
import { Outlet, useNavigate, Link } from 'react-router-dom';
import { MenuFoldOutlined, MenuUnfoldOutlined } from '@ant-design/icons';
import { AiOutlineAppstore, AiOutlineCompass, AiOutlineEdit } from 'react-icons/ai';
import { BiStore, BiColor, BiCategory } from 'react-icons/bi';
import { FiSlack } from 'react-icons/fi';
import { FaShoppingBasket } from 'react-icons/fa';
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { MdOutlineLocalGroceryStore, MdNotificationsNone } from 'react-icons/md';
import { RiCoupon4Line } from 'react-icons/ri';
import { HiOutlineUserGroup } from 'react-icons/hi';
import { TbBrand4Chan } from 'react-icons/tb';
import { Layout, Menu, Button, theme, Avatar, Badge } from 'antd';
import Search from 'antd/es/transfer/search';


const { Header, Sider, Content } = Layout;

const MainLayout = () => {
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  const onSearch = (value) => console.log(value);

  const navigate = useNavigate(); 

  const handleSignOut = () => {
    localStorage.clear();
    window.location.reload();
};
  return (
    <Layout>
      <Sider trigger={null} collapsible collapsed={collapsed}>
        <div className="logo text-white text-center font-bold py-4 text-xl flex items-center justify-center"><FaShoppingBasket className='icon text-3xl text-[#e6bd00]' /><span className="name ml-2">ShopNest</span></div>
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={[""]}
          onClick={({ key }) => {
            if (key === "signout") {
            } else {
              navigate(key);
            }
          }}
          items={[
            {
              key: '',
              icon: <AiOutlineAppstore />,
              label: 'Dashboard',
            },
            {
              key: 'products',
              icon: <MdOutlineLocalGroceryStore />,
              label: 'Products',
              children: [
                {
                  key: 'all-products',
                  icon: <MdOutlineLocalGroceryStore />,
                  label: 'All Products',
                }, {
                  key: 'product-categories',
                  icon: <BiCategory />,
                  label: 'Product Categories',
                }],
            },
            {
              key: 'blogs',
              icon: <AiOutlineEdit />,
              label: 'Blogs',
              children: [{
                key: 'all-blogs',
                icon: <AiOutlineEdit />,
                label: 'All Blogs',
              }, {
                key: 'blog-categories',
                icon: <BiCategory />,
                label: 'Blog Categories',
              }],
            },
            {
              key: 'catalog',
              icon: <FiSlack />,
              label: 'Catalog',
              children: [{
                key: 'colors',
                icon: <BiColor />,
                label: 'Colors',
              },
              {
                key: 'brands',
                icon: <TbBrand4Chan />,
                label: 'brands',
              },
              {
                key: 'coupons',
                icon: <RiCoupon4Line />,
                label: 'Coupons',
              }]
            },
            {
              key: 'customers',
              icon: <HiOutlineUserGroup />,
              label: 'Customers',
            },
            {
              key: 'orders',
              icon: <AiOutlineCompass />,
              label: 'Orders',
            },
            {
              key: 'enquiries',
              icon: <BiStore />,
              label: 'Enquiries',
            },
            {
              key: 'store',
              icon: <BiStore />,
              label: <Link to="https://shoppable-ecommerce.netlify.app/">Online Store</Link>,
            },
            {
              label: <button onClick={handleSignOut} className='w-full my-2 rounded bg-[#2f60b5] text-white font-bold' >Log Out</button>,
            },
          ]}
        />
      </Sider>
      <Layout>
        <Header style={{ padding: 0, background: colorBgContainer }}>
          <div className='flex justify-between items-center'>
            <Button
              type="text"
              icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
              onClick={() => setCollapsed(!collapsed)}
              style={{
                fontSize: '16px',
                width: 64,
                height: 64,
              }}
            />
            <Search placeholder="Search" onSearch={onSearch} style={{ width: 200 }} />
            <div className='flex justify-between items-center mx-4'>
              <Badge count={0} showZero className='mr-5'>
                <MdNotificationsNone className='text-2xl' />
              </Badge>
              <Avatar size={40}>Arfat</Avatar>
            </div>
          </div>
        </Header>
        <Content
          style={{
            margin: '24px 16px',
            padding: 24,
            minHeight: 280,
            background: colorBgContainer,
          }}
        >
          <ToastContainer
            position="top-right"
            autoClose={250}
            hideProgressBar={false}
            newestOnTop={true}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            theme="light"
          />
          <Outlet></Outlet>
        </Content>
      </Layout>
    </Layout>
  );
};

export default MainLayout;