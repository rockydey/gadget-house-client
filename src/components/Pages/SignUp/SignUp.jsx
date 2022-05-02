import React, { useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Google from '../../../images/google.png';
import './SignUp.css';
import { useCreateUserWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const SignUp = () => {
    const [signInWithGoogle, user1] = useSignInWithGoogle(auth);
    const [
        createUserWithEmailAndPassword,
        user2,
        error2,
    ] = useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });

    const emailRef = useRef('');
    const passwordRef = useRef('');
    const confirmPasswordRef = useRef('');
    const [errorValue, setErrorValue] = useState('');
    const [agree, setAgree] = useState(false);
    const navigate = useNavigate();

    const switchLogIn = () => {
        navigate('/login');
    };

    const handleSubmit = event => {
        event.preventDefault();

        const email = emailRef.current.value;
        const password = passwordRef.current.value;
        const confirmPassword = confirmPasswordRef.current.value;

        if (password !== confirmPassword) {
            setErrorValue("Both passwords didn't match!");
            return;
        }

        createUserWithEmailAndPassword(email, password);
        toast("Verification Email Sent!!");
    };

    if (user1 || user2) {
        navigate('/');
    }
    return (
        <div className='login p-6 mx-auto my-14 rounded-xl'>
            <h1 className='text-center text-lg font-semibold mb-3'>To continue, log in to Gadget House.</h1>
            <div className="social-login">
                <button onClick={() => signInWithGoogle()} className='flex items-center justify-center w-full rounded-full uppercase py-2 mt-2 font-semibold'><img className='mr-2' width={18} src={Google} alt="" /><span>Sign Up With Google</span></button>
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
                <input ref={passwordRef} className='pr-10 py-2 pl-3 rounded-md mb-3' type="password" name="password" id="password" placeholder='Enter Your Password' required />
                <label className='font-semibold mb-1' htmlFor="confirmPassword">Confirm Password</label>
                <input ref={confirmPasswordRef} className='pr-10 py-2 pl-3 rounded-md' type="password" name="confirmPassword" id="confirmPassword" placeholder='Enter Your Password Again' required />


                <p className='text-red-600'>
                    {
                        errorValue || error2?.message
                    }
                </p>


                <div className='mt-6'>
                    <input onClick={() => setAgree(!agree)} className='mr-2' type="checkbox" name="checkbox" id="checkbox" />
                    <label className={agree ? "text-green-600" : "text-red-600"} htmlFor="checkbox">I accept all terms and conditions.</label>
                </div>
                <div className='mt-6'>
                    <input disabled={!agree} className='btn-submit text-white text-lg font-semibold w-full py-2 rounded-full' type="submit" value="Sign Up" />
                </div>
            </form>

            <div className='line my-6'></div>

            <div className="create-account">
                <p className='text-center text-base font-bold'>Already have an account?</p>
                <button onClick={switchLogIn} className='w-full rounded-full uppercase py-2 mt-3 font-semibold'>Log In Now</button>
            </div>
        </div>
    );
};

export default SignUp;