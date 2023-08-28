import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { getAllProducts } from '../../../redux/features/products/productSlice';
import { useNavigate } from 'react-router-dom';

const FilterPrices = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [min, setMin] = useState('');
    const [max, setMax] = useState('');

    const handlePriceFilter = () => {
        const minPrice = parseFloat(min);
        const maxPrice = parseFloat(max);

        if (minPrice !== '' && maxPrice !== '') {
            dispatch(getAllProducts({ minPrice, maxPrice }));
        }
    };

    const updateUrlParams = () => {
        if (min !== '' && max !== '') {
            navigate({
                search: `?minPrice=${min}&maxPrice=${max}`
            });
        }
    };

    return (
        <div className="w-full my-3 bg-white text-gray-500 font-normal border border-gray-200 shadow-sm">
            <h5 className="bg-primary flex text-white p-3 font-semibold text-sm">Price</h5>
            <div className="p-4 flex justify-between">
                <div>
                    <label className="label">
                        <span className="label-text">From</span>
                    </label>
                    <input
                        type="text"
                        placeholder="From"
                        value={min}
                        onChange={(e) => setMin(e.target.value)}
                        className="input input-bordered w-full px-2 rounded-none"
                    />
                </div>
                <div className="ml-2">
                    <label className="label">
                        <span className="label-text">To</span>
                    </label>
                    <input
                        type="text"
                        placeholder="To"
                        value={max}
                        onChange={(e) => setMax(e.target.value)}
                        className="input input-bordered w-full px-2 rounded-none"
                    />
                </div>
                <div className='ml-2 mt-9'>
                <button
                    className="bg-primary text-white py-3 px-2 rounded"
                    onClick={() => {
                        handlePriceFilter();
                        updateUrlParams();
                    }}
                >
                    Filters
                </button>
               </div>
            </div>

        </div>
    );
};

export default FilterPrices;
