import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import { signOut } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { Navigate, useParams } from 'react-router-dom';
import auth from '../../../firebase.init';
import myAxios from '../../../myAxios/myAxios';
import Spinner from '../../Shared/Spinner/Spinner';
import CheckoutForm from './CheckoutForm';

const stripePromise = loadStripe(`${process.env.REACT_APP_STRIPE_PK}`);

const Payment = () => {
    const [order, setOrder] = useState({});
    const [loading, setLoading] = useState(false);
    const { id } = useParams();
    
    useEffect( () => {
        const url = `http://localhost:5000/order/${id}`;
        setLoading(true);
        ( async () => {
            try{
                const { data } = await myAxios.get(url);
                setOrder(data);
            }
            catch(error){
                const status = error.response.status;
                if(status === 401 || status === 403) {
                    signOut(auth);
                    localStorage.removeItem('accessToken');
                    Navigate('/login');
                }
            }
            setLoading(false);

        })();
    }, [id]);



    if(loading) {
        return <Spinner></Spinner>
    }

    return (
        <div className='px-4'>
            <div className="card bg-base-100 shadow-xl border ">   
                <div className="card-body">

                    <h2 className='text-2xl text-secondary font-semibold'>Hello, {order.name}</h2>
                    <h2 className='text-2xl text-primary font-semibold mb-2'>Make payment for {order.itemName}</h2>

                    <table class="table-auto w-full text-left whitespace-no-wrap">
                        <thead>
                            <tr>
                                <th class="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100 rounded-tl-lg rounded-bl-lg">Image</th>
                                <th class="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100">Item</th>
                                <th class="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100">Unit Price</th>
                                <th class="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100">Quantity</th>
                                <th class="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100 rounded-tr-lg rounded-br-lg">Total</th>
                            </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <td class="px-4 py-3">
                                <img src={order.img} alt="" className='w-20 border rounded-lg border-gray-300' />
                            </td>
                            <td class="px-4 py-3">{order.itemName}</td>
                            <td class="px-4 py-3">${order.unitPrice}</td>
                            <td class="px-4 py-3">{order.orderedQty} Pcs</td>
                            <td class="px-4 py-3 font-semibold">${order.totalPrice}</td>
                        </tr>
                        </tbody>
                    </table>

                </div>
            </div>

            <div className="card lg:w-[500px] bg-base-100 shadow-xl border mt-5">   
                <div className="card-body">
                    {
                        <Elements stripe={stripePromise}>
                        <CheckoutForm order={order} />
                    </Elements>}
                </div>
            </div>
            
        </div>
    );
};

export default Payment;