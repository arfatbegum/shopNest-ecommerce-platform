import React, { useEffect } from 'react';
import BreadCrumb from '../../Shared/BreadCrumb';
import Meta from '../../Shared/Meta';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getBlogById } from '../../../redux/features/blog/blogSlice';
import Loader from '../../Shared/Loader';

const BlogDetails = () => {
    const { id } = useParams();
    const dispatch = useDispatch();

    const blog = useSelector((state) => state?.blog?.blogs);
    const isLoading = useSelector((state) => state?.blog?.isLoading);

    useEffect(() => {
        dispatch(getBlogById(id));
    }, [dispatch, id]);

    // Convert createdAt to a Date object
    const createdAtDate = new Date(blog?.createdAt);

    return (
        <div>
            <Meta title={`${blog.title} - ShopNest`} />
            {isLoading ? (
                <Loader />
            ) : (
                <>
                    <BreadCrumb title="Blog Details" />
                    <div className="lg:px-10 px-4 mb-10">
                        <div className='lg:h-80'>
                            <img className="h-full w-full object-cover object-center" src={blog?.images && blog.images[0] ? blog.images[0].url : 'fallback-image-url'} alt="blog" />
                        </div>
                        <h2 className="text-sm font-bold text-gray-500 mb-2 mt-4">
                            by <strong className="text-gray-800">{blog?.author}</strong> - {" "}
                            {createdAtDate.toLocaleDateString("en-US", {
                                year: "numeric",
                                month: "2-digit",
                                day: "2-digit",
                            })}
                        </h2>
                        <h1 className="title-font lg:text-xl text-md font-bold text-gray-900 mb-3">{blog.title}</h1>
                        <p className="leading-relaxed mb-3" dangerouslySetInnerHTML={{ __html: blog?.description }}></p>
                    </div>
                </>
            )}
        </div>
    );
};

export default BlogDetails;