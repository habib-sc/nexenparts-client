import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, NavLink } from 'react-router-dom';
import auth from '../../../firebase.init';

const Header = () => {

    const [user, loading, error] = useAuthState(auth);

    const logOut = () => {
        signOut(auth);
    };

    return (
        <div className='bg-base-100 fixed top-0 w-full z-40 shadow border border-b-gray-100'>
            <div class="container mx-auto px-4 navbar">
                <div class="flex-1">
                    <Link to='/' className='btn btn-ghost normal-case text-xl'>Nexen Car Parts.</Link>
                </div>
                <div class="flex-none">
                    <ul class="menu menu-horizontal p-0">
                        <li className='ml-3'><NavLink to='/'>Home</NavLink></li>
                        <li className='ml-3'><NavLink to='/about'>About</NavLink></li>  
                        <li className='ml-3'><NavLink to='/contact'>Contact</NavLink></li>
                        {user?
                            <li className='ml-3'><button onClick={logOut} className='btn btn-outline'><NavLink to='/'>Logout</NavLink></button></li>
                            :
                            <>
                                <li className='ml-3'><NavLink to='/login'>Login</NavLink></li>  
                                <li className='ml-3'><NavLink to='/register'>Register</NavLink></li>
                            </>
                        }  
                          
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Header;