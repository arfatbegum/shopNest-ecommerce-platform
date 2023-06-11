import React, { useState } from 'react';
import AddProduct from './AddProduct';
import { Button, Drawer, Select } from 'antd';
import Search from 'antd/es/transfer/search';

const Header = () => {
  const [open, setOpen] = useState(false);
  const showDrawer = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };
  const onSearch = (value) => console.log(value);
  const handleChange = (value) => {
    console.log(`selected ${value}`);
  };
  return (
    <>
      <h3 className="font-bold text-xl text-black uppercase mb-5">All Products</h3>
      <div className='flex justify-between items-center mb-4'>
        <Search placeholder="Search Products" onSearch={onSearch} width={700} height={40} />
        <Select
          defaultValue="Featured"
          className='ml-2'
          style={{
            width: 200,
          }}
          onChange={handleChange}
          options={[
            {
              options: [
                {
                  value: 'High To Low',
                },
                {
                  value: 'Low To High',
                },
                {
                  value: 'In stock',
                },
                {
                  value: 'Stock out',
                },
                {
                  value: 'Published',
                },
                {
                  value: 'Unpublished',
                },
              ],
            }
          ]}
        />
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
          Add Product
        </Button>
      </div>
      <Drawer title="Add Product" width={700} placement="right" onClose={onClose} open={open}>
        <AddProduct onClose={onClose}/>
      </Drawer>
    </>
  );
};

export default Header;