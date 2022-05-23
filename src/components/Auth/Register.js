import React, { useState } from 'react';
import { useCreateUserWithEmailAndPassword, useUpdateProfile } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import Spinner from '../Shared/Spinner/Spinner';

const Register = () => {
    const [passwordError, setPasswordError] = useState('');
    const { register, handleSubmit, formState: { errors } } = useForm();
    const navigate = useNavigate();

    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth, {sendEmailVerification: true});

    const [updateProfile, updating, updateError] = useUpdateProfile(auth);

    // Handling Register 
    const handleRegister = async data => {
        if (data.password !== data.confirmPassword) {
            setPasswordError('Password not matching with Confirm Password!');
            return;
        }

        await createUserWithEmailAndPassword(data.email, data.password);
        const displayName = data.name;
        await updateProfile({displayName});
    };

    if (loading || updating) {
        return <Spinner></Spinner>
    }

    return (
        <div className='container px-4 mx-auto'>
            <div className='lg:w-96 mx-auto flex flex-col justify-center mt-32'>
                <div className='rounded-lg border shadow-xl p-5 bg-gray-50'>
                    <h2 className='text-center text-2xl mt-2 mb-5'>Register</h2>
                    <form onSubmit={handleSubmit(handleRegister)}>
                        {/* Name  */}
                        <input type="text" placeholder="Name"
                            {...register("name", {required: true })}
                            className="input input-bordered input-primary w-full mb-3" 
                        />
                        <p className='text-red-500 mb-3 mt-[-8px]'>{errors.name?.type === 'required' && "Name is required"}</p>

                        {/* Email  */}
                        <input type="email" placeholder="Email"
                            {...register("email", {required: true, pattern: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/i})}
                            className="input input-bordered input-primary w-full mb-3" 
                        />
                        <p className='text-red-500 mb-3 mt-[-8px]'>{errors.email?.type === 'required' && "Email is required"}</p>
                        <p className='text-red-500 mb-3 mt-[-8px]'>{errors.email?.type === 'pattern' && "Invalid Email!"}</p>

                        {/* Password  */}
                        <input type="password" placeholder="Password"
                           {...register("password", {required: true, minLength: 6, maxLength: 20})}
                            className="input input-bordered input-primary w-full mb-3" 
                        />
                        <p className='text-red-500 mb-3 mt-[-8px]'>{errors.password?.type === 'required' && "Password Required!"}</p>
                        <p className='text-red-500 mb-3 mt-[-8px]'>{errors.password?.type === 'minLength' && "Minimum 6 character required !"}</p>
                        <p className='text-red-500 mb-3 mt-[-8px]'>{errors.password?.type === 'maxLength' && "Maximum 6 character required !"}</p>

                        {/* Confirm Password  */}
                        <input type="password" placeholder="Confirm Password"
                           {...register("confirmPassword", {required: true, minLength: 6, maxLength: 20})}
                            className="input input-bordered input-primary w-full mb-3" 
                        />
                        <p className='text-red-500 mb-3 mt-[-8px]'>{errors.confirmPassword?.type === 'required' && "Password Required!"}</p>
                        <p className='text-red-500 mb-3 mt-[-8px]'>{errors.confirmPassword?.type === 'minLength' && "Minimum 6 character required !"}</p>
                        <p className='text-red-500 mb-3 mt-[-8px]'>{errors.confirmPassword?.type === 'maxLength' && "Maximum 6 character required !"}</p>
                        {passwordError &&
                            <p className='text-red-500 mb-3 mt-[-8px]'>{passwordError}</p>
                        }

                        <button className='btn bg-gradient-to-r from-primary to-secondary text-white border-0 px-8 w-full'>Register</button>
                    </form>

                    <p className='mt-2'>Already have an Account? <Link to='/login' className='text-primary'>Login</Link></p>
                    
                </div>
            </div>
        </div>
    );
};

export default Register;