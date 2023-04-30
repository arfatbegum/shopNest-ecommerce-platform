import React, { useState } from 'react';
import { MenuFoldOutlined, MenuUnfoldOutlined } from '@ant-design/icons';
import { AiOutlineSetting, AiOutlineAppstore, AiOutlineCompass, AiOutlineEdit } from 'react-icons/ai';
import { BiStore, BiColor, BiCategory, BiLinkExternal } from 'react-icons/bi';
import { FiSlack, FiUsers } from 'react-icons/fi';
import { FaShoppingBasket } from 'react-icons/fa';
import { MdOutlineLocalGroceryStore, MdFormatSize, MdNotificationsNone } from 'react-icons/md';
import { RiCoupon4Line } from 'react-icons/ri';
import { HiOutlineUserGroup } from 'react-icons/hi';
import { Layout, Menu, Button, theme, Avatar, Space, Badge } from 'antd';
import { Link } from 'react-router-dom';

const { Header, Sider, Content } = Layout;

const Dashboard = () => {
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  return (
    <Layout>
      <Sider trigger={null} collapsible collapsed={collapsed}>
        <div className="logo text-white text-center font-bold py-4 text-xl flex items-center justify-center"><FaShoppingBasket className='icon text-3xl text-[#e6bd00]' /><span className="name ml-2">Shoppable</span></div>
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={['dashboard']}
          items={[
            {
              key: 'dashboard',
              icon: <AiOutlineAppstore />,
              label: 'Dashboard',
            },
            {
              key: 'catalog',
              icon: <FiSlack />,
              label: 'Catalog',
              children: [{
                key: 'products',
                icon: <MdOutlineLocalGroceryStore />,
                label: 'Products',
              },
              {
                key: 'productCategories',
                icon: <BiCategory />,
                label: 'Product Categories',
              },
              {
                key: 'blogs',
                icon: <AiOutlineEdit />,
                label: 'Blogs',
              },
              {
                key: 'blogCategories',
                icon: <BiCategory />,
                label: 'Blog Categories',
              },
              {
                key: 'color',
                icon: <BiColor />,
                label: 'Color',
              },
              {
                key: 'size',
                icon: <MdFormatSize />,
                label: 'Size',
              },
              {
                key: 'coupon',
                icon: <RiCoupon4Line />,
                label: 'Coupon',
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
              key: 'staff',
              icon: <FiUsers />,
              label: 'Our Staff',
            },
            {
              key: 'settings',
              icon: <AiOutlineSetting />,
              label: 'Settings',
            },
            {
              key: 'store',
              icon: <BiStore />,
              label: 'Online Store',
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
          Content
        </Content>
      </Layout>
    </Layout>
  );
};

export default Dashboard;