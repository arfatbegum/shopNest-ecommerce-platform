import React from 'react';
import Blog from '../Blogs/BlogCard';

const BlogsSection = () => {
    return (
        <section class="text-gray-700 body-font">
            <div class="container px-10 py-7 mx-auto">
                <div className='flex justify-between border-b-2 border-primary'>
                    <h1 className='lg:text-xl md:text-lg sm:text-sm font-bold'>From Our Blogs</h1>
                    <button className='bg-primary px-4 py-2 lg:text-sm md:text-sm text-white uppercase font-semibold sm:text-xs'>View All Blogs</button>
                </div>
                <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-5 items-center mt-8">
                    <Blog />
                    <Blog />
                    <Blog />
                    <Blog />
                </div>
            </div>
        </section>
    );
};

export default BlogsSection;