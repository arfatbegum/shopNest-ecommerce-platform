import React, { useState } from 'react';
import AddProduct from './AddProduct';
import { Button, Drawer } from 'antd';
import Search from 'antd/es/transfer/search';
import { useDispatch } from 'react-redux';
import { getProducts } from '../../../../redux/features/product/productSlice';

const Header = () => {
  const [open, setOpen] = useState(false);
  const [selectedSort, setSelectedSort] = useState('manual');
  const dispatch = useDispatch();
  const handleSortChange = (event) => {
      const newSortOption = event.target.value;
      setSelectedSort(newSortOption);
      dispatch(getProducts({ sort: newSortOption }));
  };
  const showDrawer = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };
  const onSearch = (value) => console.log(value);

  return (
    <>
      <h3 className="font-bold text-xl text-black uppercase mb-5">All Products</h3>
      <div className='flex justify-between items-center mb-4'>
        <Search placeholder="Search Products" onSearch={onSearch} width={700} height={40} />
        <select
          name=""
          value={selectedSort}
          onChange={handleSortChange}
          className="text-black outline-none p-1 border border-gray-300 mx-2 py-1.5 rounded-md"
          id=""
        >
          <option value="manual">Featured</option>
          <option value="alphabetical">Alphabetically, A-Z</option>
          <option value="priceLowtoHigh">Price, low to high</option>
          <option value="priceHighToLow">Price, high to low</option>
          <option value="oldToNew">Date, old to new</option>
          <option value="newToOld">Date, new to old</option>
        </select>
        <Button
          type="text"
          onClick={showDrawer}
          className='bg-[#2f60b5] text-white rounded font-medium hover:bg-[#2f60b5]'
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
        <AddProduct onClose={onClose} />
      </Drawer>
    </>
  );
};

export default Header;