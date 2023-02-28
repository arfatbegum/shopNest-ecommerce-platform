import React from 'react';
import BreadCrumb from '../../Shared/BreadCrumb';
import Meta from '../../Shared/Meta';
import FilterAvailablity from './FilterAvailablity';
import FilterCategories from './FilterCategories';
import FilterColor from './FilterColor';
import FilterPrices from './FilterPrices';
import FilterSizes from './FilterSizes';
import FilterTags from './FilterTags';

const AllCategories = () => {
    return (
        <>
            <Meta title={"All Categories"} />
            <BreadCrumb title="All Categories" />
            <div className="flex lg:px-10 px-4 gap-5">
                <div className="lg:w-1/6 lg:block md:hidden hidden">
                    <FilterCategories />
                    <FilterAvailablity />
                    <FilterPrices />
                    <FilterColor />
                    <FilterSizes />
                    <FilterTags />
                 
                </div>
                <div className="lg:w-5/6 w-full">
                 
                </div>
            </div>
        </>
    );
};

export default AllCategories;