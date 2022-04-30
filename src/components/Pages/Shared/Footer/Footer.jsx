import React from 'react';
import './Footer.css';
import { FaGoogle, FaFacebook, FaTwitter, FaPinterest, FaGooglePlay, FaInstagram, FaPhone, FaMapMarked, FaComments } from "react-icons/fa";
import { Link } from 'react-router-dom';

const Footer = () => {
    const year = new Date();
    return (
        <footer className='h-80 w-full'>
            {/* Social Icon Footer */}
            <div className='social-footer h-16 w-full flex md:flex-row flex-col items-center justify-center'>
                <div className='lg:ml-20 md:ml-10 text-lg'>
                    <h3 className='text-white'>Get connected with us on social networks :</h3>
                </div>
                <div className='social-icon flex md:mt-0 mt-1 md:ml-auto lg:mr-20 md:mr-12'>
                    <FaGoogle className='text-white mx-4 text-xl'></FaGoogle>
                    <FaFacebook className='text-white mx-4 text-xl'></FaFacebook>
                    <FaTwitter className='text-white mx-4 text-xl'></FaTwitter>
                    <FaPinterest className='text-white mx-4 text-xl'></FaPinterest>
                    <FaInstagram className='text-white mx-4 text-xl'></FaInstagram>
                    <FaGooglePlay className='text-white ml-4 mr-1 text-xl'></FaGooglePlay>
                </div>
            </div>

            {/* Importent Links Footer */}
            <div className='links-footer md:h-48 h-52 flex md:flex-row flex-col md:items-center justify-center'>
                <div className='text'>
                    <div className='logo'>
                        <Link className='md:text-4xl text-3xl font-semibold lg:ml-20 md:ml-10 ml-6' to='/'>Gadget <span>House</span></Link>
                    </div>
                    <div className='lg:ml-20 md:ml-10 ml-6 md:mt-4 mt-2'>
                        <div className='flex items-center text-white md:text-base text-sm'><FaPhone></FaPhone> <p className='ml-2'>+8801987654321</p></div>
                        <div className='flex items-center text-white md:text-base text-sm md:mt-2'><FaMapMarked></FaMapMarked> <p className='ml-2'>KA-244, Kuril, Progoti Shoroni, Dhaka</p></div>
                        <div className='flex items-center text-white md:text-base text-sm md:mt-2'><FaComments></FaComments> <p className='ml-2'>gadgethouse@house.com</p></div>
                    </div>
                </div>
                <div className='subscribe md:ml-auto md:mt-0 ml-6 mt-1 md:ml-auto lg:mr-20 md:mr-12 md:mt-0 mt-4'>
                    <h2 className='md:text-3xl text-2xl uppercase md:mb-3 mb-1'>Let's Stay In Touch</h2>
                    <p className='md:text-lg text-base md:block hidden text-white md:mb-3 mb-1'>Get our top updates straight to your inbox!</p>
                    <div>
                        <input className='md:py-2 py-1 md:px-4 px-2 rounded-md' type="email" placeholder='ENTER YOUR EMAIL' />
                        <input type="submit" className='btn md:px-3 px-1.5 md:py-2 py-1 text-white font-semibold' value="SUBSCRIBE" />
                    </div>
                </div>
            </div>

            {/* Copyrights Footer */}
            <div className='copyrights-footer md:h-16 h-12 flex items-center justify-center'>
                <h3 className='text-white text-lg font-normal'>Copyright © {year.getFullYear()} <a href='/'>Gadget House</a></h3>
            </div>
        </footer>
    );
};

export default Footer;