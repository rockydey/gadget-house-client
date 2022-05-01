import React from 'react';
import { Link } from 'react-router-dom';
import useItems from '../../hooks/useItems';
import Item from '../Shared/Item/Item';
import './Home.css';

const Home = () => {
    const [items] = useItems();
    return (
        <div className='main-section'>
            <header className='banner-section flex flex-col justify-center items-center'>
                <h1 className='text-white lg:text-5xl md:text-3xl text-xl font-bold uppercase'>Sell Faster. Pick Faster. Ship Faster.</h1>
                <p className='md:text-lg text-sm text-slate-200 text-center md:font-light font-normal my-5'>It is versionless, with continuous access to new capabilities. It was born in the cloud, so when your business needs more, it automatically scales to match that need. It has been infused with intelligence to learn and adapt. It is engineered to be extended, to quickly and easily combine the power of your innovation with ours.</p>
                <a href='#items' className='px-4 py-2 rounded-full text-xl font-normal '>Show Items</a>
            </header>
            <section className='items-section my-14'>
                <h1 className='text-center text-4xl font-semibold my-8'>All Collections</h1>
                <div className='items grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-y-5'>
                    {
                        items.slice(0, 6).map(item => <Item
                            key={items._id}
                            item={item}
                        ></Item>)
                    }
                </div>
            </section>
        </div>
    );
};

export default Home;