import React from "react";
import Watch from '../../Assets/watch-banner.jpg';
import Perfume from '../../Assets/perfume.jpg';
function DiscountBanner() {
  return (
          <div className="hidden lg:block lg:max-w-[1480px] md:max-w-[696px] mx-auto md:px-6 px-4 py-8">
            <div className="border-2 border-gray-200 shadow-sm lg:flex md:flex block">
              <div className="flex">
                <div className="bg-primary max-w-[66px] w-full">
                  <p className="xl:text-2xl lg:text-base font-semibold leading-normal text-white -rotate-90 whitespace-nowrap 2xl:mt-[140px] xl:mt-[150px] lg:mt-[180px] md:mt-[90px] mt-28">
                    Upto 50% Off
                  </p>
                </div>
              </div>
              <div>
                <img
                  src={Perfume}
                  alt="shoes"
                  className="lg:block md:hidden hidden lg:w-[500px] lg:h-56"
                />
              </div>
              <div className="bg-primary lg:py-2 md:py-2 py-4 lg:px-5 md:px-4 px-3 flex flex-col items-center justify-center">
                <p className="lg:text-4xl md:text-2xl text-2xl font-semibold text-center text-white">
                  Modern Fashion
                </p>
                <p className="text-xs text-center text-white pt-4">
                  Shop enchanting designs with bold and classy colors at
                  discunted price
                </p>
              </div>
              <div>
                <img
                  src={Watch}
                  alt="sandles"
                  className="lg:block md:hidden block lg:w-[500px] lg:h-56"
                />
              </div>
            </div>
          </div>

  );
}

export default DiscountBanner;
