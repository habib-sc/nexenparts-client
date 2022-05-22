import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Item from './Item';

const Parts = () => {
    const [parts, setParts] = useState({});

    useEffect( () => {
        ( async () => {
            const { data } = await axios.get('/parts.json');
            setParts(data);
        })();
    }, []);

    console.log(parts);
    
    return (
        <div className='container mx-auto px-4 my-20'>
            <h1 className='text-center text-3xl font-bold my-10 uppercase'>Latest Car Parts</h1>

            {parts.length > 0 && 
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8'>
                 {
                    parts.map(item => <Item key={item._id} item={item}></Item>)
                 }
            </div>}

        </div>
    );
};

export default Parts;