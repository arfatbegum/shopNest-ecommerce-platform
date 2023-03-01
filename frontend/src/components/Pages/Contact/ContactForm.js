import React from 'react';
import { FiSend } from "@react-icons/all-files/fi/FiSend";

const ContactForm = () => {
    return (
        <div class="lg:w-2/3 md:w-1/2 lg:p-8 p-4 lg:mr-8 mb-4 lg:mb-0 bg-white flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0">
            <h2 class="text-gray-900 text-xl mb-3 font-bold">Contact</h2>
            <div className='flex justify-between gap-3'>
                <div class="w-1/2 relative mb-4">
                    <label for="name" class="leading-7 text-sm text-gray-600">Name</label>
                    <input type="text" id="name" name="name" class="w-full bg-white border border-gray-300 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                </div>
                <div class="w-1/2 relative mb-4">
                    <label for="email" class="leading-7 text-sm text-gray-600">Email</label>
                    <input type="email" id="email" name="email" class="w-full bg-white border border-gray-300 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                </div>
            </div>
            <div className='flex justify-between gap-3'>
                <div class="w-1/2 relative mb-4">
                    <label for="number" class="leading-7 text-sm text-gray-600">Mobile Number</label>
                    <input type="number" id="name" name="name" class="w-full bg-white border border-gray-300 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                </div>
                <div class="w-1/2 relative mb-4">
                    <label for="text" class="leading-7 text-sm text-gray-600">Order Number</label>
                    <input type="text" id="email" name="email" class="w-full bg-white border border-gray-300 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                </div>
            </div>
            <div class="relative mb-4">
                <label for="message" class="leading-7 text-sm text-gray-600">Message</label>
                <textarea id="message" name="message" class="w-full bg-white border border-gray-300 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"></textarea>
            </div>
            <button class="flex items-center justify-center text-white bg-primary border-0 py-2 px-6 focus:outline-none hover:bg-secondary text-lg"><FiSend className='text-xl text-white mr-2' />Send</button>
        </div>
    );
};

export default ContactForm;