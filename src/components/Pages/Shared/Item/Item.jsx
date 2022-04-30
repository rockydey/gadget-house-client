import React from 'react';
import './Item.css';

const Item = ({ item }) => {
    const { name, picture, quantity, supplier, price, description } = item;
    return (
        <div className='item mx-auto rounded-md p-3' id='items'>
            <img className='w-40' src={picture} alt="" />
            <div className='mt-3'>
                <h3 className='text-xl font-semibold mb-1'>{name}</h3>
                <p className='text-base'>Price: {price}</p>
                <p className='text-base'>Quantity: {quantity}</p>
                <p className='mb-1 text-base'>Supplier: {supplier}</p>
                <p className='w-80 mb-3'><small>{description}</small></p>
            </div>
            <button className='px-3 py-2 rounded-md text-white'>Update Stock</button>
        </div>
    );
};

export default Item;