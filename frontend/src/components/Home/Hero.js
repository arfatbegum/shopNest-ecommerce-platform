import React from 'react';
import Slider from './Slider';

const Hero = () => {
    return (
        <section class="text-gray-600 body-font">
            <div class="container px-10 py-8 mx-auto flex flex-wrap items-center">
            <div class="lg:w-3/5 md:w-1/2 md:pr-16 lg:pr-0 pr-0">
                    <Slider></Slider>
                    </div>
                <div class="lg:w-2/6 md:w-1/2 bg-gray-100 rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0">
                
                </div>
            </div>
        </section>
    );
};

export default Hero;