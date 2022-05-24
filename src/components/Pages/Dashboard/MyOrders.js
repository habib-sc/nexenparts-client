import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import Spinner from '../../Shared/Spinner/Spinner';

const MyOrders = () => {
    
    const [user, loading] = useAuthState(auth);
    const [myOrders, setMyOrders] = useState([]);
    const navigate = useNavigate();

    useEffect( () => {
        const url = ` http://localhost:5000/orders?email=${user?.email}`;
        ( async () => {
            const { data } = await axios.get(url);
            setMyOrders(data);
        })();
    }, [user?.email]);

    if(loading) {
        <Spinner></Spinner>
    }



    return (
        <div>
            <h2 className='mt-3 mb-2 text-lg font-semibold bg-red-100 pb-1 pl-2 rounded-lg text-primary'>Total Orders: {myOrders.length}</h2>
            <div class="overflow-x-auto">
                <table className="table w-full">
                        {/* <!-- head --> */}
                        <thead >
                            <tr>
                                <th className='bg-gray-200'>sl</th>
                                <th className='bg-gray-200'>Image</th>
                                <th className='bg-gray-200'>Item</th>
                                <th className='bg-gray-200'>Price</th>
                                <th className='bg-gray-200'>Quantity</th>
                                <th className='bg-gray-200'>Total</th>
                                <th className='bg-gray-200'>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                myOrders.map((order, index) => <tr key={order._id}>
                                    <th>{index + 1}</th>
                                    <th>
                                        <img src={order.img} className='w-16 rounded-lg' alt="" />
                                    </th>
                                    <td>{order.itemName}</td>
                                    <td>${order.unitPrice}</td>
                                    <td>{order.orderedQty} /Pcs</td>
                                    <td>${order.totalPrice}</td>
                                    <td>
                                        {(order.totalPrice && !order.paid) && <Link to={`/dashboard/payment/${order._id}`}><button className='btn btn-xs btn-secondary text-white'>Pay</button></Link>}
                                        {(order.totalPirce && order.paid) && <span className='bg-sky-200 px-2 pb-1 rounded-lg text-sm'>Paid</span>}
                                    </td>
                                </tr>)
                            }
                        </tbody>
                    </table>
            </div>
        </div>
    );
};

export default MyOrders;