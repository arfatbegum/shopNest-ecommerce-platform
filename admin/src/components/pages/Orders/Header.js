import React from 'react';
import Search from 'antd/es/transfer/search';
import { Select } from 'antd';

const Header = () => {
  const onSearch = (value) => console.log(value);
  const handleChange = (value) => {
  };
  return (
    <>
      <div className='flex justify-between items-center mb-4'>
        <Search placeholder="Search Orders" onSearch={onSearch} width={700} height={40} />
        <Select
          defaultValue="Featured"
          className='ml-2'
          style={{
            width: 500,
          }}
          onChange={handleChange}
          options={[
            {
              options: [
                {
                  value: 'Pending',
                },
                {
                  value: 'Processing',
                },
                {
                  value: 'Delivered',
                },
                {
                  value: 'Cancelled',
                },
              ],
            }
          ]}
        />
      </div>
    </>
  );
};

export default Header;