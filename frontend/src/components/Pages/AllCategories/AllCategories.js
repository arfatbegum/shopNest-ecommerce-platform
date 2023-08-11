import React, { useEffect, useState } from 'react';
import BreadCrumb from '../../Shared/BreadCrumb';
import Meta from '../../Shared/Meta';
import FilterAvailablity from './FilterAvailablity';
import FilterCategories from './FilterCategories';
import FilterColor from './FilterColor';
import FilterPrices from './FilterPrices';
import FilterSizes from './FilterSizes';
import FilterTags from './FilterTags';
import RandomProduct from './RandomProduct';
import FilterProducts from './FilterProducts';
import Actionbar from './Actionbar';
import { useDispatch, useSelector } from 'react-redux';
import { getAllProducts } from '../../../redux/features/products/productSlice';

const AllCategories = () => {
    const [grid, setGrid] = useState(4);
    const dispatch = useDispatch();
    const productState = useSelector((state) => state?.product?.products);

    useEffect(() => {
        dispatch(getAllProducts());
    }, [dispatch]);

    return (
        <>
            <Meta title={"All Categories"} />
            <BreadCrumb title="All Categories" />
            <div className="flex lg:px-10 px-4 gap-5">
                <div className="lg:w-1/6 lg:block md:hidden hidden">
                    <FilterCategories />
                    <FilterAvailablity />
                    <FilterPrices />
                    <FilterColor />
                    <FilterSizes />
                    <FilterTags />
                    <RandomProduct />
                </div>
                <div className="lg:w-5/6 w-full">
                    <Actionbar setGrid={setGrid} />
                    <FilterProducts products={productState} grid={grid} />
                </div>
            </div>
        </>
    );
};

export default AllCategories;