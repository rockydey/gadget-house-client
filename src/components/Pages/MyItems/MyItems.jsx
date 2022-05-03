import React, { useEffect, useState } from 'react';
import './MyItems.css';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import axios from 'axios';
import ManageItem from '../Shared/ManageItem/ManageItem';
import { useNavigate } from 'react-router-dom';
import { signOut } from 'firebase/auth';

const MyItems = () => {
    const [user] = useAuthState(auth);
    const [myItems, setMyItems] = useState([]);

    const navigate = useNavigate();

    const handleAddItem = () => {
        navigate('/additem');
    }

    useEffect(() => {
        const getItems = async () => {
            const email = user.email;
            const url = `https://hidden-wave-36381.herokuapp.com/myitems?email=${email}`;
            try {
                const { data } = await axios.get(url, {
                    headers: {
                        authorization: `Bearer ${localStorage.getItem('accessToken')}`
                    }
                });
                setMyItems(data);
            } catch (error) {
                if (error.response.status === 401 || error.response.status === 401) {
                    signOut(auth);
                    navigate('/login');
                }
            }
        };
        getItems();
    }, [user, navigate]);

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
                        const remain = myItems.filter(item => item._id !== id);
                        setMyItems(remain);
                    }
                });
        }
    };

    return (
        <div className='my-14 my-item'>
            {
                myItems.length !== 0 ? <h1 className='text-center text-4xl font-semibold my-8'>All Items</h1> : ''
            }
            {
                myItems.length !== 0 ? <div className='items grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-y-10'>
                    {
                        myItems.map(item => <ManageItem
                            key={item._id}
                            item={item}
                            handleDeleteDevice={handleDeleteDevice}
                        ></ManageItem>)
                    }
                </div> : <div className='sorry flex flex-col items-center'>
                    <h1 className='text-center text-2xl font-semibold my-8'>Sorry, you didn't add any items!</h1>
                    <button onClick={handleAddItem} className='btn-add-item ml-3 px-3 py-2 rounded-md text-lg font-semibold text-white'>Add Item Now</button>
                </div>
            }
        </div>
    );
};

export default MyItems;