import React from 'react';
import Banner from './Banner/Banner';
import Parts from './Parts/Parts';
import Reviews from './Reviews/Reviews';
import Summery from './Summery/Summery';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Parts></Parts>
            <Summery></Summery>
            <Reviews></Reviews>
        </div>
    );
};

export default Home;