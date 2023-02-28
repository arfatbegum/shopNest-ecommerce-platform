import React from 'react';

const FilterPrices = () => {
    return (
        <div className="w-full my-3 bg-white text-gray-500 font-normal border border-gray-200 shadow-sm">
            <h5 className="bg-primary flex text-white p-3 font-semibold text-sm">Price</h5>
            <div className="p-4 flex justify-between">
                <div>
                    <label className="label">
                        <span className="label-text">From</span>
                    </label>
                    <input type="text" placeholder="From" className="input input-bordered w-full px-2 rounded-none" />
                </div>
                <div className="ml-2">
                    <label className="label">
                        <span className="label-text">To</span>
                    </label>
                    <input type="text" placeholder="To" className="input input-bordered w-full px-2 rounded-none" />
                </div>
            </div>
        </div>
    );
};

export default FilterPrices;