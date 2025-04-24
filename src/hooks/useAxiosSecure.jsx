import axios from 'axios';
import React from 'react';
import useAuth from './useAuth';

const axiosSecure = axios.create({
    baseURL: import.meta.env.VITE_API_URL,
    withCredentials: true
})

const useAxiosSecure = () => {
    const { logOut } = useAuth();
    axiosSecure.interceptors.response.use(res => {
        return res;
    },
        error => {
            if (error.status === 401 || error.status === 403) {
                logOut();
            }
            console.log(error)
            return Promise.reject(error);
        })
    return axiosSecure;
};

export default useAxiosSecure;