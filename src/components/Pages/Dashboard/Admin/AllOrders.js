import React from 'react';
import { useQuery } from 'react-query';
import { toast } from 'react-toastify';
import myAxios from '../../../../myAxios/myAxios';
import Spinner from '../../../Shared/Spinner/Spinner';

const AllOrders = () => {

    const { data: allOrders, isLoading, refetch } = useQuery('allOrders', () => fetch('http://localhost:5000/all-orders', {
        method: 'GET',
        headers: {
            'authorization': `Bearer ${localStorage.getItem('accessToken')}`
        }
    }).then(res => res.json()));

    // Handling Order Approve 
    const handleOrderApprove = (order) => {
        const approveData = {approved: true};

        ( async () => {
            const url = `http://localhost:5000/order/approve/${order._id}`;
            const { data } = await myAxios.patch(url, approveData);
            if(data) {
                toast.success('Order Approved.');
                refetch();
            }
        })();

    }

    if(isLoading){
        return <Spinner></Spinner>
    }

    return (
        <div>
        <h2 className='mt-3 mb-2 text-lg font-semibold bg-red-100 pb-1 pl-2 rounded-lg text-primary'>Total Orders: {allOrders.length}</h2>
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
                            <th className='bg-gray-200'>Ordered By</th>
                            <th className='bg-gray-200'>Status</th>
                            <th className='bg-gray-200'></th>
                        </tr>
                    </thead>
                    <tbody>
                        {allOrders.length > 0 &&
                            allOrders.map((order, index) => <tr key={order._id}>
                                <td>{index + 1}</td>
                                <td>
                                    <img src={order.img} className='w-16 rounded-lg' alt="" />
                                </td>
                                <td>{order.itemName}</td>
                                <td>${order.unitPrice}</td>
                                <td>{order.orderedQty} /Pcs</td>
                                <td>${order.totalPrice}</td>
                                <td>{order.email}</td>
                                <td>
                                    {(!order.shipped && !order.paid) && <span className='bg-orange-100 text-orange-500 px-2 pb-1 rounded-lg text-sm'>Unpaid</span>}
                                    {(order.paid) && <span className='bg-green-100 text-green-600 px-2 pb-1 rounded-lg text-sm'>Paid</span>}
                                    {order.approved && <span className='bg-sky-100 text-sky-600 px-2 pb-1 rounded-lg text-sm ml-2'>Shipped</span>}
                                </td>
                                <td className='w-32'> 
                                    {(order.totalPrice && !order.approved && order.paid) && <button onClick={ () => handleOrderApprove(order)} className='btn btn-xs btn-secondary text-white mb-1'>Approve</button>}
                                    {(order.totalPrice && !order.paid) && <label htmlFor="" className='btn btn-xs btn-error text-white ml-2'>Cancel</label>}  

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



    </div>
    );
};

export default AllOrders;