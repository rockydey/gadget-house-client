import React, { useEffect, useState } from 'react';
import ManageItem from '../Shared/ManageItem/ManageItem';
import Spinner from '../Shared/Spinner/Spinner';
import './ManageInventories.css';
import { useNavigate } from 'react-router-dom';

const ManageInventories = () => {
    const [items, setItems] = useState([]);
    const [loading, setLoading] = useState(false);
    const [pagesCount, setPagesCount] = useState(0);
    const [size] = useState(9);
    const [page, setPage] = useState(0);

    const navigate = useNavigate();

    useEffect(() => {
        const loadData = async () => {
            setLoading(true);
            const url = `https://hidden-wave-36381.herokuapp.com/items?page=${page}&size=${size}`
            await fetch(url)
                .then(res => res.json())
                .then(data => {
                    setItems(data);
                })
            setLoading(false);
        }
        loadData();
    }, [page, size]);

    useEffect(() => {
        fetch('https://hidden-wave-36381.herokuapp.com/itemsCount')
            .then(res => res.json())
            .then(pages => {
                const count = pages.count;
                setPagesCount(Math.ceil(count / 9));
            });
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
                    if (data.deletedCount > 0) {
                        const remain = items.filter(item => item._id !== id);
                        setItems(remain);
                    }
                });
        }
    };

    const handleAddItem = () => {
        navigate('/additem');
    };
    return (
        <div className='manage-inventories my-14'>
            <div>
                <h1 className='text-center text-4xl font-semibold my-8 uppercase'>All Collections</h1>
                {
                    loading ? <Spinner></Spinner> : <div className='items grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 justify-items-center lg:gap-5 md:gap-x-3 md:gap-y-5 gap-y-10 lg:mx-10'>
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
            <div className='pagination text-center mt-10'>
                {
                    [...Array(pagesCount).keys()].map(number => <button
                        className={page === number ? "selected" : ''}
                        onClick={() => setPage(number)}
                    >{number + 1}</button>)
                }
            </div>
            <div className='text-center mt-10'>
                <button onClick={handleAddItem} className='btn-add-item ml-3 px-3 py-2 rounded-md text-lg font-semibold'>Add New Item</button>
            </div>
        </div>
    );
};

export default ManageInventories;