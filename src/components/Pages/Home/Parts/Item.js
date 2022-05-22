import React from 'react';

const Item = ({item}) => {
    const {name, img, description, quantity, minOrderQty, price} = item;
    return (
        <div class="bg-base-100 shadow-lg border rounded-lg">
            <figure class="p-4 pb-0">
                <img src={img} alt="item img" class="rounded-lg" />
                <div className='-mt-16 px-4'>
                    <h2 class="card-title uppercase text-lg">{name}</h2>
                    <p className='font-bold text-primary text-lg'>${price}</p>
                </div>
            </figure>
            <div class="card-body items-center text-center">
                <p>{description}</p>
                <div class="card-actions">
                <button class="btn btn-primary text-white">Order Now</button>
                </div>
            </div>
        </div>
    );
};

export default Item;