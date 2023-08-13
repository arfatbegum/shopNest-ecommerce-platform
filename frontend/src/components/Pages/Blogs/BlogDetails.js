import React, { useEffect } from 'react';
import BreadCrumb from '../../Shared/BreadCrumb';
import Meta from '../../Shared/Meta';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getBlogById } from '../../../redux/features/blog/blogSlice';

const BlogDetails = () => {
    const { id } = useParams();
    const dispatch = useDispatch();

    const blog = useSelector((state) => state?.blog?.blogs);

    useEffect(() => {
        dispatch(getBlogById(id));
    }, [dispatch, id]);

    return (
        <>
            <Meta title={"Blog - Shoppable"} />
            <BreadCrumb title="Blog" />
            <div className="lg:px-10 px-4 mb-10">
                <div className='lg:h-80'>
                    <img class="h-full w-full object-cover object-center" src={blog?.images && blog.images[0] ? blog.images[0].url : 'fallback-image-url'} alt="blog" />
                </div>
                <h2 class="text-sm font-bold text-gray-500 mb-2 mt-5">by <strong className='text-gray-800'>{blog?.author}</strong> - {blog?.createdAt}</h2>
                <h1 class="title-font lg:text-xl text-md font-bold text-gray-900 mb-3">{blog.title}</h1>
                <p class="leading-relaxed mb-3">
                    {blog?.description}
                </p>
            </div>
        </>
    );
};

export default BlogDetails;