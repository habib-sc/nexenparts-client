import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const Purchase = () => {
    const [item, setItem] = useState({});
    const [orderQty, setOrderQty] = useState(0);
    const [qtyError, setQtyError] = useState('');
    const [showDetail, setShowDetail] = useState(false);
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

            
        </div>
    );
};

export default Purchase;