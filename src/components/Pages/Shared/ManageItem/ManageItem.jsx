import React from 'react';
import { useNavigate } from 'react-router-dom';
import './ManageItem.css';

const ManageItem = ({ item, handleDeleteDevice }) => {
    const { _id, name, picture, quantity, supplier, price, description } = item;
    const navigate = useNavigate();
    const handleStockUpdate = id => {
        navigate(`/inventory/${id}`);
    }
    return (
        <div className='manage-item mx-auto rounded-md p-3'>
            <div className='flex items-center justify-between'>
                <img className='w-40' src={picture} alt="" />
                <div className='mt-3'>
                    <h3 className='text-xl font-semibold mb-1'>{name}</h3>
                    <p className='text-base'>Price: ${price}</p>
                    <p className='text-base'>Quantity: {quantity}</p>
                    <p className='mb-1 text-base'>Supplier: {supplier}</p>
                    <p className='lg:w-60 md:w-48'><small>{description}</small></p>
                </div>
            </div>
            <div className='manage-btn text-center mt-5'>
                <button onClick={() => handleStockUpdate(_id)} className='btn-stock px-3 py-2 rounded-md text-white'>Update Stock</button>
                <button onClick={() => handleDeleteDevice(_id)} className='btn-delete ml-3 px-3 py-2 rounded-md'>Delete Device</button>
            </div>
        </div>
    );
};

export default ManageItem;