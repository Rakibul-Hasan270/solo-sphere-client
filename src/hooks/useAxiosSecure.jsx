import axios from 'axios';
import React from 'react';
import useAuth from './useAuth';
import { useNavigate } from 'react-router';

const axiosSecure = axios.create({
    baseURL: import.meta.env.VITE_API_URL,
    withCredentials: true
})

const useAxiosSecure = () => {
    const { logOut } = useAuth();
    const navigate = useNavigate();

    axiosSecure.interceptors.response.use(res => {
        console.log(res);
        return res;
    },
        async error => {
            console.log(error);
            if (error.status === 401 || error.status === 403) {
                await logOut();
                navigate('/signIn');
            }
            return Promise.reject(error);
        })
    return axiosSecure;
};

export default useAxiosSecure;