import React, { useEffect, useState } from 'react';
import BreadCrumb from '../../Shared/BreadCrumb';
import Meta from '../../Shared/Meta';
import FilterAvailablity from './FilterAvailablity';
import FilterCategories from './FilterCategories';
import FilterColor from './FilterColor';
import FilterPrices from './FilterPrices';
import FilterTags from './FilterTags';
import RandomProduct from './RandomProduct';
import FilterProducts from './FilterProducts';
import Actionbar from './Actionbar';
import { useDispatch, useSelector } from 'react-redux';
import { getAllProducts } from '../../../redux/features/products/productSlice';
import FilterBrand from './FilterBrand';

const AllCategories = () => {
    const [grid, setGrid] = useState(4);
    const [currentPage, setCurrentPage] = useState(1);
    const dispatch = useDispatch();
    const productState = useSelector((state) => state?.product?.products);

    useEffect(() => {
        dispatch(getAllProducts({ page: currentPage }));
    }, [dispatch, currentPage]);

    // Function to handle pagination
    const handlePageChange = (newPage) => {
        setCurrentPage(newPage);
    };

    return (
        <>
            <Meta title={"All Categories"} />
            <BreadCrumb title="All Categories" />
            <div className="flex lg:px-10 px-4 gap-5">
                <div className="lg:w-1/6 lg:block md:hidden hidden">
                    <FilterCategories />
                    <FilterPrices />
                    <FilterColor />                                      
                    <FilterBrand />
                    <FilterTags />
                    <FilterAvailablity />          
                    <RandomProduct />
                </div>
                <div className="lg:w-5/6 w-full">
                    <Actionbar setGrid={setGrid} />
                    <FilterProducts
                        products={productState}
                        grid={grid}
                        currentPage={currentPage} 
                        onPageChange={handlePageChange} 
                    />
                </div>
            </div>
        </>
    );
};

export default AllCategories;