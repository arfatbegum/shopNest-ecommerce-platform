import FeaturedProductCard from './FeaturedProductCard';

const FeaturedProducts = ({ products }) => {

    return (
        <section className="text-gray-700 body-font">
            <div className="container px-10 py-7 mx-auto">
                <h1 className='text-xl font-bold border-b-2 border-primary pb-3'>Featured Products</h1>
                <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5 items-center mt-8">
                    {products &&
                        products.length > 0 &&
                        products
                            .filter((product) => product.tags[0] === "featured")
                            .slice(0, 6)
                            .map((product, index) => (
                                <FeaturedProductCard key={index} product={product} />
                            ))}
                </div>
            </div>
        </section>

    );
};

export default FeaturedProducts;