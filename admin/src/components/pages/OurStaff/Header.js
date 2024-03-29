import React, { useState } from 'react';
import { Button, Drawer} from 'antd';
import Search from 'antd/es/transfer/search';
import AddStaff from './AddStaff';

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
      <div className='flex justify-between items-center mb-4'>
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
          Add Staff
        </Button>
        <Search placeholder="Search Staff" onSearch={onSearch} width={700} height={40} />
      </div>
      <Drawer title="Add Staff" width={700} placement="right" onClose={onClose} open={open}>
        <AddStaff />
      </Drawer>
    </>
  );
};

export default Header;