import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import auth from '../../../firebase.init';
import myAxios from '../../../myAxios/myAxios';
import Spinner from '../../Shared/Spinner/Spinner';

const MyProfile = () => {
    const [user, loading, error] = useAuthState(auth);
    const { register, handleSubmit, formState: { errors }, reset } = useForm();
    const [loadingUpdate, setLoadingUpdate] = useState(false);

    const [address, setAddress] = useState("");
    const [phone, setPhone] = useState("");
    const [education, setEducation] = useState("");
    const [jobTitle, setJobTitle] = useState("");
    const [linkedin, setLinkedin] = useState("");
    const [facebook, setFacebook] = useState("");

    const [infoUpdated, setInfoUpdated] = useState(false);

    const avatarPlaceHolder = user.displayName[0].toUpperCase() || user.email[0].toUpperCase();

    useEffect( () => {
        const url = `http://localhost:5000/user-info/${user?.email}`;
        fetch(url, {
            method: 'GET',
            headers: {
                'authorization': `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
        .then(res => res.json())
        .then(result => {
            setAddress(result.address);
            setPhone(result.phone);
            setEducation(result.education);
            setJobTitle(result.jobTitle);
            setLinkedin(result.linkedin);
            setFacebook(result.facebook);
        });

    }, [infoUpdated, user?.email]);


    // Handlinig update user info 
    const handleUpdateProfile = e => {
        e.preventDefault();

        const userData = {
            address: e.target.address.value,
            phone: e.target.phone.value,
            education: e.target.education.value,
            jobTitle: e.target.jobTitle.value,
            linkedin: e.target.linkedin.value,
            facebook: e.target.facebook.value,
        }

        setLoadingUpdate(true);

        // Send user info to database 
        ( async () => {
            const url = `http://localhost:5000/user/${user?.email}`;
            const { data } = await myAxios.put(url, userData);

            if(data.result.acknowledged){
                toast.success('Profile Updated Successfully');
                setLoadingUpdate(false);
                setInfoUpdated(!infoUpdated);
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
                        {user?.photoURL &&
                        <div className="avatar">
                            <div className="w-16 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                                <img src={user?.photoURL} alt='avatar' />
                            </div>
                        </div>
                        }

                        {!user?.photoURL &&
                        <div className="avatar placeholder">
                            <div className="bg-neutral-focus text-neutral-content rounded-full w-16">
                                <span className="text-3xl">{avatarPlaceHolder}</span>
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
                    <div className='grid grid-cols-1 lg:grid-cols-2 gap-4 border p-5 rounded-lg'>
                        <div>
                            <p><span className='font-semibold'>Phone:</span> {phone}</p>
                        </div>
                        <div>
                            <p><span className='font-semibold'>Address:</span> {address}</p>
                        </div>
                        <div>
                            <p><span className='font-semibold'>Education:</span> {education}</p>
                        </div>  
                        <div>
                            <p><span className='font-semibold'>Job Title:</span> {jobTitle}</p>
                        </div>  
                        <div>
                            <p><span className='font-semibold'>Linkedin:</span> {linkedin}</p>
                        </div>
                        <div>
                            <p><span className='font-semibold'>Facebook:</span> {facebook}</p>
                        </div>
                    </div> 
                </div>

            </div>

            

            <h2 className='text-2xl font-semibold text-center font-secondary mt-10 mb-8'>Update Prfile Info</h2>

            <div className='w-full'>
                <form onSubmit={handleUpdateProfile}>
                    
                    <div className='grid grid-cols-1 lg:grid-cols-3 gap-4'>
                        <div className='grid gird-cols-1'>
                            <label htmlFor="">Address</label>
                            <input value={address} onChange={ (e) => setAddress(e.target.address)} className='border border-gray-400 py-2 px-2 rounded-lg' type="text" name='address' />
                        </div>
                        <div className='grid gird-cols-1'>
                            <label htmlFor="">Phone Number</label>
                            <input value={phone} onChange={ (e) => setPhone(e.target.phone)} className='border border-gray-400 py-2 px-2 rounded-lg' type="number" name='phone' />
                        </div>
                        <div className='grid gird-cols-1'>
                            <label htmlFor="">Education</label>
                            <input value={education} onChange={ (e) => setEducation(e.target.education)} className='border border-gray-400 py-2 px-2 rounded-lg' type="text" name='education' />
                        </div>
                        <div className='grid gird-cols-1'>
                            <label htmlFor="">Job Title</label>
                            <input value={jobTitle} onChange={ (e) => setJobTitle(e.target.jobTitle)} className='border border-gray-400 py-2 px-2 rounded-lg' type="text" name='jobTitle' />
                        </div>
                        <div className='grid gird-cols-1'>
                            <label htmlFor="">Linkedin profile</label>
                            <input value={linkedin} onChange={ (e) => setLinkedin(e.target.linkedin)} className='border border-gray-400 py-2 px-2 rounded-lg' type="url" name='linkedin' />
                        </div>
                        <div className='grid gird-cols-1'>
                            <label htmlFor="">Facebook profile</label>
                            <input value={facebook} onChange={ (e) => setFacebook(e.target.facebook)} className='border border-gray-400 py-2 px-2 rounded-lg' type="url" name='facebook'  />
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