import React from 'react';
import './NotFound.css';
import notFound from '../../../images/404.png';

const NotFound = () => {
    return (
        <div className='flex justify-center my-10'>
            <img src={notFound} className="w-5/12 rounded-xl" alt="" />
        </div>
    );
};

export default NotFound;