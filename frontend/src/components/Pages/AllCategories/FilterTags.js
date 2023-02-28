import React from 'react';

const FilterTags = () => {
    return (
        <div className="w-full my-3 bg-white text-gray-500 font-normal border border-gray-200 shadow-sm">
            <h5 className="bg-primary flex text-white p-3 font-semibold text-sm">Product Tags</h5>
            <div className='p-4'>
                <div className="flex flex-wrap items-center gap-2">
                    <span className="badge bg-primary text-white rounded-3 p-3 border-none">
                        Headphone
                    </span>
                    <span className="badge bg-primary text-white rounded-3 p-3 border-none">
                        Laptop
                    </span>
                    <span className="badge bg-primary text-white rounded-3 p-3 border-none">
                        Mobile
                    </span>
                    <span className="badge bg-primary text-white rounded-3 p-3 border-none">
                        Watch
                    </span>
                </div>
            </div>
        </div>
    );
};

export default FilterTags;