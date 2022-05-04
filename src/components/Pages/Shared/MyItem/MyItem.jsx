import React from 'react';
import { useNavigate } from 'react-router-dom';
import './MyItem.css';
import { BsFillTrashFill } from "react-icons/bs";
import { CgAdd } from "react-icons/cg";

const MyItem = ({ item, handleDeleteDevice }) => {
    const { _id, name, picture, quantity, supplier, price } = item;
    const navigate = useNavigate();
    const handleStockUpdate = id => {
        navigate(`/inventory/${id}`);
    }
    return (
        <div className='flex items-center justify-center md:gap-5 gap-2 my-item-section rounded-md p-3'>
            <img className='md:w-32 w-24' src={picture} alt="" />
            <div className='mt-3'>
                <h3 className='text-xl font-semibold mb-1'>{name}</h3>
                <p className='text-base'>Price: ${price}</p>
                <p className='text-base'>Quantity: {quantity}</p>
                <p className='mb-1 text-base'>Supplier: {supplier}</p>
            </div>
            <div className='btn-section'>
                <button onClick={() => handleStockUpdate(_id)} className='btn-stock px-3 py-3 rounded-full text-white'><CgAdd className='text-white'></CgAdd></button>
                <button onClick={() => handleDeleteDevice(_id)} className='btn-delete md:ml-3 md:mt-0 mt-3 px-3 py-3 rounded-full'><BsFillTrashFill></BsFillTrashFill></button>
            </div>
        </div>
    );
};

export default MyItem;