import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Item from '../Shared/Item/Item';
import Spinner from '../Shared/Spinner/Spinner';
import './Home.css';

const Home = () => {
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

    const navigate = useNavigate();
    const handleManageInventories = () => {
        navigate('/manageinventories');
    }
    return (
        <div className='main-section'>
            <header className='banner-section flex flex-col justify-center items-center'>
                <h1 className='text-white lg:text-5xl md:text-3xl text-xl font-bold uppercase'>Sell Faster. Pick Faster. Ship Faster.</h1>
                <p className='md:text-lg text-sm text-slate-200 text-center md:font-light font-normal my-5'>It is version less, with continuous access to new capabilities. It was born in the cloud, so when your business needs more, it automatically scales to match that need. It has been infused with intelligence to learn and adapt. It is engineered to be extended, to quickly and easily combine the power of your innovation with ours.</p>
                <a href='#items' className='px-4 py-2 rounded-full text-xl font-normal '>Show Items</a>
            </header>
            <section className='items-section mt-14'>
                <h1 className='text-center text-4xl font-semibold my-8'>Collections</h1>
                {
                    loading ? <Spinner></Spinner> : <div className='items grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-y-10'>
                        {
                            items.slice(0, 6).map(item => <Item
                                key={item._id}
                                item={item}
                            ></Item>)
                        }
                    </div>
                }
            </section>
            <section className='manage-inventories-section mt-10 mb-14 text-center'>
                <button onClick={handleManageInventories} className='ml-3 btn-manage px-3 py-2 rounded-md text-lg font-semibold'>Manage Inventories</button>
            </section>
        </div>
    );
};

export default Home;