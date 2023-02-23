import React from 'react';
import BannerSection from './BannerSection';
import Slider from './SliderSection';

const Hero = () => {
    return (
        <section>
            <div class="container px-4 lg:px-10 py-8 mx-auto flex flex-wrap items-center">
            <div class="lg:w-3/5 md:w-1/2">
                    <Slider/>
                    </div>
                <div class="lg:w-2/5 md:w-1/2 lg:mb-9">
                <BannerSection/>
                </div>
            </div>
        </section>
    );
};

export default Hero;