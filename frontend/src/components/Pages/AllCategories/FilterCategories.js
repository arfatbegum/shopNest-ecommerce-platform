import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useLocation } from 'react-router-dom';
import { getAllProducts, getCategories } from '../../../redux/features/products/productSlice';

const FilterCategories = () => {
    const location = useLocation();
    const dispatch = useDispatch();
    const productCategories = useSelector((state) => state?.product?.productCategories);

    const handleCategoryClick = (category) => {
        dispatch(getAllProducts({ category }));
    };

    useEffect(() => {
        dispatch(getCategories());
    }, [dispatch]);

    return (
        <div className="w-full bg-white text-gray-500 font-normal border border-gray-200 shadow-sm">
            <h3 className="bg-primary flex text-white p-3 font-semibold text-sm"><svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 pr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>All Categories</h3>
            <ul>
                {
                    productCategories && productCategories?.length > 0 &&
                    productCategories?.map((category) => (
                        <li key={category._id} className='w-full border-b border-gray-200 py-2'>
                            <Link
                                to={`${location.pathname}?category=${encodeURIComponent(category.title)}`}
                                className="p-4"
                                onClick={() => handleCategoryClick(category.title)}
                            >
                                {category.title}
                            </Link>
                        </li>
                    ))
                }
            </ul>
        </div>
    );
};

export default FilterCategories;