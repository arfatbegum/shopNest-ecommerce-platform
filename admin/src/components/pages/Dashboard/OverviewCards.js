import React from 'react';
import { AiOutlineCompass } from 'react-icons/ai';
import { FaRegCreditCard } from 'react-icons/fa';
import { FiLayers } from 'react-icons/fi';
import { MdOutlineCalendarMonth, MdOutlinePendingActions, MdWifiProtectedSetup } from 'react-icons/md';
import { TbTruckDelivery } from 'react-icons/tb';

const OverviewCards = () => {
  return (
    <section className="text-gray-600 body-font">
      <div className="container mx-auto">
        <h1 className='font-bold text-2xl text-black p-2'>Dashboard Overview</h1>
        <div className="flex flex-wrap my-2 text-center">
          <div className="xl:w-1/4 md:w-1/2 p-2">
            <div className="bg-green-600 p-6 rounded-lg text-white">
              <AiOutlineCompass className='text-4xl mx-auto' />
              <h3 className="text-lg font-semibold mb-2 mt-1">Today Orders</h3>
              <h2 className="text-2xl font-bold title-font mb-2">$0.00</h2>
              <p className="leading-relaxed text-sm">Cash : $0.00 Card : $0.00 Credit : $0.00</p>
            </div>
          </div>
          <div className="xl:w-1/4 md:w-1/2 p-2">
            <div className="bg-orange-400 p-6 rounded-lg text-white">
              <FiLayers className='text-4xl mx-auto' />
              <h3 className="text-lg font-semibold mb-2 mt-1">Yesterday Orders</h3>
              <h2 className="text-2xl font-bold title-font mb-2">$0.00</h2>
              <p className="leading-relaxed text-sm">Cash : $0.00 Card : $0.00 Credit : $0.00</p>
            </div>
          </div>
          <div className="xl:w-1/4 md:w-1/2 p-2">
            <div className="bg-[#2f60b5] p-6 rounded-lg text-white">
              <MdOutlineCalendarMonth className='text-4xl mx-auto' />
              <h3 className="text-lg font-semibold mb-2 mt-1">This Month</h3>
              <h2 className="text-2xl font-bold title-font mb-2">$0.00</h2>
              <p className="leading-relaxed text-sm">Cash : $0.00 Card : $0.00 Credit : $0.00</p>
            </div>
          </div>
          <div className="xl:w-1/4 md:w-1/2 p-2">
            <div className="bg-amber-400 p-6 rounded-lg text-white">
              <FaRegCreditCard className='text-4xl mx-auto' />
              <h3 className="text-lg font-semibold mb-2 mt-1">All-Time Sales</h3>
              <h2 className="text-2xl font-bold title-font mb-2">$0.00</h2>
              <p className="leading-relaxed text-sm">Cash : $0.00 Card : $0.00 Credit : $0.00</p>
            </div>
          </div>
        </div>
        <div className="flex flex-wrap my-2">
          <div className="xl:w-1/4 md:w-1/2 p-2">
            <div className="bg-white p-4 rounded-lg text-black flex items-center border border-gray-200 shadow-sm">
              <AiOutlineCompass className='bg-[#2f60b5] text-5xl mr-2 p-2 rounded-full text-white' />
              <div>
                <h3 className="text-lg font-semibold">Total Orders</h3>
                <h2 className="text-2xl font-bold title-font">56</h2>
              </div>
            </div>
          </div>
          <div className="xl:w-1/4 md:w-1/2 p-2">
            <div className="bg-white p-4 rounded-lg text-black flex items-center border border-gray-200 shadow-sm">
              <MdOutlinePendingActions className='bg-amber-400 text-5xl mr-2 p-2 rounded-full text-white' />
              <div>
                <h3 className="text-lg font-semibold">Orders Pending</h3>
                <h2 className="text-2xl font-bold title-font">5</h2>
              </div>
            </div>
          </div>
          <div className="xl:w-1/4 md:w-1/2 p-2">
            <div className="bg-white p-4 rounded-lg text-black flex items-center border border-gray-200 shadow-sm">
              <MdWifiProtectedSetup className='bg-green-600 text-5xl mr-2 p-2 rounded-full text-white' />
              <div>
                <h3 className="text-lg font-semibold">Orders Processing</h3>
                <h2 className="text-2xl font-bold title-font">11</h2>
              </div>
            </div>
          </div>
          <div className="xl:w-1/4 md:w-1/2 p-2">
            <div className="bg-white p-4 rounded-lg text-black flex items-center border border-gray-200 shadow-sm">
              <TbTruckDelivery className='bg-orange-400 text-5xl mr-2 p-2 rounded-full text-white' />
              <div>
                <h3 className="text-lg font-semibold">Orders Delivered</h3>
                <h2 className="text-2xl font-bold title-font">25</h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OverviewCards;