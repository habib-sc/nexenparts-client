import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, NavLink, useLocation } from 'react-router-dom';
import auth from '../../../firebase.init';

const Header = () => {

    const [user, loading, error] = useAuthState(auth);
    const { pathname } = useLocation();

    const logOut = () => {
        signOut(auth);
        localStorage.removeItem('accessToken');
    };

    const menuItems = <>
        <li className='ml-3'><NavLink to='/'>Home</NavLink></li>
        <li className='ml-3'><NavLink to='/about'>About</NavLink></li>  
        <li className='ml-3'><NavLink to='/contact'>Contact</NavLink></li>
        {user &&
            <li className='ml-3'><NavLink to='/dashboard'>Dashboard</NavLink></li>  
        }
        {user?
            <li className='ml-3'><button onClick={logOut} className='btn btn-outline'><NavLink to='/'>Logout</NavLink></button></li>
            :
            <>
                <li className='ml-3'><NavLink to='/login'>Login</NavLink></li>  
                <li className='ml-3'><NavLink to='/register'>Register</NavLink></li>
            </>
        }
    </>

    return (
        <header  className='bg-base-100 fixed top-0 w-full z-40 shadow border border-b-gray-100'>
            <div className="container mx-auto navbar px-4">
                <div className="navbar-start">
                    <div className="dropdown border rounded-lg mr-2">
                        <label tabIndex="0" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex="0" className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            {menuItems}
                        </ul>
                    </div>
                    <Link to='/' className='btn btn-ghost normal-case text-xl'>Nexen Car Parts.</Link>
                </div>
               <div className='navbar-end'>
                    <div className="hidden lg:flex">
                        <ul className="menu menu-horizontal p-0">
                            {menuItems}
                        </ul>
                    </div>
                    {pathname.includes("dashboard") &&
                        <label for="my-drawer-2" class="btn btn-outline border-gray-300 drawer-button lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>}
               </div>

            </div>
        </header>               


    );
};

export default Header;