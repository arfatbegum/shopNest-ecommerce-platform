import React, { useState } from 'react';
import { Button, Drawer } from 'antd';
import Search from 'antd/es/transfer/search';
import AddBlog from './AddBlog';

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
    <><h1 className='font-semibold text-2xl text-black mb-4 uppercase'>All Blogs</h1>     
      <div className='flex justify-between items-center mb-4'>
        <Search placeholder="Search Blog" onSearch={onSearch} width={700} height={40} />
        <Button
          type="text"
          onClick={showDrawer}
          className='bg-[#2f60b5] text-white rounded font-medium ml-2 hover:bg-[#2f60b5] uppercase'
          style={{
            fontSize: '16px',
            width: 130,
            height: 40,
          }}
        >
          Add Blog
        </Button>
      </div>
      <Drawer title="Add Blog" width={700} placement="right" onClose={onClose} open={open}>
        <AddBlog onClose={onClose}/>
      </Drawer>
    </>
  );
};

export default Header;