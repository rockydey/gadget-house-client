import React, { useEffect, useState } from 'react';
import ManageItem from '../Shared/ManageItem/ManageItem';
import Spinner from '../Shared/Spinner/Spinner';
import './ManageInventories.css';

const ManageInventories = () => {
    const [items, setItems] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const loadData = async () => {
            setLoading(true);
            await fetch('https://hidden-wave-36381.herokuapp.com/items')
                .then(res => res.json())
                .then(data => {
                    setItems(data);
                })
            setLoading(false);
        }
        loadData();
    }, []);

    const handleDeleteDevice = id => {
        const confirm = window.confirm("Are you sure you want to delete?");
        if (confirm) {
            const url = `https://hidden-wave-36381.herokuapp.com/items/${id}`;
            fetch(url, {
                method: "DELETE"
            })
                .then(res => res.json())
                .then(data => {
                    const remain = items.filter(item => item._id !== id);
                    setItems(remain);
                });
        }
    }
    return (
        <div className=' my-14'>
            <h1 className='text-center text-4xl font-semibold my-8'>All Collections</h1>
            {
                loading ? <Spinner></Spinner> : <div className='items grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-y-10'>
                    {
                        items.map(item => <ManageItem
                            key={item._id}
                            item={item}
                            handleDeleteDevice={handleDeleteDevice}
                        ></ManageItem>)
                    }
                </div>
            }
        </div>
    );
};

export default ManageInventories;