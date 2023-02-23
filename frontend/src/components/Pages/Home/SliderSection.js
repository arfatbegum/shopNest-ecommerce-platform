import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { GoPrimitiveDot } from "@react-icons/all-files/go/GoPrimitiveDot";
import SliderSection1 from '../../Assets/slider-1.jpg';
import SliderSection2 from '../../Assets/slider-2.jpg';
import SliderSection3 from '../../Assets/slider-3.jpg';

const SliderSection = () => {
    return (
        <div>
            <div className="carousel relative">
                <div id="item1" className="carousel-item w-full">
                    <img src={SliderSection1} className="w-full" alt='SliderSection1' />
                </div>
                <div id="item2" className="carousel-item w-full">
                    <img src={SliderSection2} className="w-full" alt='SliderSection2'/>
                </div>
                <div id="item3" className="carousel-item w-full">
                    <img src={SliderSection3} className="w-full" alt='SliderSection3'/>
                </div>
            </div>
            <div className="flex justify-center w-full py-2 gap-2">
                <a href="#item1"  className="text-2xl text-primary hover:text-secondary"><GoPrimitiveDot /></a>
                <a href="#item2" className="text-2xl text-primary hover:text-secondary"><GoPrimitiveDot /></a>
                <a href="#item3" className="text-2xl text-primary hover:text-secondary"><GoPrimitiveDot /></a>
            </div>
        </div>
    );
};

export default SliderSection;