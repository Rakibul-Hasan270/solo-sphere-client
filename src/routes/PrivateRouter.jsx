import React from 'react';
import useAuth from '../hooks/useAuth';
import { Navigate, useLocation } from 'react-router';
import toast from 'react-hot-toast';

const PrivateRouter = ({ children }) => {
    const { user, loading } = useAuth();
    const location = useLocation();

    if (loading) return <p className='flex justify-center mt-20'><span className="loading loading-bars loading-xl"></span></p>
    if (user?.email) {
        return children
    } else {
        toast.error('please login');
        return <Navigate state={location.pathname} to='/signIn'>
        </Navigate>
    }
};

export default PrivateRouter;