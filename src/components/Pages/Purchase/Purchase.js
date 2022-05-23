import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router-dom';

const Purchase = () => {
    const [item, setItem] = useState({});
    const [orderQty, setOrderQty] = useState(0);
    const [qtyError, setQtyError] = useState('');
    const [showDetail, setShowDetail] = useState(false);
    const { register, handleSubmit, formState: { errors } } = useForm();
    const { id } = useParams();
    
    useEffect( () => {
        const url = ` http://localhost:5000/parts/${id}`;
        ( async () => {
            const { data } = await axios.get(url);
            setItem(data);
            setOrderQty(data.minOrderQty);
        })();
    }, [id]);


    // Get order Qty onChange 
    const getOrder = (e) => {
        const qty = e.target.value;

        if(qty < item.minOrderQty) {
            setQtyError(`Minimum Order Quantity ${item.minOrderQty} Pcs`)
        }
        else{
            setQtyError('');
        }
 
        setOrderQty(qty);
    }

    // Decrease qty 
    const decreaseQty = () => {
        if(orderQty > item.minOrderQty) {
            setOrderQty(parseInt(orderQty) - 1);
        } 
    };

    // Increase Qty
    const increaseQty = () => {
        setOrderQty(parseInt(orderQty) + 1);
    };

    console.log(orderQty);

    return (
        <div className='container mx-auto px-4 mt-24'>
            <div className='mx-auto p-4 shadow-lg rounded-lg text-center'>
                <h2 className='text-xl font-semibold'> You Are Purchasing <span className='font-bold'>{item.name} ({item.minOrderQty} Pcs)</span> </h2>
                <button onClick={ () => setShowDetail(!showDetail)} className='btn btn-sm btn-secondary hover:btn-primary text-white hover:text-white mt-3'>Show Details</button>
            </div>

            <div class={`w-full mx-auto overflow-auto mt-10 ${showDetail ? '': 'hidden'}`}>
                <table class="table-auto w-full text-left whitespace-no-wrap">
                    <thead>
                    <tr>
                        <th class="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100 rounded-tl rounded-bl">Image</th>
                        <th class="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100">Item</th>
                        <th class="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100">Unit Price</th>
                        <th class="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100">Quantity</th>
                        <th class="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100">Total</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td class="px-4 py-3">
                            <img src={item.img} alt="" className='w-20 border rounded-lg border-gray-300' />
                        </td>
                        <td class="px-4 py-3">{item.name}</td>
                        <td class="px-4 py-3">${item.price}</td>
                        <td class="px-4 py-3">
                            <button onClick={decreaseQty} className='btn btn-sm btn-primary font-bold text-lg w-5'>-</button>
                            <input onChange={getOrder} type="text" value={orderQty} className='border border-gray-300 rounded-lg py-2 px-1 w-20 mx-3' />
                            <button onClick={increaseQty} className='btn btn-sm btn-secondary font-bold text-lg w-5'>+</button>
                            <div>
                                {qtyError &&
                                    <p className='text-error font-semibold'>{qtyError}</p>
                                }
                            </div>
                        </td>
                        <td class="px-4 py-3">${parseInt(orderQty) * item.price}</td>
                    </tr>
                    </tbody>
                </table>
            </div>



            <div className='mx-auto flex flex-col justify-center mt-10'>
                <div className='rounded-lg border shadow-xl p-5 bg-gray-50'>
                    <h2 className='text-center text-2xl mt-2 mb-5'>Please Fillup this form</h2>
                    <form>
                        <div className='grid grid-cols-1 md:grid-cols-3 gap-4'>
                            {/* Name  */}
                            <input type="text" placeholder="Name"
                                {...register("name", {required: true })}
                                className="input input-bordered input-primary w-full mb-3" 
                            />

                            {/* Email  */}
                            <input type="email" placeholder="Email"
                                {...register("email", {required: true, pattern: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/i})}
                                className="input input-bordered input-primary w-full mb-3" 
                            />
                            
                            {/* Phone  */}
                            <input type="phone" placeholder="Phone"
                                {...register("phone", {required: true})}
                                className="input input-bordered input-primary w-full mb-3" 
                            />    
                        </div>

                        <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                            {/* Address  */}
                            <input type="text" placeholder="Address"
                                {...register("address", {required: true })}
                                className="input input-bordered input-primary w-full mb-3" 
                            />  

                            <textarea placeholder="Description"
                                {...register("description")}
                                className="input input-bordered input-primary w-full mb-3 pt-3" 
                            />  
                        </div>

                        <div className='flex justify-center mt-2'>
                            <button className='btn bg-gradient-to-r from-primary to-secondary text-white border-0 px-8'>Purchase Confirm</button>
                        </div>
                    </form>
                </div>
            </div>


            
        </div>
    );
};

export default Purchase;