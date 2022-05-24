import React, { useEffect } from 'react';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';
import useToken from '../../hooks/useToken';
import Spinner from '../Shared/Spinner/Spinner';
import SocialAuth from './SocialAuth';

const Login = () => {

    const { register, handleSubmit, formState: { errors } } = useForm();
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || "/";

    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useSignInWithEmailAndPassword(auth);
    
    const [token] = useToken(user);

    const handleLogin = data => {
        signInWithEmailAndPassword(data.email, data.password);
    };


    // Handling Login errors 
    if (error){
        switch(error?.code){
            case "auth/invalid-email":
                toast.error("Invalid Email!", { toastId: 'invalidemail'});
                break;
            case "auth/wrong-password":
                toast.error("Password Dont't Match!", { toastId: 'passworddontmatch'});
                break;
            case "auth/user-not-found":
                toast.error("User Not Found!", { toastId: 'usernotfound'});
                break;
            default:
                toast.error("Something Went Wrong!", { toastId: 'defaulterrorcase'});
                break;
        }
    }


    useEffect( () => {
        if (token){
            navigate(from, { replace: true });
        }
    }, [token, navigate, from]);

    if (loading) {
        return <Spinner></Spinner>
    }

    return (
        <div className='container px-4 mx-auto'>
            <div className='lg:w-96 mx-auto flex flex-col justify-center mt-32'>
                <div className='rounded-lg border shadow-xl p-5 bg-gray-50'>
                    <h2 className='text-center text-2xl mt-2 mb-5'>Login</h2>
                    <form onSubmit={handleSubmit(handleLogin)}>
                        <input type="email" placeholder="Email"
                            {...register("email", {required: true, pattern: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/i})}
                            className="input input-bordered input-primary w-full mb-3" 
                        />
                        <p className='text-red-500 mb-3 mt-[-8px]'>{errors.email?.type === 'required' && "Email is required"}</p>
                        <p className='text-red-500 mb-3 mt-[-8px]'>{errors.email?.type === 'pattern' && "Invalid Email!"}</p>

                        <input type="password" placeholder="Password"
                           {...register("password", {required: true, minLength: 6, maxLength: 20})}
                            className="input input-bordered input-primary w-full mb-3" 
                        />
                        <p className='text-red-500 mb-3 mt-[-8px]'>{errors.password?.type === 'required' && "Password Required!"}</p>
                        <p className='text-red-500 mb-3 mt-[-8px]'>{errors.password?.type === 'minLength' && "Minimum 6 character required !"}</p>
                        <p className='text-red-500 mb-3 mt-[-8px]'>{errors.password?.type === 'maxLength' && "Maximum 6 character required !"}</p>

                        <button className='btn bg-gradient-to-r from-primary to-secondary text-white border-0 px-8 w-full'>Login</button>
                    </form>
                    
                    <p className='mt-2'>New To Nexen Car Parts? <Link to='/register' className='text-primary'>Create New Account</Link></p>
                    <p className=''>Forgot Password? <Link to='/password-reset' className='text-primary'>Reset Now</Link></p>

                    <SocialAuth></SocialAuth>

                </div>
            </div>
        </div>
    );
};

export default Login;