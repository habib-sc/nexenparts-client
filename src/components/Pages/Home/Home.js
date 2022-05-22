import React from 'react';
import Banner from './Banner/Banner';
import Parts from './Parts/Parts';
import Summery from './Summery/Summery';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Parts></Parts>
            <Summery></Summery>
        </div>
    );
};

export default Home;