import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { MenuAlt3Icon, XIcon } from '@heroicons/react/solid';
import './Header.css';
import CustomLink from '../CustomLink/CustomLink';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../../firebase.init';
import { signOut } from 'firebase/auth';

const Header = () => {
    const [user] = useAuthState(auth);
    const [isExpanded, setIsExpanded] = useState(false);

    const logout = () => {
        signOut(auth);
    };

    return (
        <header className='header-container'>
            <nav className="navigation h-20 w-full flex items-center text-black py-2">
                <div className='logo'>
                    <Link className='md:text-4xl text-3xl font-semibold lg:ml-20 md:ml-10 ml-6' to='/'>Gadget <span>House</span></Link>
                </div>
                <button onClick={() => setIsExpanded(!isExpanded)} className="hamburger w-10 h-10 p-2 rounded-full md:mr-6">
                    {
                        isExpanded ? <XIcon className='h-5 w-5 text-white'></XIcon> : <MenuAlt3Icon className='h-5 w-5 text-white'></MenuAlt3Icon>
                    }
                </button>
                <div className={
                    isExpanded ? "navigation-menu expanded  ml-auto mr-20" : "navigation-menu ml-auto mr-20 flex flex-row items-center"
                }>
                    <CustomLink className='mx-4 w-full text-lg' to='/home'>Home</CustomLink>
                    <CustomLink className='mx-4 w-full text-lg' to='/blogs'>Blogs</CustomLink>
                    {
                        user ? <CustomLink className='mx-4 w-full text-lg' to='/manageinventories'>Manage Inventory</CustomLink> : ''
                    }
                    {
                        user ? <CustomLink className='mx-4 w-full text-lg' to='/additem'>Add Inventory</CustomLink> : ''
                    }
                    {
                        user ? <CustomLink className='mx-4 w-full text-lg' to='/myitems'>My Inventories</CustomLink> : ''
                    }
                    {
                        user ? <CustomLink onClick={logout} className='login-btn ml-4 text-white text-lg rounded-full px-4 py-2 lg:mt-0 mt-1.5' to='/login'>Log Out</CustomLink> : <CustomLink className='login-btn ml-4 text-white text-lg rounded-full px-4 py-2 lg:mt-0 mt-1.5' to='/login'>Log In</CustomLink>
                    }
                </div>
            </nav>
        </header >
    );
};

export default Header;