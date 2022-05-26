import React from 'react';
import carPart from '../../../../assets/images/car-part.png';

const Banner = () => {
    return (
        <div>
            <div className="hero min-h-[70vh] bg-base-200">
                <div className="hero-content flex-col lg:flex-row-reverse mt-14">
                    <div className='flex-1'>
                        <img src={carPart} className="" alt='' />
                    </div>
                    <div className='flex-1'>
                        <h1 className="text-5xl font-bold">Best Automotive Components</h1>
                        <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                        <button className="btn btn-primary text-white">Get Started</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;