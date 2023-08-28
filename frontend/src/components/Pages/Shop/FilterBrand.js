import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useLocation } from 'react-router-dom';
import { getAllProducts, getBrands } from '../../../redux/features/products/productSlice';

const FilterBrand = () => {
    const location = useLocation();
    const dispatch = useDispatch();
    const productBrands = useSelector((state) => state?.product?.brands);


    const handleFilterBrand = (brand) => {
        dispatch(getAllProducts({ brand }));
    };

    useEffect(() => {
        dispatch(getBrands());
    }, [dispatch]);

    return (
        <div className="w-full my-3 bg-white text-gray-500 font-normal border border-gray-200 shadow-sm">
            <h5 className="bg-primary flex text-white p-3 font-semibold text-sm">Brands</h5>
            <ul>
                {
                    productBrands && productBrands?.length > 0 &&
                    productBrands?.map((brand) => (
                        <li key={brand._id} className='w-full border-b border-gray-200 py-2'>
                            <Link
                                to={`${location.pathname}?category=${encodeURIComponent(brand.title)}`}
                                className="p-4"
                                onClick={() => handleFilterBrand(brand.title)}
                            >
                                {brand.title}
                            </Link>
                        </li>
                    ))
                }
            </ul>
        </div>
    );
};

export default FilterBrand;