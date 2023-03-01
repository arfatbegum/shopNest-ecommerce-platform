import React from 'react';
import BreadCrumb from '../../Shared/BreadCrumb';
import Meta from '../../Shared/Meta';
import Blog from './BlogCard';
import BlogsCategories from './BlogsCategories';

const Blogs = () => {
    return (
        <>
            <Meta title={"Blogs - Shoppable"} />
            <BreadCrumb title="Blogs" />
            <div className="flex lg:px-10 px-4 gap-5">
                <div className="lg:w-1/6 lg:block md:hidden hidden">
                    <BlogsCategories />
                </div>
                <div className="lg:w-5/6 w-full">
                    <div className='grid grid-cols-3 gap-4'>
                        <Blog />
                        <Blog />
                        <Blog />
                    </div>
                </div>
            </div>
        </>
    );
};

export default Blogs;