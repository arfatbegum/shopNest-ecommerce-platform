import React from 'react';

const FilterAvailablity = () => {
    return (
        <div className="w-full my-3 bg-white text-gray-500 font-normal border border-gray-200 shadow-sm">
            <h3 className="bg-primary flex text-white p-3 font-semibold text-sm">Filter By Availablity</h3>
            <div className='p-4'>
                <div className="mb-3">
                    <input
                        className="form-check-input"
                        type="checkbox"
                        value=""
                        id=""
                    />
                    <label className="ml-2" htmlFor="">
                        In Stock (1)
                    </label>
                </div>
                <div className="mb-3">
                    <input
                        className="form-check-input"
                        type="checkbox"
                        value=""
                        id=""
                    />
                    <label className="ml-2" htmlFor="">
                        Out of Stock(0)
                    </label>
                </div>
            </div>
        </div>
    );
};

export default FilterAvailablity;