import React from 'react';
import { Link } from 'react-router-dom'

const BlogCard = ({ blog }) => {
    return (
        <div className="bg-white h-full border-2 border-gray-200 border-opacity-60 shadow-sm overflow-hidden">
            <img className="lg:h-48 md:h-36 w-full object-cover object-center" src={blog?.images && blog.images[0] ? blog.images[0].url : 'fallback-image-url'} alt="blog" />
            <div className="p-6">
                <h2 className="text-xs font-bold text-gray-500 mb-2">by <strong className='text-gray-800'>{blog?.author}</strong> - {blog?.createdAt}</h2>
                <h1 className="title-font text-md font-bold text-gray-900 mb-3">{blog?.title}</h1>
                <p className="leading-relaxed mb-3">{blog?.description.slice(0, 70)}... </p>
                <div className="flex items-center flex-wrap ">
                    <Link
                        to={`/blog/${blog?._id}`}
                        className="text-primary text-sm inline-flex items-center md:mb-2 lg:mb-0 hover:text-secondary">Read More
                        <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
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