import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <div className='container mx-auto'>
            <div className='flex justify-center items-center h-[80vh]'>
                <div className='border w-64 md:w-[500px] p-5 rounded-lg shadow-lg flex flex-col justify-center items-center'>
                    <h1 className='text-4xl lg:text-8xl font-bold'>404</h1>
                    <h2 className='text-3xl font-bold mt-3 text-center'>Sorry! the page you looking for not found!</h2>
                    <Link to='/'><button className='btn btn-primary btn-sm text-white mt-3'>Navigate to Home</button></Link>
                </div>
            </div>
        </div>
    );
};

export default NotFound;