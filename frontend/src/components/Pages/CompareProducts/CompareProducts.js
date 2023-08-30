import React, { useEffect } from 'react';
import BreadCrumb from '../../Shared/BreadCrumb';
import Meta from '../../Shared/Meta';
import CompareProductCard from './CompareProductCard';
import { useDispatch, useSelector } from 'react-redux';
import { getComparelist } from '../../../redux/features/user/userSlice';
import { addToComparelist } from '../../../redux/features/products/productSlice';
import { toast } from 'react-toastify';

const CompareProducts = () => {
  const dispatch = useDispatch();
  const comparelistState = useSelector((state) => state.auth.comparelist);

  useEffect(() => {
    dispatch(getComparelist());
  }, [dispatch]);

  const removeFromComparelist = (id) => {
    dispatch(addToComparelist(id));
    toast.success("Remove from Comparelist")
    setTimeout(() => {
      dispatch(getComparelist());
    }, 1000)
  }
  return (
    <>
      <Meta title={"Compare Products"} />
      <BreadCrumb title="Compare Products" />
        {comparelistState?.comparelist?.length > 0 ? (
          <div className="lg:mx-10 mx-4 grid lg:grid-cols-6 md:grid-cols-3 grid-cols-1 gap-3 items-center mb-10">
            {comparelistState?.comparelist?.map((product) => (
              <CompareProductCard key={product._id} product={product} removeFromComparelist={removeFromComparelist} />
            ))}
          </div>
        ) : (
          <p className='text-center lg:my-44' >Your Comparelist is empty.</p>
        )}
    </>
  );
};

export default CompareProducts;