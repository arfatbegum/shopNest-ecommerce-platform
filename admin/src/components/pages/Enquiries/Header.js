import React from 'react';
import Search from 'antd/es/transfer/search';

const Header = () => {

  const onSearch = (value) => console.log(value);
  return (
    <>
      <h3 className="font-bold text-xl text-black uppercase mb-5">All Enquiries</h3>
      <div className='flex justify-between items-center mb-4'>
        <Search placeholder="Search Enquiry" onSearch={onSearch} width={700} height={40} />
      </div>
    </>
  );
};

export default Header;