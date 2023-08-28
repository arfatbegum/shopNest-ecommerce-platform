import React from 'react';
import { useDispatch } from 'react-redux';
import { Link, useLocation } from 'react-router-dom';
import { getAllProducts } from '../../../redux/features/products/productSlice';

const FilterTags = () => {
    const location = useLocation();
    const dispatch = useDispatch();


    const handlefilterTags = (tags) => {
        dispatch(getAllProducts({ tags }));
    };

    return (
        <div className="w-full my-3 bg-white text-gray-500 font-normal border border-gray-200 shadow-sm">
            <h5 className="bg-primary flex text-white p-3 font-semibold text-sm">Product Tags</h5>
            <div className='p-4'>
                <div className="flex flex-wrap items-center gap-2">
                    <Link
                        to={`${location.pathname}?tags=${encodeURIComponent("featured")}`}
                        onClick={() => handlefilterTags("featured")}
                        className="badge bg-primary text-white rounded-3 p-3 border-none">
                        Featured
                    </Link>
                    <Link
                         to={`${location.pathname}?tags=${encodeURIComponent("popular")}`}
                         onClick={() => handlefilterTags("popular")}
                        className="badge bg-primary text-white rounded-3 p-3 border-none">
                        Popular
                    </Link>
                    <Link
                     to={`${location.pathname}?tags=${encodeURIComponent("special")}`}
                     onClick={() => handlefilterTags("special")}
                        className="badge bg-primary text-white rounded-3 p-3 border-none">
                        Special
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default FilterTags;