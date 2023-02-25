import React from 'react';
import BottomFooter from './FooterBottom';
import MainFooter from './FooterTop';
import NewsLetter from './NewsLetter';



const Footer = () => {
    return (
        <footer class="bg-gray-100">
            <NewsLetter />
            <MainFooter />
            <BottomFooter/>
        </footer>
    );
};

export default Footer;