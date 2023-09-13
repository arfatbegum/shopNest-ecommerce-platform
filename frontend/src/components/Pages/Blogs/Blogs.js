import React, { useEffect } from 'react';
import BreadCrumb from '../../Shared/BreadCrumb';
import Meta from '../../Shared/Meta';
import BlogCard from './BlogCard';
import BlogsCategories from './BlogsCategories';
import { useDispatch, useSelector } from 'react-redux';
import { getAllBlogs, getBlogCategories } from '../../../redux/features/blog/blogSlice';
import Loader from '../../Shared/Loader';

const Blogs = () => {
    const dispatch = useDispatch();
    const blogs = useSelector((state) => state?.blog?.blogs);
    const blogsCategories = useSelector((state) => state?.blog?.categories);
    const isLoading = useSelector((state) => state?.blog?.isLoading);

    useEffect(() => {
        dispatch(getAllBlogs());
        dispatch(getBlogCategories());
    }, [dispatch]);

    return (
        <div>
            <Meta title={"Blogs - ShopNest"} />
            {isLoading ? (
                <Loader />
            ) : (
                <>
                    <BreadCrumb title="Blogs" />
                    <div className="flex lg:px-10 px-4 gap-5">
                        <div className="lg:w-1/6 lg:block md:hidden hidden">
                            <BlogsCategories blogsCategories={blogsCategories} />
                        </div>
                        <div className="lg:w-5/6 w-full">
                            <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4'>
                                {blogs && blogs.length > 0 && blogs?.map((blog) => (
                                    <BlogCard key={blog._id} blog={blog} />
                                ))}
                            </div>
                        </div>
                    </div>
                </>
            )}
        </div>
    );
};

export default Blogs;