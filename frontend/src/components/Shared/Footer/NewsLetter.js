import React from 'react';

const NewsLetter = () => {
    return (
        <div className='pt-8'>
        <form action="">
            <div
                className="gird-cols-1 grid items-center justify-center gap-4 md:grid-cols-3">
                <div className="md:ml-auto md:mb-6">
                    <p className="">
                        <strong>Sign up for our newsletter</strong>
                    </p>
                </div>

                <div className="relative md:mb-6" data-te-input-wrapper-init>
                    <input
                        type="text"
                        className="peer block min-h-[auto] w-full rounded bg-white py-[0.32rem] px-3 leading-[1.6] text-neutral-200 outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                        id="exampleFormControlInput1"
                        placeholder="Email address" />
                    <label
                        htmlFor="exampleFormControlInput1"
                        className="pointer-events-none absolute top-0 left-3 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-gray-700 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-gray-700 peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none"
                    >Email address
                    </label>
                </div>

                <div className="mb-6 md:mr-auto">
                    <button
                        type="submit"
                        className="inline-block bg-secondary rounded px-6 pt-2 pb-[6px] text-xs font-medium uppercase leading-normal text-neutral-50 transition duration-150 ease-in-out hover:border-neutral-100 hover:bg-neutral-500 hover:bg-opacity-10 hover:text-neutral-100 focus:border-neutral-100 focus:text-neutral-100 focus:outline-none focus:ring-0 active:border-neutral-200 active:text-neutral-200 dark:hover:bg-neutral-100 dark:hover:bg-opacity-10"
                        data-te-ripple-init
                        data-te-ripple-color="light">
                        Subscribe
                    </button>
                </div>
            </div>
        </form>
    </div>
    );
};

export default NewsLetter;