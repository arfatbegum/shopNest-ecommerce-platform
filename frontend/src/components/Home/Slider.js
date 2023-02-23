import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { GoPrimitiveDot } from "@react-icons/all-files/go/GoPrimitiveDot";
import slider1 from '../Assets/slider-1.jpg';
import slider2 from '../Assets/slider-2.jpg';
import slider3 from '../Assets/slider-3.jpg';

const Slider = () => {
    return (
        <div>
            <div className="carousel relative">
                <div id="item1" className="carousel-item w-full">
                    <img src={slider1} className="w-full" alt='slider1' />
                </div>
                <div id="item2" className="carousel-item w-full">
                    <img src={slider2} className="w-full" alt='slider2'/>
                </div>
                <div id="item3" className="carousel-item w-full">
                    <img src={slider3} className="w-full" alt='slider3'/>
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

export default Slider;