import React from 'react';
import JwelleryBanner from '../../Assets/banner-2.jpg';
import JwelleryBanner1 from '../../Assets/banner-4.jpg';
const TwoBanners = () => {
    return (
        <section>
            <div class="container px-10 pb-10 mx-auto">
                <div className="grid lg:grid-cols-2 md:grid-cols-2 first-line:grid-cols-1 gap-5 items-center mt-8">
                    <img className='w-full border-2 border-gray-100 shadow-sm' src={JwelleryBanner} alt="" />
                    <img className='w-full border-2 border-gray-100 shadow-sm' src={JwelleryBanner1} alt=""/>
                </div>
            </div>
        </section>
    );
};

export default TwoBanners;