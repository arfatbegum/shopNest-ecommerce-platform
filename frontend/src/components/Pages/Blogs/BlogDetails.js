import React from 'react';
import BreadCrumb from '../../Shared/BreadCrumb';
import Meta from '../../Shared/Meta';

const BlogDetails = () => {
    return (
        <>
            <Meta title={"Blog - Shoppable"} />
            <BreadCrumb title="Blog" />
            <div className="lg:px-10 px-4 mb-10">
                <img class="lg:h-56 md:h-36 w-full object-cover object-center" src="https://dummyimage.com/720x400" alt="blog" />
                <h2 class="text-sm font-bold text-gray-500 mb-2 mt-5">by <strong className='text-gray-800'>Arfat Begum</strong> - 27.02.2023</h2>
                <h1 class="title-font lg:text-xl text-md font-bold text-gray-900 mb-3">Redux - Javascript Library</h1>
                <p class="leading-relaxed mb-3">
                    Redux is a predictable state container for JS apps that helps us write applications that behave consistently, run in different environments (client, server, and native), and are easy to test. It works with any UI layer and has a large ecosystem of add-ons to fit your needs.
                    Firstly, we need to take a look at the man-building block to fully understand the Redux concept. It has three main parts: Actions, Reducers, and Store. Let’s explore what each one does:
                    Actions
                    In Redux, actions are used to send information from the application to the store. Moreover, sending information to the store is needed to change the application state after user interaction, internal events, or API calls.

                    Reducers
                    In Redux, reducers are the only way to change states and It is the only place where we can write logic and calculations and accept the previous state of the app and the action being dispatched, calculate the next state, and returns the new object.

                    Store
                    In Redux, a store is an immutable object tree which is a state container that holds the application's state. It can have only a single store in our application. Whenever a store is created in Redux, we need to specify the reducer.

                    Redux will help us to keep a consistent and clear structure in our project, it will ensure a clear data flow and makes sure that components stay in sync.
                </p>
            </div>
        </>
    );
};

export default BlogDetails;