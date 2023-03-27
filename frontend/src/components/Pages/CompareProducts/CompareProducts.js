import React from 'react';
import BreadCrumb from '../../Shared/BreadCrumb';
import Meta from '../../Shared/Meta';
import CompareProductCard from './CompareProductCard';
const CompareProducts = () => {
  return (
    <>
      <Meta title={"Compare Products"} />
      <BreadCrumb title="Compare Products" />
      <div className="lg:mx-10 mx-4 grid lg:grid-cols-6 md:grid-cols-3 grid-cols-1 gap-3 items-center mb-10">
        <CompareProductCard />
        <CompareProductCard />
        <CompareProductCard />
        <CompareProductCard />
        <CompareProductCard />
        <CompareProductCard />
      </div>
    </>
  );
};

export default CompareProducts;