import React from 'react';
import ProductCard from '../../Shared/ProductCard';

const FilterProducts = ({ products, currentPage, onPageChange }) => {
    // Number of products to display per page
    const productsPerPage = 10;

    // Calculate the index range for the current page
    const startIndex = (currentPage - 1) * productsPerPage;
    const endIndex = startIndex + productsPerPage;

    // Get products to display on the current page
    const productsToShow = products.slice(startIndex, endIndex);

    return (
        <div className="pb-5">
            <div className="grid lg:grid-cols-5 md:grid-cols-3 grid-cols-1 gap-2">
                {productsToShow.length > 0 ? (
                    productsToShow.map((product) => (
                        <ProductCard key={product._id} product={product} />
                    ))
                ) : (
                    <p>No products available on this page.</p>
                )}
            </div>
            <div className="mt-6 text-right">
                <button
                    className="px-4 py-1.5 border bg-primary text-white rounded"
                    disabled={currentPage === 1}
                    onClick={() => onPageChange(currentPage - 1)}
                >
                    Previous
                </button>
                <span className="px-4 py-2 border rounded m-2">{currentPage}</span>
                <button
                    className="px-4 py-1.5 border bg-primary text-white rounded"
                    disabled={products.length <= endIndex}
                    onClick={() => onPageChange(currentPage + 1)}
                >
                    Next
                </button>
            </div>
        </div>
    );
};

export default FilterProducts;
