import { Link, useNavigate } from "react-router-dom";
import { MdAddShoppingCart } from "@react-icons/all-files/md/MdAddShoppingCart";
import { FiHeart } from "@react-icons/all-files/fi/FiHeart";
import { RiArrowDropDownLine } from "@react-icons/all-files/ri/RiArrowDropDownLine";
import { BiGitCompare } from "@react-icons/all-files/bi/BiGitCompare";
import { BiUserCircle } from "@react-icons/all-files/bi/BiUserCircle";
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getWishlists } from '../../../redux/features/user/userSlice';
import Select from 'react-select';
import { getAllProducts } from '../../../redux/features/products/productSlice';
import logo from '../../Assets/logo.png';

const Searchbar = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const wishlistState = useSelector((state) => state.auth.wishlist);
    const user = useSelector((state) => state?.auth?.user);
    const cart = useSelector((state) => state.auth.cart);
    const productState = useSelector((state) => state?.product?.products);

    const productOptions = productState && productState.length > 0 && productState?.map((product) => ({
        value: product._id,
        label: product.name,
    }));

    useEffect(() => {
        dispatch(getWishlists());
        dispatch(getAllProducts());
    }, [dispatch]);

    const handleProductSelect = (selectedOption) => {
        if (selectedOption) {
            const productId = selectedOption.value;
            navigate(`/product-details/${productId}`);
        }
    };

    const handleSignOut = () => {
        localStorage.clear();
        window.location.reload();
    };

    return (
        <div className="lg:navbar md:navbar p-4 lg:py-4 lg:px-10 md:py-4 md:px-10 navbar-none ">
            <div className='lg:navbar-start flex'>
                <div className="flex-1 py-4 lg:py-0">
                    <Link to="/" className="font-bold text-2xl">
                        <img className="w-72" src={logo} alt="" />
                    </Link>
                </div>
                <div className='lg:hidden flex'>
                    <ul className="menu menu-horizontal">
                        <li tabIndex={0}>
                            <span className='gap-0'>
                                <p>English</p><RiArrowDropDownLine className='text-lg' />
                            </span>
                            <ul className="bg-white text-gray-900 p-4 leading-5 rounded">
                                <li>English</li>
                                <li>Arabic</li>
                            </ul>
                        </li>
                        <li tabIndex={0}>
                            <span className='gap-0'>
                                <p>SAR</p><RiArrowDropDownLine className='text-lg' />
                            </span>
                            <ul className="bg-base-100">
                                <li>USD</li>
                                <li>SAR</li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>
            <div className='lg:navbar-center'>
                <div className="flex-1 flex-row form-control">
                    <div>
                        <button className="relative p-[9px] bg-secondary rounded-tl rounded-bl rounded-tr-none rounded-br-none">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
                        </button>
                    </div>
                    <div>
                        <Select
                            placeholder="Search for a product..."
                            options={productOptions}
                            onChange={handleProductSelect}
                            isClearable
                            className="w-[300px] lg:w-[650px] text-gray-700 rounded-none"
                            styles={{
                                control: (provided) => ({
                                    ...provided,
                                    borderRadius: '0 5px 5px 0',
                                    borderColor: '#E5E7EB',
                                }),
                            }}
                        />
                    </div>

                </div>
            </div>
            <div className="lg:navbar-end pt-5">
                <div className="flex lg:px-0 px-5 gap-5 items-center lg:justify-center justify-between">
                    <Link to="compare-product"><BiGitCompare className='text-3xl mx-auto' /><span className='text-xs'>Compare</span></Link>
                    <div className="indicator">
                        {user === null ? (
                            <Link to="wishlist"><FiHeart className='text-3xl mx-auto' /><span className='text-xs'>Wishlist </span></Link>
                        ) : (
                            <>
                                <span className="indicator-item badge badge-secondary">{wishlistState && wishlistState?.wishlist?.lengthh > 0 ? wishlistState?.wishlist?.length : 0}</span>
                                <Link to="wishlist"><FiHeart className='text-3xl mx-auto' /><span className='text-xs'>Wishlist </span></Link>
                            </>
                        )}
                    </div>
                    <div className="indicator">
                        {user === null ? (
                            <Link to="cart"><MdAddShoppingCart className='text-3xl mx-auto mt-1' /><span className='text-xs'>Cart</span></Link>
                        ) : (
                            <>
                                <span className="indicator-item badge badge-secondary">{cart && cart?.lengthh > 0 ? cart?.length : 0}</span>
                                <Link to="cart"><MdAddShoppingCart className='text-3xl mx-auto' /><span className='text-xs'>Cart</span></Link>
                            </>
                        )}
                    </div>
                    <div className="dropdown dropdown-end">
                        <label tabIndex={0}><BiUserCircle className='text-3xl mx-auto' /><span className='text-xs'>Account</span></label>
                        <ul tabIndex={0} className="dropdown-content z-[1] menu shadow bg-base-100 rounded-box w-52 text-gray-800 text-sm">
                            {user === null ? (
                                <>
                                    <h1 className='px-4 pt-4 text-sm font-bold mb-1'>My Account</h1>
                                    <Link className='px-4 py-2 border-b border-gray-200' to="signup">Sign up</Link>
                                    <Link className='px-4 pb-4 pt-2' to="signin">Sign in</Link>
                                </>
                            ) : (
                                <>
                                    <h1 className='px-4 pt-4 text-sm font-bold text-center'>My Account</h1>
                                    <div className="avatar mx-auto py-5">
                                        <div className="w-24 rounded-full">
                                            <img src="https://picsum.photos/200/300" alt='' />
                                        </div>
                                    </div>
                                    <p className="text-gray-600 my-2 text-center">{user?.firstname} {user?.lastname}</p>
                                    <p className="text-gray-600 text-center border-b border-b-gray-200 pb-4">{user?.email}</p>
                                    <Link className='px-4 py-2 border-b border-gray-200' to="my-orders">My Orders</Link>
                                    <button onClick={handleSignOut} className='px-4 pb-4 pt-2' >Sign out</button>
                                </>
                            )}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Searchbar;