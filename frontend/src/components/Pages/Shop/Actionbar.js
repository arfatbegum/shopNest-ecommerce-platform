import React, { useState } from 'react';
import Line from '../../Assets/icons/line.svg';
import { useDispatch } from 'react-redux';
import { getAllProducts } from '../../../redux/features/products/productSlice';
const Actionbar = ({ setGrid }) => {
    const dispatch = useDispatch();
    const [selectedSort, setSelectedSort] = useState('manual');

    const handleSortChange = (event) => {
        const newSortOption = event.target.value;
        setSelectedSort(newSortOption);
        dispatch(getAllProducts({ sort: newSortOption }));
    };

    return (
        <div className="mb-4">
            <div className="bg-primary text-white p-3 lg:flex md:flex justify-between items-center">
                <div className="flex items-center lg:mb-0 mb-3">
                    <p className="uppercase text-sm font-semibold mr-2">
                        Sort By:
                    </p>
                    <select
                        name=""
                        defaultValue={"manula"}
                        value={selectedSort}
                        onChange={handleSortChange}
                        className="text-black outline-none p-1"
                        id=""
                    >
                        <option value="manual">Featured</option>
                        <option value="alphabetical">Alphabetically, A-Z</option>
                        <option value="-alphabetical"> Alphabetically, Z-A</option>
                        <option value="priceLowtoHigh">Price, low to high</option>
                        <option value="priceHighToLow">Price, high to low</option>
                        <option value="oldToNew">Date, old to new</option>
                        <option value="NewToOld">Date, new to old</option>
                    </select>
                </div>
                <div className="flex items-center lg:gap-2">
                    <p className="uppercase text-sm font-semibold">View as:</p>
                    <div className="flex gap-2 items-center">

                        <h1 onClick={() => { setGrid(6) }}
                            className="bg-gray-200 font-black text-gray-700 px-2 pb-1">||
                        </h1>
                        <h1 onClick={() => { setGrid(3) }}
                            className="bg-gray-200 font-black text-gray-700 px-2 pb-1">|||
                        </h1>

                        <h1 onClick={() => { setGrid(4) }}
                            className="bg-gray-200 font-black text-gray-700 px-2 pb-1">||||
                        </h1>
                        <h1 onClick={() => { setGrid(12) }}
                            className="bg-gray-200 p-1 w-7 h-7"><img src={Line} alt="" />
                        </h1>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Actionbar;