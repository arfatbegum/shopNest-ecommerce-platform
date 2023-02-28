import React from 'react';
import { Link } from 'react-router-dom';

const FilterCategories = () => {
    return (
        <div className="w-full bg-white text-gray-500 font-normal border border-gray-200 shadow-sm">
            <h3 className="bg-primary flex text-white p-3 font-semibold text-sm"><svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 pr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>All Categories</h3>
            <ul>
                <li className='w-full border-b border-gray-200 py-2'><Link to="hotDeals" className="p-4">Hot Deals</Link></li>
                <li className='w-full border-b border-gray-200 py-2'><Link to="electronics" className="p-4">Electronics</Link></li>
                <li className='w-full border-b border-gray-200 py-2'><Link to="watches" className="p-4">Watches</Link></li>
                <li className='w-full border-b border-gray-200 py-2'><Link to="fashion" className="p-4">Fashion</Link></li>
                <li className='w-full border-b border-gray-200 py-2'><Link to="health&beauty" className="p-4">Health & Beauty</Link></li>
                <li className='w-full border-b border-gray-200 py-2'><Link to="accessories" className="p-4">Accessories</Link></li>
                <li className='w-full border-b border-gray-200 py-2'><Link to="travel&vacation" className="p-4">Travel & Vacation</Link></li>
                <li className='w-full border-b border-gray-200 py-2'><Link to="jwelery" className="p-4">Jwelery</Link></li>
                <li className='w-full border-b border-gray-200 py-2'><Link to="perfumes" className="p-4">Perfumes</Link></li>
                <li className='w-full border-b border-gray-200 py-2'><Link to="sports" className="p-4">Sports</Link></li>
                <li className='py-2'><Link to="kitchen" className="p-4">Kitchen</Link></li>
            </ul>
        </div>
    );
};

export default FilterCategories;