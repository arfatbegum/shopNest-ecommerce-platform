import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

const ProductSlider = ({ product }) => {
    return (
        <div className="lg:w-1/3 w-full">
            <Carousel>
                {product?.images?.map((image, index) => (
                    <div key={index}>
                        <img src={image.url} alt='product' />
                    </div>
                ))}
            </Carousel>
        </div>
    );
};

export default ProductSlider;