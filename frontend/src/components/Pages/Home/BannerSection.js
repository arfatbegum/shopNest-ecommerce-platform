import React from 'react';
import banner1 from '../../Assets/banner-1.jpg';
import banner2 from '../../Assets/banner-3.jpg';
import banner3 from '../../Assets/banner-5.jpg';
import banner4 from '../../Assets/banner-6.jpg';

const BannerSection = () => {
    return (
        <section className="overflow-hidden text-neutral-700">
        <div className="container mx-auto lg:pl-4">
          <div className="-m-1 flex flex-wrap md:-m-2">
            <div className="flex w-1/2 flex-wrap">
              <div className="w-full p-1 md:p-2 lg:h-48">
                <img
                  alt="gallery"
                  className="block h-full w-full object-cover object-center"
                  src={banner2} />
              </div>
            </div>
            <div className="flex w-1/2 flex-wrap">
              <div className="w-full p-1 md:p-2 lg:h-48">
                <img
                  alt="gallery"
                  className="block h-full w-full object-cover object-center"
                  src={banner4} />
              </div>
            </div>
            <div className="flex w-1/2 flex-wrap">
              <div className="w-full p-1 md:p-2 lg:h-56">
                <img
                  alt="gallery"
                  className="block h-full w-full object-cover object-center"
                  src={banner3} />
              </div>
            </div>
            <div className="flex w-1/2 flex-wrap">
              <div className="w-full p-1 md:p-2 lg:h-56">
                <img
                  alt="gallery"
                  className="block h-full w-full object-cover object-center"
                  src={banner1} />
              </div>
            </div>
          </div>
        </div>
      </section>
    )
};

export default BannerSection;