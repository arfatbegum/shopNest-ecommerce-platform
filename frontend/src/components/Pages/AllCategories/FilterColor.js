import React from 'react';

const FilterColor = () => {
    return (
        <div className="w-full my-3 bg-white text-gray-500 font-normal border border-gray-200 shadow-sm">
            <h5 className="bg-primary flex text-white p-3 font-semibold text-sm">Colors</h5>
            <div className="p-4">
                <div className=" flex space-x-2 items-center justify-start pb-4 cursor-pointer">
                    <div className=" w-4 h-4 rounded-full bg-white shadow"></div>
                    <p className=" text-base leading-4 text-gray-600 font-normal">White</p>
                </div>
                <div className=" flex space-x-2 justify-start items-center pb-4 cursor-pointer">
                    <div className=" w-4 h-4 rounded-full bg-blue-600 shadow"></div>
                    <p className=" text-base leading-4 text-gray-600 font-normal">Blue</p>
                </div>
                <div className="flex space-x-2 justify-start items-center pb-4 cursor-pointer">
                    <div className=" w-4 h-4 rounded-full bg-red-600 shadow"></div>
                    <p className=" text-base leading-4 text-gray-600 font-normal">Red</p>
                </div>
                <div className="flex space-x-2 justify-start items-center pb-4 cursor-pointer">
                    <div className=" w-4 h-4 rounded-full bg-indigo-600 shadow"></div>
                    <p className=" text-base leading-4 text-gray-600 font-normal">Indigo</p>
                </div>
                <div className="flex space-x-2 justify-start items-center pb-4 cursor-pointer">
                    <div className=" w-4 h-4 rounded-full bg-black shadow"></div>
                    <p className=" text-base leading-4 text-gray-600 font-normal">Black</p>
                </div>
                <div className="flex space-x-2 justify-start items-center pb-4 cursor-pointer">
                    <div className=" w-4 h-4 rounded-full bg-purple-600 shadow"></div>
                    <p className=" text-base leading-4 text-gray-600 font-normal">Purple</p>
                </div>
                <div className="flex space-x-2 justify-start items-center cursor-pointer">
                    <div className=" w-4 h-4 rounded-full bg-gray-600 shadow"></div>
                    <p className=" text-base leading-4 text-gray-600 font-normal">Grey</p>
                </div>
            </div>
        </div>
    );
};

export default FilterColor;