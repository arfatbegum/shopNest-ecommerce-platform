import React from 'react';

const FilterSizes = () => {
    return (
        <div className="w-full my-3 bg-white text-gray-500 font-normal border border-gray-200 shadow-sm">
            <h5 className="bg-primary flex text-white p-3 font-semibold text-sm">Sizes</h5>
            <div className='p-4'>
                <div className="flex items-center justify-start pb-4">
                    <input className="w-4 h-4 mr-2 cursor-pointer" type="checkbox" id="Large" name="large" value="Large" />
                    <label className=" mr-2 text-sm leading-3 font-normal text-gray-600 cursor-pointer" htmlFor="Large">
                        Small
                    </label>
                </div>
                <div className="flex items-center justify-start pb-4">
                    <input className="w-4 h-4 mr-2 cursor-pointer" type="checkbox" id="Large" name="large" value="Large" />
                    <label className=" mr-2 text-sm leading-3 font-normal text-gray-600 cursor-pointer" htmlFor="Large">
                        Medium
                    </label>
                </div>
                <div className="flex items-center justify-start pb-4">
                    <input className="w-4 h-4 mr-2 cursor-pointer" type="checkbox" id="Large" name="large" value="Large" />
                    <label className=" mr-2 text-sm leading-3 font-normal text-gray-600 cursor-pointer" htmlFor="Large">
                        Large
                    </label>
                </div>
                <div className="flex items-center justify-start pb-4">
                    <input className="w-4 h-4 mr-2 cursor-pointer" type="checkbox" id="Large" name="large" value="Large" />
                    <label className=" mr-2 text-sm leading-3 font-normal text-gray-600 cursor-pointer" htmlFor="Large">
                        XL
                    </label>
                </div>
                <div className="flex items-center justify-start">
                    <input className="w-4 h-4 mr-2 cursor-pointer" type="checkbox" id="Large" name="large" value="Large" />
                    <label className=" mr-2 text-sm leading-3 font-normal text-gray-600 cursor-pointer" htmlFor="Large">
                        XXL
                    </label>
                </div>
            </div>
        </div>
    );
};

export default FilterSizes;