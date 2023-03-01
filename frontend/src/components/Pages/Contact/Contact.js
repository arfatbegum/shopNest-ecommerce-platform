import React from 'react';
import BreadCrumb from '../../Shared/BreadCrumb';
import Meta from '../../Shared/Meta';
import ContactForm from './ContactForm';
import ContactInfo from './ContactInfo';

const Contact = () => {
    return (
        <>
            <Meta title={"Contact Us"} />
            <BreadCrumb title="Contact Us" />
            <div class="text-gray-600 body-font px-8">
                <div class="container px-0 lg:px-5 pb-8 mx-auto flex sm:flex-nowrap flex-wrap">
                    <ContactForm />
                    <ContactInfo />
                </div>
            </div>
        </>
    );
};

export default Contact;