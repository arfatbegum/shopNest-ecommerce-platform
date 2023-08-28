import { getAllProducts } from '../../../redux/features/products/productSlice';
import { Link, useLocation } from 'react-router-dom';
import { useDispatch } from 'react-redux';

const FilterColor = ({ productColors }) => {
    const location = useLocation();
    const dispatch = useDispatch();

    const handleFilterColor = (color) => {
        if (color === 'All Colors') {
            dispatch(getAllProducts());
        } else {
            dispatch(getAllProducts({ color }));
        }
    };

    return (
        <div className="w-full my-3 bg-white text-gray-500 font-normal border border-gray-200 shadow-sm">
            <Link
                to={location.pathname}
                onClick={() => handleFilterColor('All Colors')}
                className="bg-primary flex text-white p-3 font-semibold text-sm">Colors</Link>
            <div className="p-4">
                {
                    productColors && productColors?.length > 0 &&
                    productColors?.map((color) => (
                        <Link
                            to={`${location.pathname}?color=${encodeURIComponent(color.title)}`}
                            key={color._id}
                            onClick={() => handleFilterColor(color.title)}
                            className=" flex space-x-2 items-center justify-start pb-4 cursor-pointer">
                            <div className={`w-4 h-4 rounded-full focus:outline-none ring-1 ring-offset-2 ring-gray-800 cursor-pointer`}
                                style={{ backgroundColor: color?.colorCode }}
                            ></div>
                            <p className=" text-base leading-4 text-gray-600 font-normal">{color.title}</p>
                        </Link>
                    ))
                }
            </div>
        </div>
    );
};

export default FilterColor;