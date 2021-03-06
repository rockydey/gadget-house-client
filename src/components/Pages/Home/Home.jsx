import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Item from '../Shared/Item/Item';
import Spinner from '../Shared/Spinner/Spinner';
import './Home.css';
import infographic from '../../../images/warehouse infographic.png';
import apple from '../../../images/apple.png';
import lenovo from '../../../images/lenovo.png';
import hp from '../../../images/hp.jpg';
import asus from '../../../images/asus.png';
import samsung from '../../../images/samsung.png';
import mi from '../../../images/mi.png';
import oneplus from '../../../images/oneplus.png';
import oppo from '../../../images/oppo.png';
import LinearProgress from '@mui/material/LinearProgress';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import progress from '../../../images/progress.jpg';

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
    };

    const handleRegister = () => {
        navigate('/signup');
    }

    return (
        <div className='main-section'>
            <header className='banner-section flex flex-col justify-center items-center'>
                <h1 className='text-white lg:text-5xl md:text-3xl text-xl font-bold uppercase'>Sell Faster. Pick Faster. Ship Faster.</h1>
                <p className='md:text-lg text-sm text-slate-200 text-center md:font-light font-normal my-5'>It is version less, with continuous access to new capabilities. It was born in the cloud, so when your business needs more, it automatically scales to match that need. It has been infused with intelligence to learn and adapt. It is engineered to be extended, to quickly and easily combine the power of your innovation with ours.</p>
                <a href='#items' className='px-4 py-2 rounded-full text-xl font-normal'>Show Items</a>
            </header>
            <section className='items-section my-14'>
                <h1 className='text-center text-4xl font-semibold my-8 uppercase'>Collections</h1>
                {
                    loading ? <Spinner></Spinner> : <div className='items justify-items-center grid lg:grid-cols-2 grid-cols-1 gap-10 md:mx-20 mx-3'>
                        {
                            items.slice(0, 6).map(item => <Item
                                key={item._id}
                                item={item}
                            ></Item>)
                        }
                    </div>
                }
            </section>
            <section className='manage-inventories-section text-center'>
                <button onClick={handleManageInventories} className='ml-3 btn-manage px-3 py-2 rounded-md text-lg font-semibold'>Manage Inventories</button>
            </section>
            <section className='infographic-section my-14 md:mx-20 mx-5'>
                <div className='grid lg:grid-cols-2 grid-cols-1 gap-8'>
                    <div className='flex flex-col lg:order-1 order-2 justify-center items-start'>
                        <h1 className='text-3xl font-semibold'>Warehouse Infographic</h1>
                        <p className='mt-5 text-lg'>Get predictive vessel ETA with real-time updates, rates announcements, Spot offers. Track all supply chain data in one place. Shipping should be easy. That is why we make it easy to manage your shipments online. From finding a price and making bookings to submitting documents and tracking cargo. The simple way to ship your goods and cargo with an easy online booking system, a fixed price and guaranteed loading.</p>
                        <button onClick={handleRegister} className='btn-register text-white px-4 py-2 rounded-lg text-xl font-normal mt-5'>Register Now</button>
                    </div>
                    <div className='lg:order-2 order-1'>
                        <img width={600} className='rounded-xl' src={infographic} alt="" />
                    </div>
                </div>
            </section>
            <section className='brand-section mb-14 md:mx-20 mx-5'>
                <h1 className='text-center md:text-3xl text-2xl font-semibold my-8 uppercase'>Our Supportive Brands</h1>
                <div className='grid lg:grid-cols-8 md:grid-cols-4 grid-cols-2 gap-5 items-center justify-center img-div'>
                    <img width={150} src={oppo} alt="" />
                    <img width={150} src={apple} alt="" />
                    <img width={150} src={samsung} alt="" />
                    <img width={150} src={lenovo} alt="" />
                    <img width={150} src={mi} alt="" />
                    <img width={150} src={hp} alt="" />
                    <img width={150} src={oneplus} alt="" />
                    <img width={150} src={asus} alt="" />
                </div>
            </section>
            <section className='progress-section mb-14 md:mx-20 mx-5'>
                <h1 className='text-center md:text-3xl text-2xl font-semibold my-8 uppercase'>Our Company Progress</h1>
                <div className='grid lg:grid-cols-2 grid-cols-1 items-center gap-8'>
                    <div>
                        <img width={600} className='rounded-xl' src={progress} alt="" />
                    </div>
                    <div>
                        <h1 className='md:text-2xl text-xl font-semibold mb-5 uppercase'>Market Share: </h1>
                        <div className='mb-3'>
                            <p className='font-semibold'>2019 :</p>
                            <Box sx={{ display: 'flex', alignItems: 'center' }}>
                                <Box sx={{ width: '55%', mr: 1 }}>
                                    <LinearProgress sx={{ height: '20px', borderRadius: "10px" }} variant="determinate" color='error' />
                                </Box>
                                <Box sx={{ minWidth: 35 }}>
                                    <Typography variant="body2" color="text.secondary">55%</Typography>
                                </Box>
                            </Box>
                        </div>
                        <div className='mb-3'>
                            <p className='font-semibold'>2020 :</p>
                            <Box sx={{ display: 'flex', alignItems: 'center' }}>
                                <Box sx={{ width: '70%', mr: 1 }}>
                                    <LinearProgress sx={{ height: '20px', borderRadius: "10px" }} variant="determinate" color='secondary' />
                                </Box>
                                <Box sx={{ minWidth: 35 }}>
                                    <Typography variant="body2" color="text.secondary">70%</Typography>
                                </Box>
                            </Box>
                        </div>
                        <div className='mb-3'>
                            <p className='font-semibold'>2021 :</p>
                            <Box sx={{ display: 'flex', alignItems: 'center' }}>
                                <Box sx={{ width: '80%', mr: 1 }}>
                                    <LinearProgress sx={{ height: '20px', borderRadius: "10px" }} variant="determinate" />
                                </Box>
                                <Box sx={{ minWidth: 35 }}>
                                    <Typography variant="body2" color="text.secondary">80%</Typography>
                                </Box>
                            </Box>
                        </div>
                        <div>
                            <p className='font-semibold'>2022 :</p>
                            <Box sx={{ display: 'flex', alignItems: 'center' }}>
                                <Box sx={{ width: '90%', mr: 1 }}>
                                    <LinearProgress sx={{ height: '20px', borderRadius: "10px" }} variant="determinate" color='success' />
                                </Box>
                                <Box sx={{ minWidth: 35 }}>
                                    <Typography variant="body2" color="text.secondary">90%</Typography>
                                </Box>
                            </Box>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;