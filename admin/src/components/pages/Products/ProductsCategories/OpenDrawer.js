import React, { useState } from 'react';
import AddCategory from './AddCategory';
import { Button, Drawer} from 'antd';
import Search from 'antd/es/transfer/search';

const OpenDrawer = () => {
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
          Add Category
        </Button>
        <Search placeholder="Search Category" onSearch={onSearch} width={700} height={40} />
      </div>
      <Drawer title="Add Category" width={700} placement="right" onClose={onClose} open={open}>
        <AddCategory />
      </Drawer>
    </>
  );
};

export default OpenDrawer;