import React from 'react';
import { Link } from 'react-router-dom';

const Item = ({item}) => {
    const {_id, name, img, description, quantity, minOrderQty, price} = item;
    return (
        <div className="bg-base-100 shadow-lg border rounded-lg">
            <figure className="p-4 pb-0">
                <img src={img} alt="item img" className="rounded-lg" />
                <div className='-mt-16 px-4'>
                    <h2 className="card-title uppercase text-lg">{name}</h2>
                    <p className='font-bold text-primary text-lg'>${price}</p>
                </div>
            </figure>
            <div className="card-body items-center text-center">
                <div className='flex flex-wrap justify-between items-center border w-full rounded-lg'>
                    <p className='text-primary'><span className='font-semibold text-sm text-secondary'>Available:</span> {quantity} Pcs</p>
                    <p className='text-primary'><span className='font-semibold text-sm text-secondary'>Min Order QTY:</span> {minOrderQty} Pcs</p>
                </div>
                <p>{description}</p>
                <div className="card-actions">
                <Link to={`/purchase/${_id}`}><button className="btn btn-primary text-white">Order Now</button></Link>
                </div>
            </div>
        </div>
    );
};

export default Item;