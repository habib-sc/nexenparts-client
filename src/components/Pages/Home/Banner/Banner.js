import React from 'react';
import carPart from '../../../../assets/images/car-part.png';

const Banner = () => {
    return (
        <div>
            <div class="hero min-h-[60vh] bg-base-200">
                <div class="hero-content flex-col lg:flex-row-reverse mt-14">
                    <div className='flex-1'>
                        <img src={carPart} class="" alt='' />
                    </div>
                    <div className='flex-1'>
                        <h1 class="text-5xl font-bold">Best Automotive Components</h1>
                        <p class="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                        <button class="btn btn-primary text-white">Get Started</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;