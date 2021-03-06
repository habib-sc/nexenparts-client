import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, useNavigate, useParams } from 'react-router-dom';
import auth from '../../../firebase.init';
import myAxios from '../../../myAxios/myAxios';
import Spinner from '../../Shared/Spinner/Spinner';

const Purchase = () => {
    const [item, setItem] = useState({});
    const [orderQty, setOrderQty] = useState(0);
    const [qtyError, setQtyError] = useState('');
    const [showDetail, setShowDetail] = useState(false);
    const [user] = useAuthState(auth);
    const [ordered, setOrdered] = useState(false);
    const [loading, setLoading] = useState(false);

    const { id } = useParams();
    const navigate = useNavigate();
    
    useEffect( () => {
        const url = ` https://mighty-chamber-14802.herokuapp.com/parts/${id}`;
        ( async () => {
            const { data } = await axios.get(url);
            setItem(data);
            setOrderQty(data.minOrderQty);
        })();
    }, [id]);

    
    // Qty error set
    useEffect( () => {
            const minOrder = parseInt(item.minOrderQty);
            const availableQty = parseInt(item.quantity);
            const currentOrderQty = parseInt(orderQty);

            if(currentOrderQty < minOrder) {
                setQtyError(`Minimum Order Quantity ${minOrder} Pcs`);
            }
            else if(currentOrderQty > availableQty){
                setQtyError(`Available Quantity ${availableQty} Pcs`);
            }
            else{
                setQtyError('');
            }
    }, [item.minOrderQty, item.quantity, orderQty]);


    // Decrease qty 
    const decreaseQty = () => {
        if(orderQty > item.minOrderQty) {
            setOrderQty(parseInt(orderQty) - 1);
        } 
    };

    // Increase Qty
    const increaseQty = () => {
        if(orderQty < item.quantity){
            setOrderQty(parseInt(orderQty) + 1);
        }
    };

    // Handle purchase 
    const handlePurchase = e => {
        e.preventDefault();
        const orderedQty = parseInt(orderQty);
        const totalPrice = orderQty * item.price;

        const order = {
            itemId: id,
            itemName: item.name,
            img: item.img,
            unitPrice: item.price,
            orderedQty,
            totalPrice,
            name: e.target.name.value,
            email: e.target.email.value,
            phone: e.target.phone.value,
            address: e.target.address.value,
            description: e.target.description.value
        };

        setLoading(true);

        ( async () => {
            const url = "https://mighty-chamber-14802.herokuapp.com/order";
            const { data } = await myAxios.post(url, order);

            if (data.insertedId) {
                const restQty = item.quantity - orderedQty;
                ( async () => {
                    const quantity = { quantity: restQty};

                    const url = `https://mighty-chamber-14802.herokuapp.com/parts/update/${id}`;
                    const { data } = await myAxios.patch(url, quantity);

                    console.log(data);
                    
                })();

                setOrdered(true);
                setLoading(false);
            }
            
        })();
    }

    // If loading showing loading 
    if(loading) {
        return <Spinner></Spinner>
    }


    // If ordered then showing order summery 
    if(ordered) {
        return <div>
            <div className="min-h-screen bg-base-200">
                <div className='container mx-auto px-4 pt-32'>
                    <div className="text-center flex justify-center mt-20 lg:mt-0">
                        <div className="max-w-md">
                            <h1 className="text-3xl font-semibold text-success">Your order has been placed successfully</h1>
                            <h2 className="text-2xl font-semibold mt-2">Thanks! for your order.</h2>
                        </div>
                    </div>


                    <div className='lg:w-2/3 w-full mx-auto overflow-auto mt-10 bg-gray-200 p-4 shadow-lg rounded-lg'>
                        <h2 className='text-center text-2xl font-semibold font-secondary border border-primary rounded-lg mb-5 pb-1'>Your Order Summery</h2>
                        <table className="table-auto w-full text-left whitespace-no-wrap">
                            <thead>
                                <tr>
                                    <th className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100 rounded-tl-lg rounded-bl-lg">Image</th>
                                    <th className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100">Item</th>
                                    <th className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100">Unit Price</th>
                                    <th className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100">Quantity</th>
                                    <th className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100 rounded-tr-lg rounded-br-lg">Total</th>
                                </tr>
                            </thead>
                            <tbody>
                            <tr>
                                <td className="px-4 py-3">
                                    <img src={item.img} alt="" className='w-20 border rounded-lg border-gray-300' />
                                </td>
                                <td className="px-4 py-3">{item.name}</td>
                                <td className="px-4 py-3">${item.price}</td>
                                <td className="px-4 py-3">{orderQty} Pcs</td>
                                <td className="px-4 py-3">${parseInt(orderQty) * item.price}</td>
                            </tr>
                            </tbody>
                        </table>
                        
                    </div>

                    <div className='flex justify-center mt-10 pb-20 gap-4'>
                        <Link to='/'><button className='btn btn-secondary btn-sm text-white'>Go to Homepage</button></Link>
                        <Link to='/dashboard/my-orders'><button className='btn btn-secondary btn-sm text-white'>See Your Orders</button></Link>
                    </div>
                    
                </div>

            </div>
        </div>
    }



    return (
        <div className='container mx-auto px-4 mt-24'>
            <div className='mx-auto p-4 shadow-lg rounded-lg text-center'>
                <h2 className='text-xl font-semibold'> You Are Purchasing <span className='font-bold'>{item.name} ({item.minOrderQty} Pcs)</span> </h2>
                <h2 className='text-xl font-semibold'> Total: <span className='font-bold'>${parseInt(orderQty) * item.price}</span> </h2>
                <button onClick={ () => setShowDetail(!showDetail)} className='btn btn-sm btn-primary hover:btn-secondary text-white hover:text-white mt-3'>Show Details</button>
            </div>

            <div className={`w-full mx-auto overflow-auto mt-10 ${showDetail ? '': 'hidden'}`}>
                <table className="table-auto w-full text-left whitespace-no-wrap">
                    <thead>
                    <tr>
                        <th className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100 rounded-tl rounded-bl">Image</th>
                        <th className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100">Item</th>
                        <th className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100">Unit Price</th>
                        <th className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100">Quantity</th>
                        <th className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100">Total</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td className="px-4 py-3">
                            <img src={item.img} alt="" className='w-20 border rounded-lg border-gray-300' />
                        </td>
                        <td className="px-4 py-3">{item.name}</td>
                        <td className="px-4 py-3">${item.price}</td>
                        <td className="px-4 py-3">
                            <button onClick={decreaseQty} className='btn btn-sm btn-primary font-bold text-lg w-5'>-</button>
                            <input value={orderQty} onChange={(e)=> setOrderQty(e.target.value)} type="text" className='border border-gray-300 rounded-lg py-2 px-1 w-20 mx-3' />
                            <button onClick={increaseQty} className='btn btn-sm btn-secondary font-bold text-lg w-5'>+</button>
                            <div className='w-40 text-center'>
                                {qtyError &&
                                    <p className='text-error font-semibold'>{qtyError}</p>
                                }
                            </div>
                        </td>
                        <td className="px-4 py-3">${parseInt(orderQty) * item.price}</td>
                    </tr>
                    </tbody>
                </table>
            </div>



            <div className='mx-auto flex flex-col justify-center mt-10'>
                <div className='rounded-lg border shadow-xl p-5 bg-gray-50'>
                    <h2 className='text-center text-2xl mt-2 mb-5'>Please Fillup this form</h2>
                    <form onSubmit={handlePurchase}>
                        <div className='grid grid-cols-1 md:grid-cols-3 gap-4'>
                            {/* Name  */}
                            <input type="text" disabled name='name' required value={user?.displayName} className="input input-bordered disabled:input-primary disabled:bg-gray-100 w-full mb-3"/>

                            {/* Email  */}
                            <input type="email" disabled name='email' required value={user?.email} className="input input-bordered disabled:input-primary disabled:bg-gray-100 w-full mb-3" />
                            
                            {/* Phone  */}
                            <input type="text" name='phone' required placeholder="Phone" className="input input-bordered input-primary w-full mb-3" />    
                        </div>

                        <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                            {/* Address  */}
                            <input type="text" name='address' required placeholder="Address" className="input input-bordered input-primary w-full mb-3" />  

                            {/* Description  */}
                            <textarea name='description' placeholder="Description" className="input input-bordered input-primary w-full mb-3 pt-3" />  
                        </div>

                        <div className='flex justify-center mt-2'>
                            <button disabled={qtyError} className='btn bg-gradient-to-r from-primary to-secondary text-white border-0 px-8 disabled:from-gray-300 disabled:to-slate-600'>Place Order</button>
                        </div>
                    </form>
                </div>
            </div>


            
        </div>
    );
};

export default Purchase;