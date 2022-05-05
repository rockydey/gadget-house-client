import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Item.css';
import { CgAdd } from "react-icons/cg";

const Item = ({ item }) => {
    const { _id, name, picture, quantity, supplier, price, description } = item;
    const navigate = useNavigate();
    const handleStockUpdate = id => {
        navigate(`/inventory/${id}`);
    }
    return (
        <div className='flex items-center justify-center md:gap-5 gap-1 item mx-auto rounded-md md:p-3 px-1 py-3' id='items'>
            <img className='md:w-40 w-28' src={picture} alt="" />
            <div className=''>
                <h3 className='text-xl font-semibold mb-1'>{name}</h3>
                <p className='text-base'>Price: ${price}</p>
                <p className='text-base'>Quantity: {quantity}</p>
                <p className='mb-1 text-base'>Supplier: {supplier}</p>
                <p className=''><small>{description}</small></p>
            </div>
            <button onClick={() => handleStockUpdate(_id)} className='btn-stock px-4 py-3 rounded-lg text-white'><CgAdd></CgAdd></button>
        </div>
    );
};

export default Item;