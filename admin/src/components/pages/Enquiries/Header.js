import React from 'react';
import Search from 'antd/es/transfer/search';

const Header = () => {
  
  const onSearch = (value) => console.log(value);
  return (
    <>
      <div className='flex justify-between items-center mb-4'>
        <Search placeholder="Search Customer" onSearch={onSearch} width={700} height={40} />
      </div>
    </>
  );
};

export default Header;