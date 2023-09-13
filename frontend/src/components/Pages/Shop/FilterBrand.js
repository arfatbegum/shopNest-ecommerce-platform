import { useDispatch } from 'react-redux';
import { Link, useLocation } from 'react-router-dom';
import { getAllProducts } from '../../../redux/features/products/productSlice';

const FilterBrand = ({ productBrands }) => {
    const location = useLocation();
    const dispatch = useDispatch();


    const handleFilterBrand = (brand) => {
        if (brand === 'All Brands') {
            dispatch(getAllProducts());
        } else {
            dispatch(getAllProducts({ brand }));
        }

    };

    return (
        <div className="w-full my-3 bg-white text-gray-500 font-normal border border-gray-200 shadow-sm">
            <Link
                to={location.pathname}
                onClick={() => handleFilterBrand('All Brands')}
                className="bg-primary flex text-white p-3 font-semibold text-sm">All Brands</Link>
            <ul>
                {
                    productBrands && productBrands?.length > 0 &&
                    productBrands?.map((brand) => (
                        <li key={brand._id} className='w-full border-b border-gray-200 py-2'>
                            <Link
                                to={`${location.pathname}?brand=${encodeURIComponent(brand.title)}`}
                                className="p-4"
                                onClick={() => handleFilterBrand(brand.title)}
                            >
                                {brand.title}
                            </Link>
                        </li>
                    ))
                }
            </ul>
        </div>
    );
};

export default FilterBrand;