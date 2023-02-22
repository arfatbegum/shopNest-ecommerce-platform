import React from 'react';
import Menubar from './Menubar';
import Searchbar from './Searchbar';
import Topbar from './Topbar';

const Header = () => {
    return (
        <div className='bg-primary text-white'>
            <Topbar></Topbar>
            <Searchbar></Searchbar>
            <Menubar></Menubar>
        </div>
    );
};

export default Header;