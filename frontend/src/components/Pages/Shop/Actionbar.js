import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { getAllProducts } from '../../../redux/features/products/productSlice';

const Actionbar = () => {
    const dispatch = useDispatch();
    const [selectedSort, setSelectedSort] = useState('manual');

    const handleSortChange = (event) => {
        const newSortOption = event.target.value;
        setSelectedSort(newSortOption);
        dispatch(getAllProducts({ sort: newSortOption }));
    };

    return (
        <div className="mb-4">
            <div className="bg-primary text-white p-3 flex justify-between items-center">
                <div className="flex items-center lg:mb-0">
                    <p className="uppercase text-sm font-semibold mr-2">
                        Sort By:
                    </p>
                    <select
                        name=""
                        value={selectedSort}
                        onChange={handleSortChange}
                        className="text-black outline-none p-1"
                        id=""
                    >
                        <option value="manual">Featured</option>
                        <option value="alphabetical">Alphabetically, A-Z</option>
                        <option value="priceLowtoHigh">Price, low to high</option>
                        <option value="priceHighToLow">Price, high to low</option>
                        <option value="oldToNew">Date, old to new</option>
                        <option value="newToOld">Date, new to old</option> 
                    </select>
                </div>
            </div>
        </div>
    );
};

export default Actionbar;
