import React, { useRef, useState } from 'react';
import './LogIn.css';
import Google from '../../../images/google.png';
import { useLocation, useNavigate } from 'react-router-dom';
import { useSendPasswordResetEmail, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { signInWithEmailAndPassword } from "firebase/auth";
import auth from '../../../firebase.init';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';

const LogIn = () => {
    const emailRef = useRef('');
    const passwordRef = useRef('');
    const [user2, setUser2] = useState('');
    const [error2, setError2] = useState('');

    const [signInWithGoogle, user1] = useSignInWithGoogle(auth);
    const [sendPasswordResetEmail] = useSendPasswordResetEmail(auth);

    const handleSubmit = async event => {
        event.preventDefault();
        const email = emailRef.current.value;
        const password = passwordRef.current.value;

        await signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const user = userCredential.user;
                setUser2(user);
            })
            .catch((error) => {
                const errorMessage = error.message;
                setError2(errorMessage);
            });
        const { data } = await axios.post('https://hidden-wave-36381.herokuapp.com/login', { email });
        localStorage.setItem("accessToken", data.accessToken);
        navigate(from, { replace: true });
    };

    const resetPassword = async () => {
        const email = emailRef.current.value;
        await sendPasswordResetEmail(email);
        toast("Reset Password Email Sent!");
    };

    const navigate = useNavigate();
    let location = useLocation();
    let from = location.state?.from?.pathname || "/home";

    const switchSignUp = () => {
        navigate('/signup');
    };

    if (user1 || user2) {
        // navigate(from, { replace: true });
    }
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

            <form onSubmit={handleSubmit} className="login-form flex flex-col">
                <label className='font-semibold mb-1' htmlFor="email">Email Address</label>
                <input ref={emailRef} className='pr-10 py-2 pl-3 rounded-md mb-3' type="email" name="email" id="email" placeholder='Enter Your Email' required />
                <label className='font-semibold mb-1' htmlFor="password">Password</label>
                <input ref={passwordRef} className='pr-10 py-2 pl-3 rounded-md' type="password" name="password" id="password" placeholder='Enter Your Password' required />
                <p className='text-red-600'>
                    {error2}
                </p>
                <div className='flex justify-between items-center mt-6'>
                    <p onClick={resetPassword} className='text-base font-semibold'>Forget Your Password?</p>
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