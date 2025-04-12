import React from 'react';
import { Link } from 'react-router';

const Card = ({ info }) => {
    const { category, deadline, description, job_title, max_price, min_price, _id } = info;

    return (
        <Link to={`/jobDetail/${_id}`} className="p-5 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 dark:bg-gray-900 flex flex-col justify-between">
            <div className="flex-1 block">
                <div className="flex items-center justify-between mb-2">
                    <span className="text-sm text-gray-500 dark:text-gray-400"> {new Date(deadline).toLocaleDateString()}</span>
                    <span className="px-3 py-1 text-xs font-medium text-blue-800 uppercase bg-blue-100 rounded-full dark:bg-blue-300 dark:text-blue-900">
                        {category}
                    </span>
                </div>

                <h2 className="text-xl font-semibold text-gray-800 dark:text-white truncate">{job_title}</h2>
                <p className="mt-2 text-sm text-gray-600 dark:text-gray-300 line-clamp-3">{description}</p>

                <div className="mt-4 border-t pt-3 border-gray-200 dark:border-gray-700">
                    <div className="text-sm text-gray-800 dark:text-gray-200">
                        <p>Range: <span className="font-semibold">${min_price}-${max_price}</span></p>
                    </div>
                </div>
            </div>

            <div className="mt-4">
                <button className="inline-block w-full text-center px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-md hover:bg-blue-700 transition duration-200">Bid Now</button>
            </div>
        </Link>
    );
};

export default Card;
