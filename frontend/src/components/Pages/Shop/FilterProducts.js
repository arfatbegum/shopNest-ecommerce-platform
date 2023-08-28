import ProductCard from '../../Shared/ProductCard';

const FilterProducts = ({ products, currentPage, onPageChange }) => {
    const productsPerPage = 25;
    const startIndex = (currentPage - 1) * productsPerPage;
    const endIndex = startIndex + productsPerPage;
    const productsToShow = products && products?.length && products?.slice(startIndex, endIndex);
    const totalPages = Math.ceil(products.length / productsPerPage);

    return (
        <div className="pb-5">
            <div className="grid lg:grid-cols-5 md:grid-cols-3 grid-cols-1 gap-2">
                {productsToShow && productsToShow?.length > 0 ? (
                    productsToShow.map((product) => (
                        <ProductCard key={product._id} product={product} />
                    ))
                ) : (
                    <p>No products available on this page.</p>
                )}
            </div>
            <div className="mt-6 flex justify-center items-center gap-2">
                <button
                    className="px-4 py-1.5 border bg-primary text-white rounded"
                    disabled={currentPage === 1}
                    onClick={() => onPageChange(currentPage - 1)}
                >
                    Previous
                </button>
                <div className="flex space-x-2">
                    {[...Array(totalPages).keys()].map((pageNumber) => (
                        <span
                            key={pageNumber}
                            className={`px-4 py-1.5 border rounded ${currentPage === pageNumber + 1 ? 'bg-primary text-white' : 'border-gray-300'}`}
                            onClick={() => onPageChange(pageNumber + 1)}
                        >
                            {pageNumber + 1}
                        </span>
                    ))}
                </div>
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
