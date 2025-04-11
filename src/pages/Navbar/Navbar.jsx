import React from 'react';
import logo from '../../assets/images/logo.png'
import { Link, NavLink } from 'react-router';
import useAuth from '../../hooks/useAuth';

const Navbar = () => {

    const { logOut } = useAuth();

    const links = <div className='space-x-10'>
        <NavLink to='/'>Home</NavLink>
        <NavLink to='/signIn'>Login</NavLink>
    </div>
    return (
        <div className="navbar bg-base-100 shadow-sm">
            <Link to='/' className="flex-1 flex items-center">
                <img className="btn btn-ghost text-xl" src={logo} alt="" />
                <p className='text-2xl'>Solo Sphere</p>
            </Link>
            <div className='mr-10'>
                {links}
            </div>
            <div className="flex-none">
                <div className="dropdown dropdown-end">
                    <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                        <div className="w-10 rounded-full">
                            <img
                                alt="Tailwind CSS Navbar component"
                                src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
                        </div>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                        <li> <Link to='/add-job'>Add Job</Link></li>
                        <li> <Link to='/my-post-job'>My posted Job</Link></li>
                        <li> <Link to='/my-bids'>My Bids</Link></li>
                        <li> <Link to='/bid-request'>Bid Request</Link></li>
                        <li> <Link to='/' onClick={logOut}>Log Out</Link></li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Navbar;