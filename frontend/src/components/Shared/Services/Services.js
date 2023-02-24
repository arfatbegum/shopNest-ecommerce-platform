import React from 'react';
import Secure from '../../Assets/icons/lock-payment.svg';
import Help from '../../Assets/icons/help-center.svg';
import Trust from '../../Assets/icons/trust-pay.svg';
import DeliveryCar from '../../Assets/icons/delivery-car.svg';
import Value from '../../Assets/icons/value.svg';

const Services = () => {
    return (
        <section class="text-gray-500 body-font">
            <div class="2xl:container 2xl:mx-auto">
                <div class="text-center grid lg:grid-cols-5 md:grid-cols-2 grid-cols-1 lg:gap-5 md:gap-10 gap-12 lg:px-10 md:py-5 md:px-6 py-5 px-4">
                    <div class="">
                        <div class="bg-white shadow-md mx-auto border-1 border-gray-200 p-5">
                            <img src={Secure} alt="" className='w-16 h-16 mx-auto mb-3' />
                            <h2 class="title-font font-bold text-md text-gray-700">100% SECURE PAYMENTS</h2>
                            <p class="leading-relaxed text-sm">All major credit & debit cards accepted</p>
                        </div>
                    </div>
                    <div class="">
                        <div class="bg-white shadow-md border-1 border-gray-200 p-5">
                            <img src={Help} alt="" className='w-16 h-16 mx-auto mb-3' />
                            <h2 class="title-font font-bold text-md text-gray-700">HELP CENTER</h2>
                            <p class="leading-relaxed text-sm">Got a question? Browse our FAQs or submit your here.</p>
                        </div>
                    </div>
                    <div class="">
                        <div class="bg-white shadow-md border-1 border-gray-200 p-5">
                            <img src={Trust} alt="" className='w-16 h-16 mx-auto mb-3' />
                            <h2 class="title-font font-bold text-md text-gray-700">TRUSTPAY</h2>
                            <p class="leading-relaxed text-sm">100% Payment Protection.Easy Return Policy</p>
                        </div>
                    </div>
                    <div class="">
                        <div class="bg-white shadow-md border-1 border-gray-200 p-5">
                            <img src={DeliveryCar} alt="" className='w-16 h-16 mx-auto mb-3' />
                            <h2 class="title-font font-bold text-md text-gray-700">WORLDWIDE DELIVERY</h2>
                            <p class="leading-relaxed text-sm">With sites in 5 languages, we ship to over 200 countries & regions.</p>
                        </div>
                    </div>
                    <div class="">
                        <div class="bg-white shadow-md border-1 border-gray-200 p-5">
                            <img src={Value} alt="" className='w-16 h-16 mx-auto mb-3' />
                            <h2 class="title-font font-bold text-md text-gray-700">GREAT VALUE</h2>
                            <p class="leading-relaxed text-sm">We offer competitive prices on our 100 million plus product range.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Services;