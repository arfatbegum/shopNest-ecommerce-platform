import React from 'react';
import { Link } from 'react-router-dom'

const BlogCard = ({ blog }) => {
    return (
        <div class="h-full border-2 border-gray-200 border-opacity-60 shadow-sm overflow-hidden">
            <img class="lg:h-48 md:h-36 w-full object-cover object-center" src={blog?.images && blog.images[0] ? blog.images[0].url : 'fallback-image-url'} alt="blog" />
            <div class="p-6">
                <h2 class="text-xs font-bold text-gray-500 mb-2">by <strong className='text-gray-800'>{blog?.author}</strong> - {blog?.createdAt}</h2>
                <h1 class="title-font text-md font-bold text-gray-900 mb-3">{blog?.title}</h1>
                <p class="leading-relaxed mb-3">{blog?.description.slice(0, 70)}... </p>
                <div class="flex items-center flex-wrap ">
                    <Link
                        to={`/blog/${blog?._id}`}
                        class="text-primary text-sm inline-flex items-center md:mb-2 lg:mb-0 hover:text-secondary">Read More
                        <svg class="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
                            <path d="M5 12h14"></path>
                            <path d="M12 5l7 7-7 7"></path>
                        </svg>
                    </Link>
                </div>
            </div>
        </div >
    );
};

export default BlogCard;