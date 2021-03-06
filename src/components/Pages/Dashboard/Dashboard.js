import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { NavLink, Outlet, useLocation } from 'react-router-dom';
import auth from '../../../firebase.init';
import useAdmin from '../../../hooks/useAdmin';

const Dashboard = () => {
    const [user] = useAuthState(auth);
    const { pathname } = useLocation();
    const [admin] = useAdmin(user);

    return (
        <div className='mt-20 px-4'>
            
            <div className="drawer drawer-mobile">
                <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content flex flex-col px-4">
                    {/* <!-- Page content here --> */}
                    
                    <Outlet/>

                    {pathname === '/dashboard' &&
                        <div className='border rounded-lg h-full flex justify-center items-center'>
                            <div className='text-center'>
                                <h1 className='-mt-40 text-secondary font-semibold text-4xl'>Welcome To Dashboard</h1>
                                <p className='mt-1 text-gl font-semibold'>Please Navigate to your favourite route form Left Side Menu Bar.</p>
                            </div>
                        </div>
                    }

                
                </div> 
                <div className="drawer-side border border-gray-200 rounded-lg shadow-lg">
                    <label htmlFor="my-drawer-2" className="drawer-overlay"></label> 
                    <ul className="menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content">
                    
                        {!admin &&
                            <>
                                <li className='mb-3'><NavLink to='/dashboard/my-orders'>My Orders</NavLink></li>
                                <li className='mb-3'><NavLink to='/dashboard/add-review'>Add A Review</NavLink></li>
                                <li className='mb-3'><NavLink to='/dashboard/my-profile'>My Profile</NavLink></li>
                            </>
                        }

                        {admin &&
                            <>
                                <li className='mb-3'><NavLink to='/dashboard/all-orders'>Manage Orders</NavLink></li>
                                <li className='mb-3'><NavLink to='/dashboard/all-products'>Manage Products</NavLink></li>
                                <li className='mb-3'><NavLink to='/dashboard/add-product'>Add Product</NavLink></li>
                                <li className='mb-3'><NavLink to='/dashboard/all-users'>Make Admin</NavLink></li>
                                <li className='mb-3'><NavLink to='/dashboard/my-profile'>My Profile</NavLink></li>
                            </>
                        }

                    </ul>
                
                </div>
            </div>
        </div>
    );
};

export default Dashboard;