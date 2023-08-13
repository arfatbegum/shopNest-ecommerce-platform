import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { getBlogCategories } from '../../../redux/features/blog/blogSlice';

const BlogsCategories = () => {
    const dispatch = useDispatch();
    const blogs = useSelector((state) => state?.blog?.categories);

    useEffect(() => {
        dispatch(getBlogCategories());
    }, [dispatch]);

    return (
        <div className="w-full bg-white text-gray-500 font-normal border border-gray-200 shadow-sm">
            <h3 className="bg-primary flex text-white p-3 font-semibold text-sm items-center"><svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 pr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>Filter By Categories</h3>
            <ul>
                {blogs?.map((blog) => (
                    <li key={blog._id} className='w-full border-b border-gray-200 py-2'><Link to="hotDeals" className="p-4">{blog?.title}</Link></li>
                ))}
            </ul>
        </div>
    );
};

export default BlogsCategories;