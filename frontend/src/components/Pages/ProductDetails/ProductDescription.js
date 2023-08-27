import React from 'react';

const ProductDescription = ({ product }) => {
    return (
        <div className='lg:p-4' dangerouslySetInnerHTML={{ __html: product?.description }} />
    );
};

export default ProductDescription;
