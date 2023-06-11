import React, { useState } from 'react';
import { Button, Drawer } from 'antd';
import Search from 'antd/es/transfer/search';
import AddCategory from './AddCategory';

const Header = () => {
  const [open, setOpen] = useState(false);
  const showDrawer = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };
  const onSearch = (value) => console.log(value);
  return (
    <>
      <h1 className='font-semibold text-2xl text-black mb-4 uppercase'>All Blogs Categories</h1>
      <div className='flex justify-between items-center mb-4'>
        <Search placeholder="Search Category" onSearch={onSearch} />
        <Button
          type="text"
          onClick={showDrawer}
          className='bg-[#2f60b5] text-white rounded font-medium ml-2 hover:bg-[#2f60b5]'
          style={{
            fontSize: '16px',
            width: 130,
            height: 40,
          }}
        >
          Add Category
        </Button>
      </div>
      <Drawer title="Add Category" width={700} placement="right" onClose={onClose} open={open}>
        <AddCategory onClose={onClose}/>
      </Drawer>
    </>
  );
};

export default Header;