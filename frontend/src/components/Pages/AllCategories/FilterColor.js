import React, { useEffect } from 'react';
import { getAllProducts, getColors } from '../../../redux/features/products/productSlice';
import { Link, useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

const FilterColor = () => {
    const location = useLocation();
    const dispatch = useDispatch();
    const productColors = useSelector((state) => state?.product?.colors);
    
    const handleFilterColor = (color) => {
        dispatch(getAllProducts({ color }));
    };

    useEffect(() => {
        dispatch(getColors());
    }, [dispatch]);

    return (
        <div className="w-full my-3 bg-white text-gray-500 font-normal border border-gray-200 shadow-sm">
            <h5 className="bg-primary flex text-white p-3 font-semibold text-sm">Colors</h5>
            <div className="p-4">
                {
                    productColors && productColors?.length > 0 &&
                    productColors?.map((color) => (
                        <Link
                            to={`${location.pathname}?color=${encodeURIComponent(color.title)}`}
                            key={color._id}
                            onClick={() => handleFilterColor(color.title)}
                            className=" flex space-x-2 items-center justify-start pb-4 cursor-pointer">
                            <div className={`w-4 h-4 rounded-full focus:outline-none ring-1 ring-offset-2 ring-gray-800 cursor-pointer bg-[${color.colorCode}]`}></div>
                            <p className=" text-base leading-4 text-gray-600 font-normal">{color.title}</p>
                        </Link>
                    ))
                }
            </div>
        </div>
    );
};

export default FilterColor;