import React, { useState } from 'react';
import { Button, Drawer } from 'antd';
import Search from 'antd/es/transfer/search';
import AddCoupon from './AddCoupon';

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
      <h3 className="font-bold text-xl text-black uppercase mb-5">All Coupons</h3>
      <div className='flex justify-between items-center mb-4'>
        <Search placeholder="Search Coupon" onSearch={onSearch} width={700} height={40} />
        <Button
          type="text"
          onClick={showDrawer}
          className='bg-[#2f60b5] text-white rounded font-medium mr-2 hover:bg-[#2f60b5]'
          style={{
            fontSize: '16px',
            width: 130,
            height: 40,
          }}
        >
          Add Coupon
        </Button>
      </div>
      <Drawer title="Add Coupon" width={700} placement="right" onClose={onClose} open={open}>
        <AddCoupon onClose={onClose} />
      </Drawer>
    </>
  );
};

export default Header;