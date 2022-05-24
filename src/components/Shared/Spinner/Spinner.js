import React from 'react';
import spinner from '../../../assets/spinner/dual-ring.svg';

const Spinner = () => {
    return (
        <div className='h-80 flex flex-col justify-center items-center'>
            <img src={spinner} className='h-32' alt="" />
        </div>
    );
};

export default Spinner;