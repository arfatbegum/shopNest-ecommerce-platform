import { Link, useLocation } from 'react-router-dom';
import { getAllBlogs } from '../../../redux/features/blog/blogSlice';
import { useDispatch } from 'react-redux';

const BlogsCategories = ({ blogsCategories }) => {
    const location = useLocation();
    const dispatch = useDispatch();

    const handleCategoryClick = (category) => {
        if (category === 'All Categories') {
            dispatch(getAllBlogs());
        } else {
            dispatch(getAllBlogs({ category }));
        }
    };

    return (
        <div className="w-full bg-white text-gray-500 font-normal border border-gray-200 shadow-sm">
            <Link
                to={location.pathname}
                onClick={() => handleCategoryClick('All Categories')}
                className="bg-primary flex text-white p-3 font-semibold text-sm items-center"><svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 pr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>Filter By Categories</Link>
            <ul>
                {blogsCategories && blogsCategories.length > 0 && blogsCategories?.map((category) => (
                    <li key={category._id} className='w-full border-b border-gray-200 py-2'>
                        <Link
                            to={`${location.pathname}?category=${encodeURIComponent(category.title)}`}
                            className="p-4"
                            onClick={() => handleCategoryClick(category.title)}
                        >
                            {category.title}
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default BlogsCategories;