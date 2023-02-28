import React from 'react';
import Line from '../../Assets/icons/line.svg';
const Actionbar = ({ setGrid }) => {
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
                        className="text-black outline-none p-1"
                        id=""
                    >
                        <option value="manual">Featured</option>
                        <option value="best-selling">Best selling</option>
                        <option value="title-ascending">Alphabetically, A-Z</option>
                        <option value="title-descending">
                            Alphabetically, Z-A
                        </option>
                        <option value="price-ascending">Price, low to high</option>
                        <option value="price-descending">Price, high to low</option>
                        <option value="created-ascending">Date, old to new</option>
                        <option value="created-descending">Date, new to old</option>
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