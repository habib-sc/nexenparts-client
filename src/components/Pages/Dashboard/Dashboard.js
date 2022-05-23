import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';

const Dashboard = () => {
    return (
        <div className='mt-20 px-4'>
            <div class="drawer drawer-mobile">
                <input id="my-drawer-2" type="checkbox" class="drawer-toggle" />
                <div class="drawer-content flex flex-col items-center justify-center">
                    {/* <!-- Page content here --> */}
                    
                    <Outlet/>

                    <label for="my-drawer-2" class="btn btn-primary drawer-button lg:hidden">Open drawer</label>
                
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