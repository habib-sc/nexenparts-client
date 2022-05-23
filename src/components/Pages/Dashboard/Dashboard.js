import React from 'react';
import { NavLink } from 'react-router-dom';

const Dashboard = () => {
    return (
        <div className='mt-20 px-4'>
            <div class="drawer drawer-mobile">
                <input id="my-drawer-2" type="checkbox" class="drawer-toggle" />
                <div class="drawer-content flex flex-col items-center justify-center">
                    {/* <!-- Page content here --> */}
                    <label for="my-drawer-2" class="btn btn-primary drawer-button lg:hidden">Open drawer</label>
                
                </div> 
                <div class="drawer-side border border-gray-200 rounded-lg shadow-lg">
                    <label for="my-drawer-2" class="drawer-overlay"></label> 
                    <ul class="menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content">
                    
                        <li className='mb-3'><NavLink to='/dashboard'>Sidebar Item 1</NavLink></li>
                        <li className='mb-3'><NavLink to='/dashboard'>Sidebar Item 1</NavLink></li>
                        <li className='mb-3'><NavLink to='/dashboard'>Sidebar Item 1</NavLink></li>
                    </ul>
                
                </div>
            </div>
        </div>
    );
};

export default Dashboard;