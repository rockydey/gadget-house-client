import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { MenuAlt3Icon, XIcon } from '@heroicons/react/solid';
import './Header.css';

const Header = () => {
    const [isExpanded, setIsExpanded] = useState(false)
    return (
        <header className='header-container'>
            <nav className="navigation h-16 w-full flex items-center text-black py-2">
                <div className='logo'>
                    <Link className='text-xl font-semibold lg:ml-20 md:ml-6 ml-6' to='/'>Laptop <span>Spot</span></Link>
                </div>
                <button onClick={() => setIsExpanded(!isExpanded)} className="hamburger border-0 w-10 h-10 p-2 rounded-full">
                    {
                        isExpanded ? <XIcon className='h-5 w-5 text-black-500'></XIcon> : <MenuAlt3Icon className='h-5 w-5 text-black-500'></MenuAlt3Icon>
                    }
                </button>
                <div className={
                    isExpanded ? "navigation-menu expanded  ml-auto mr-20" : "navigation-menu ml-auto mr-20"
                }>
                    <Link className='mx-4 w-full' to='/home'>Home</Link>
                    <Link className='mx-4 w-full' to='/blogs'>Blogs</Link>
                    <Link className='mx-4 w-full' to='/inventory'>Inventory</Link>
                    <Link className='mx-4 w-full' to='/manage'>Manage Items</Link>
                    <Link className='mx-4 w-full' to='/additem'>Add Item</Link>
                    <Link className='mx-4 w-full' to='/myitems'>My Items</Link>
                    <Link className='ml-4 w-full' to='/login'>Log In</Link>
                </div>
            </nav>
        </header >
    );
};

export default Header;