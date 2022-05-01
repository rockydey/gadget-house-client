import React from 'react';
import './LogIn.css';
import Google from '../../../images/google.png';
import { useNavigate } from 'react-router-dom';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';

const LogIn = () => {
    const [signInWithGoogle, user1, loading1, error1] = useSignInWithGoogle(auth);
    const navigate = useNavigate();
    const switchSignUp = () => {
        navigate('/signup');
    };
    return (
        <div className='login p-6 mx-auto my-14 rounded-xl'>
            <h1 className='text-center text-lg font-semibold mb-3'>To continue, log in to Gadget House.</h1>
            <div className="social-login">
                <button onClick={() => signInWithGoogle()} className='flex items-center justify-center w-full rounded-full uppercase py-2 mt-2 font-semibold'><img className='mr-2' width={18} src={Google} alt="" /><span>Continue With Google</span></button>
            </div>

            <div className='flex justify-center items-center my-6'>
                <div className='line w-6/12'></div>
                <p className='mx-2 mb-1'>Or</p>
                <div className='line w-6/12'></div>
            </div>

            <form className="login-form flex flex-col">
                <label className='font-semibold mb-1' htmlFor="email">Email Address</label>
                <input className='pr-10 py-2 pl-3 rounded-md mb-3' type="email" name="email" id="email" placeholder='Enter Your Email' required />
                <label className='font-semibold mb-1' htmlFor="password">Password</label>
                <input className='pr-10 py-2 pl-3 rounded-md' type="password" name="password" id="password" placeholder='Enter Your Password' required />
                <div className='flex justify-between items-center mt-6'>
                    <p className='text-base font-semibold'>Forget Your Password?</p>
                    <input className='btn-submit text-white text-lg font-semibold px-8 py-2 rounded-full' type="submit" value="Login" />
                </div>
            </form>

            <div className='line my-6'></div>

            <div className="create-account">
                <p className='text-center text-base font-bold'>Don't have an account?</p>
                <button onClick={switchSignUp} className='w-full rounded-full uppercase py-2 mt-3 font-semibold'>Create New Account</button>
            </div>
        </div>
    );
};

export default LogIn;