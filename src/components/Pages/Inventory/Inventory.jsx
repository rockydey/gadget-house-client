import React, { useEffect, useRef, useState } from 'react';
import { useParams } from 'react-router-dom';
import './Inventory.css';

const Inventory = () => {
    const { id } = useParams();
    const [item, setItem] = useState({});
    const restockRef = useRef(0);

    useEffect(() => {
        const url = `https://hidden-wave-36381.herokuapp.com/item/${id}`
        fetch(url)
            .then(res => res.json())
            .then(data => {
                setItem(data);
            });
    }, [id]);

    const handleDelivered = id => {
        if (item.quantity > 0) {
            const { quantity, ...rest } = item;
            const newQuantity = parseInt(quantity) - 1;
            const newItem = { quantity: newQuantity, ...rest };
            setItem(newItem);

            const url = `https://hidden-wave-36381.herokuapp.com/item/${id}`
            fetch(url, {
                method: 'PUT',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(newItem)
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                });
        }
        else {

        }
    };
    const handleRestock = id => {
        const restockQuantity = restockRef.current.value;

        const { quantity, ...rest } = item;
        const newQuantity = parseInt(quantity) + parseInt(restockQuantity);
        const newItem = { quantity: newQuantity, ...rest };
        setItem(newItem);

        const url = `https://hidden-wave-36381.herokuapp.com/item/${id}`
        fetch(url, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newItem)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
            });

        restockRef.current.value = '';
    };
    return (
        <div className='inventory flex flex-col items-center my-10'>
            <h1 className='text-center text-3xl font-semibold mb-5'>{item.name}</h1>
            <div className='item rounded-md p-3 mb-10'>
                <img className='w-40' src={item.picture} alt="" />
                <div className='mt-3'>
                    <h3 className='text-xl font-semibold mb-1'>{item.name}</h3>
                    <p className='text-base'>Price: {item.price}</p>
                    <p className='text-base'>Quantity: {item.quantity === 0 ? <span className='text-red-600'>Stock Out</span> : item.quantity}</p>
                    <p className='mb-1 text-base'>Supplier: {item.supplier}</p>
                    <p className='w-80 mb-3'><small>{item.description}</small></p>
                </div>
                <button onClick={() => handleDelivered(id)} className='btn-stock px-3 py-2 rounded-md text-white text-lg'>Delivered</button>
            </div>
            <div className='restock'>
                <h1 className='text-center text-3xl font-semibold mb-5'>Restock Item</h1>
                <div className='restock-field flex flex-col items-center'>
                    <input autoComplete='off' ref={restockRef} className='pr-32 pl-10 py-3 border-2 rounded-md' type="text" name="number" placeholder='Restock Item' />
                    <input onClick={() => handleRestock(id)} className='w-40 py-3 btn rounded-full text-white mt-3 text-lg' type="submit" value="Restock Now" />
                </div>
            </div>
        </div>
    );
};

export default Inventory;