import React from 'react';
import { NavLink, Outlet, useLocation } from 'react-router-dom';

const Dashboard = () => {
    const { pathname } = useLocation();

    return (
        <div className='mt-20 px-4'>
            
            <div class="drawer drawer-mobile">
                <input id="my-drawer-2" type="checkbox" class="drawer-toggle" />
                <div class="drawer-content flex flex-col px-4">
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
                <div class="drawer-side border border-gray-200 rounded-lg shadow-lg">
                    <label for="my-drawer-2" class="drawer-overlay"></label> 
                    <ul class="menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content">
                    
                        <li className='mb-3'><NavLink to='/dashboard/my-orders'>My Orders</NavLink></li>
                        <li className='mb-3'><NavLink to='/dashboard/add-review'>Add A Review</NavLink></li>
                        <li className='mb-3'><NavLink to='/dashboard/my-profile'>My Profile</NavLink></li>
                    </ul>
                
                </div>
            </div>
        </div>
    );
};

export default Dashboard;