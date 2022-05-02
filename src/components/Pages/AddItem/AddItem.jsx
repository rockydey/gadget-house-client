import React, { useRef } from 'react';
import './AddItem.css';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';

const AddItem = () => {
    const productNameRef = useRef('');
    const priceRef = useRef('');
    const quantityRef = useRef('');
    const supplierNameRef = useRef('');
    const imageRef = useRef('');
    const descriptionRef = useRef('');

    const navigate = useNavigate();

    const handleAddItem = event => {
        event.preventDefault();

        const name = productNameRef.current.value;
        const price = priceRef.current.value;
        const quantity = quantityRef.current.value;
        const supplier = supplierNameRef.current.value;
        const image = imageRef.current.value;
        const description = descriptionRef.current.value;

        const item = {
            picture: image,
            quantity: quantity,
            name: name,
            supplier: supplier,
            price: price,
            description: description
        };

        fetch('https://hidden-wave-36381.herokuapp.com/item', {
            method: "POST",
            headers: {
                'content-type': "application/json"
            },
            body: JSON.stringify(item)
        })
            .then(res => res.json())
            .then(data => {
                if (data.acknowledged === true) {
                    toast("Item Added Successfully!!");
                    navigate('/manageinventories')
                }
            });
    };

    return (
        <div className='add-item p-6 mx-auto my-14 rounded-xl'>
            <h1 className='text-center text-2xl font-semibold mb-3'>Add New Item</h1>
            <form onSubmit={handleAddItem} className="product-form flex flex-col">
                <label className='font-semibold mb-1' htmlFor="name">Product Name</label>
                <input autoComplete='off' ref={productNameRef} className='pr-10 py-2 pl-3 rounded-md mb-3' type="text" name="name" id="name" placeholder='Enter Your Product Name' required />
                <label className='font-semibold mb-1' htmlFor="price">Product Price</label>
                <input autoComplete='off' ref={priceRef} className='pr-10 py-2 pl-3 rounded-md mb-3' type="text" name="price" id="price" placeholder='Enter Your Product Price' required />
                <label className='font-semibold mb-1' htmlFor="quantity">Product Quantity</label>
                <input autoComplete='off' ref={quantityRef} className='pr-10 py-2 pl-3 rounded-md mb-3' type="text" name="quantity" id="quantity" placeholder='Enter Your Product Quantity' required />
                <label className='font-semibold mb-1' htmlFor="supplier">Product Supplier</label>
                <input autoComplete='off' ref={supplierNameRef} className='pr-10 py-2 pl-3 rounded-md mb-3' type="text" name="supplier" id="supplier" placeholder='Enter Your Product Supplier Name' required />
                <label className='font-semibold mb-1' htmlFor="image">Product Image</label>
                <input autoComplete='off' ref={imageRef} className='pr-10 py-2 pl-3 rounded-md mb-3' type="text" name="image" id="image" placeholder='Enter Your Product Image URL' required />
                <label className='font-semibold mb-1' htmlFor="description">Product Description</label>
                <textarea ref={descriptionRef} className='pr-10 py-2 pl-3 rounded-md' type="text" name="description" id="description" placeholder='Enter Your Product Description' required />
                <div className='mt-6'>
                    <input className='btn-add-item text-white text-lg font-semibold w-full py-2 rounded-full' type="submit" value="Add Item" />
                </div>
            </form>
        </div>
    );
};

export default AddItem;