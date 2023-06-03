import React, { useState } from 'react';
import { Button, Drawer} from 'antd';
import Search from 'antd/es/transfer/search';
import AddColor from './AddColor';

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
          Add Color
        </Button>
        <Search placeholder="Search Color" onSearch={onSearch} width={700} height={40} />
      </div>
      <Drawer title="Add Color" width={700} placement="right" onClose={onClose} open={open}>
        <AddColor />
      </Drawer>
    </>
  );
};

export default Header;