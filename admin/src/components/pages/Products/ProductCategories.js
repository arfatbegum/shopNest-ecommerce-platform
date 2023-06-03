import React from 'react';
import OpenDrawer from './ProductsCategories/OpenDrawer';
import CategoryList from './ProductsCategories/CategoryList';

const ProductCategories = () => {
    return (
        <div>
            <OpenDrawer />
            <CategoryList/>
        </div>
    );
};

export default ProductCategories;