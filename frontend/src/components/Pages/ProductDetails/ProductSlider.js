import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

const ProductSlider = () => {
    return (
        <div  className="lg:w-1/3 w-full">
            <Carousel>
                <div>
                    <img src="https://www.fitbit.com/global/content/dam/fitbit/global/pdp/devices/google-pixel-watch/hero-static/charcoal/google-pixel-watch-charcoal-device-3qt-left.png" alt='product'/>
                </div>
                <div>
                    <img src="https://www.fitbit.com/global/content/dam/fitbit/global/pdp/devices/google-pixel-watch/hero-static/charcoal/google-pixel-watch-charcoal-device-3qt-left.png" alt='product' />
                </div>
                <div>
                    <img src="https://i0.wp.com/store.ave.com.bn/wp-content/uploads/2022/09/MQAF3ZPA-2.png?fit=836%2C842&ssl=1" alt='product' />
                </div>
                <div>
                    <img src="https://www.fitbit.com/global/content/dam/fitbit/global/pdp/devices/google-pixel-watch/hero-static/charcoal/google-pixel-watch-charcoal-device-3qt-left.png" alt='product' />
                </div>
                <div>
                    <img src="https://i0.wp.com/store.ave.com.bn/wp-content/uploads/2022/09/MQAF3ZPA-2.png?fit=836%2C842&ssl=1" alt='product' />
                </div>
            </Carousel>
        </div>
    );
};

export default ProductSlider;