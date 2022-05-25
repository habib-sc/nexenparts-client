import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { useQuery } from 'react-query';
import { toast } from 'react-toastify';
import auth from '../../../firebase.init';
import myAxios from '../../../myAxios/myAxios';
import Spinner from '../../Shared/Spinner/Spinner';

const MyProfile = () => {
    const [user, loading, error] = useAuthState(auth);
    const { register, handleSubmit, formState: { errors }, reset } = useForm();
    const [loadingUpdate, setLoadingUpdate] = useState(false);

    const avatarPlaceHolder = user.email[0].toUpperCase();

    const url = `http://localhost:5000/user-info/${user?.email}`;
    const { data: userInfo, isLoading, refetch } = useQuery('userInfo', () => fetch(url, {
        method: 'GET',
        headers: {
            'authorization': `Bearer ${localStorage.getItem('accessToken')}`
        }
    }).then(res => res.json()));


    // Handlinig update user info 
    const handleUpdateProfile = data => {
        console.log(data);

        const userData = {
            address: data.address,
            phone: data.phone,
            education: data.education,
            jobTitle: data.jobTitle,
            linkedin: data.linkedin,
            facebook: data.facebook
        }

        setLoadingUpdate(true);

        // Send user info to database 
        ( async () => {
            const url = `http://localhost:5000/user/${user?.email}`;
            const { data } = await myAxios.put(url, userData);
            console.log(data);

            if(data.result.acknowledged){
                toast.success('Profile Updated Successfully');
                reset();
                setLoadingUpdate(false);
            }
            else{
                toast.error('Failed Update Profile');
                setLoadingUpdate(false);
            }
        })();
    }

    if(loading || loadingUpdate) {
        return <Spinner></Spinner>
    }

    return (
        <div className='border px-5 py-10 rounded-lg shadow-lg w-full'>
            <h2 className='text-2xl font-semibold text-center font-secondary mb-5'>Profile Info</h2>

            <div className='grid grid-cols-1 lg:grid-cols-3 gap-4'>      
                <div className='flex items-center justify-center gap-4 border p-5 rounded-lg'>
                    <div>
                        {user.photoURL &&
                        <div class="avatar">
                            <div class="w-16 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                                <img src={user.photoURL} alt='avatar' />
                            </div>
                        </div>
                        }

                        {!user.photoURL &&
                        <div class="avatar placeholder">
                            <div class="bg-neutral-focus text-neutral-content rounded-full w-16">
                                <span class="text-3xl">{avatarPlaceHolder}</span>
                            </div>
                        </div>
                        }
                    </div>

                    <div>
                        <h2 className='text-2xl font-semibold'>{user.displayName}</h2>
                        <p className='font-semibold'>{user?.email}</p>
                    </div> 
                </div>

                <div className='lg:col-span-2'>
                    <div className='flex flex-wrap gap-4 border p-5 rounded-lg'>
                        <p><span className='font-semibold'>Phone:</span> {userInfo?.phone}</p>
                    </div> 
                </div>

            </div>

            

            <h2 className='text-2xl font-semibold text-center font-secondary mt-10 mb-8'>Update More Information</h2>

            <div className='w-full'>
                <form onSubmit={handleSubmit(handleUpdateProfile)}>
                    
                    <div className='grid grid-cols-1 lg:grid-cols-3 gap-4'>
                        <div className='grid gird-cols-1'>
                            <label htmlFor="">Address</label>
                            <input className='border border-gray-400 py-2 px-2 rounded-lg' type="text" {...register("address")} />
                        </div>
                        <div className='grid gird-cols-1'>
                            <label htmlFor="">Phone Number</label>
                            <input className='border border-gray-400 py-2 px-2 rounded-lg' type="text" {...register("phone")} />
                        </div>
                        <div className='grid gird-cols-1'>
                            <label htmlFor="">Education</label>
                            <input className='border border-gray-400 py-2 px-2 rounded-lg' type="text" {...register("education")} />
                        </div>
                        <div className='grid gird-cols-1'>
                            <label htmlFor="">Job Title</label>
                            <input className='border border-gray-400 py-2 px-2 rounded-lg' type="text" {...register("jobTitle")} />
                        </div>
                        <div className='grid gird-cols-1'>
                            <label htmlFor="">Linkedin profile</label>
                            <input className='border border-gray-400 py-2 px-2 rounded-lg' type="url" {...register("linkedin")} />
                        </div>
                        <div className='grid gird-cols-1'>
                            <label htmlFor="">Facebook profile</label>
                            <input className='border border-gray-400 py-2 px-2 rounded-lg' type="url" {...register("facebook")} />
                        </div>
                    </div>

                    <div className='w-full flex justify-center'>
                        <button className='btn btn-secondary mt-5 text-white w-32'>Submit</button>
                    </div>

                </form>
            </div>


        </div>
    );
};

export default MyProfile;