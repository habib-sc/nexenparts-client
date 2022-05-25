import { signOut } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import myAxios from '../../../myAxios/myAxios';
import Spinner from '../../Shared/Spinner/Spinner';
import CancelConfirm from './CancelConfirm';

const MyOrders = () => {
    
    const [user, loading] = useAuthState(auth);
    const [myOrders, setMyOrders] = useState([]);
    const [cancelOrder, setCancelOrder] = useState({});
    const navigate = useNavigate();

    useEffect( () => {
        const url = `http://localhost:5000/orders?email=${user?.email}`;
        ( async () => {

            try{
                const { data } = await myAxios.get(url);
                setMyOrders(data);
            }
            catch(error){
                const status = error.response.status;
                if(status === 401 || status === 403) {
                    signOut(auth);
                    localStorage.removeItem('accessToken');
                    navigate('/login');
                }
            }

        })();
    }, [user?.email, navigate, cancelOrder]);


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
                                <th className='bg-gray-200'>Status</th>
                                <th className='bg-gray-200'></th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                myOrders.map((order, index) => <tr key={order._id}>
                                    <td>{index + 1}</td>
                                    <td>
                                        <img src={order.img} className='w-16 rounded-lg' alt="" />
                                    </td>
                                    <td>{order.itemName}</td>
                                    <td>${order.unitPrice}</td>
                                    <td>{order.orderedQty} /Pcs</td>
                                    <td>${order.totalPrice}</td>
                                    <td>
                                        
                                    </td>
                                    <td className='w-32'> 
                                        {(order.totalPrice && !order.paid && !order.cancelled) && <Link to={`/dashboard/payment/${order._id}`}><button className='btn btn-xs btn-secondary text-white'>Pay</button></Link>}
                                        {(order.totalPrice && !order.paid && !order.cancelled) && <label onClick={ () => setCancelOrder(order)} htmlFor="order-cancel" className='btn btn-xs btn-error text-white ml-2'>Cancel</label>}

                                        {order.cancelled && <span className='bg-red-100 text-red-400 px-2 pb-1 rounded-lg text-sm'>Cancelled</span>}

                                        {order.paid && 
                                        <div className='mb-2'>
                                            <span className='bg-green-200 text-green-600 px-2 pb-1 rounded-lg text-sm'>Paid</span>
                                        </div>
                                        }  

                                        {order.transactionId && 
                                        <div className='border pb-1 px-2 rounded-lg w-[150px] relative overflow-x-auto'>
                                            <p className='font-bold'>Txn Id:</p>
                                            <p className='text-sm'>{order.transactionId}</p> 
                                        </div>}

                                    </td>
                                </tr>)
                            }
                        </tbody>
                    </table>
            </div>

            {cancelOrder &&
                <CancelConfirm cancelOrder={cancelOrder} setCancelOrder={setCancelOrder}></CancelConfirm>
            }

        </div>
    );
};

export default MyOrders;