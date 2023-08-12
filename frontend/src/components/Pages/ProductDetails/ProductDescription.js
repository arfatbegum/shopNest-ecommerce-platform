import React from 'react';

const ProductDescription = ({ product }) => {
    return (
        <div className='lg:p-4'>
            {product?.description}
        </div>
    );
};

export default ProductDescription;