import React, { useEffect, useState } from 'react';
import { getAllProducts, getBrands, getCategories, getColors } from '../../../redux/features/products/productSlice';
import BreadCrumb from '../../Shared/BreadCrumb';
import Meta from '../../Shared/Meta';
import Loader from '../../Shared/Loader';
import FilterCategories from './FilterCategories';
import FilterColor from './FilterColor';
import FilterPrices from './FilterPrices';
import FilterTags from './FilterTags';
import RandomProduct from './RandomProduct';
import FilterProducts from './FilterProducts';
import Actionbar from './Actionbar';
import { useDispatch, useSelector } from 'react-redux';
import FilterBrand from './FilterBrand';

const Shop = () => {
    const dispatch = useDispatch();
    const [currentPage, setCurrentPage] = useState(1);
    const productState = useSelector((state) => state?.product);
    const products = productState?.products;
    const isLoading = productState?.isLoading;
    const productCategories = productState?.productCategories;
    const productBrands = productState?.brands;
    const productColors = productState?.colors;

    useEffect(() => {
        dispatch(getAllProducts({ page: currentPage }));
        dispatch(getCategories());
        dispatch(getBrands());
        dispatch(getColors());
    }, [dispatch, currentPage]);

    // Function to handle pagination
    const handlePageChange = (newPage) => {
        setCurrentPage(newPage);
    };

    return (
        <div>
            <Meta title={"Shop - Shoppable"} />
            {isLoading ? (
                <Loader />
            ) : (
                <>
                    <BreadCrumb title="Shop" />
                    <div className="flex lg:px-10 px-4 gap-5">
                        <div className="lg:w-1/6 lg:block md:hidden hidden">
                            <FilterCategories productCategories={productCategories} />
                            <FilterPrices />
                            <FilterColor productColors={productColors} />
                            <FilterBrand productBrands={productBrands} />
                            <FilterTags />
                            <RandomProduct products={products} />
                        </div>
                        <div className="lg:w-5/6 w-full">
                            <Actionbar />
                            <FilterProducts
                                products={products}
                                currentPage={currentPage}
                                onPageChange={handlePageChange}
                            />
                        </div>
                    </div>
                </>
            )}
        </div>
    );
};

export default Shop;
