import React from 'react';
import { Link } from 'react-router';

const Card = ({ info }) => {
    const { category, deadline, description, job_title, max_price, min_price, _id } = info;

    return (
        <div className="p-5 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 dark:bg-gray-900 flex flex-col justify-between">
            <Link to={`/bid/${_id}`} className="flex-1 block">
                <div className="flex items-center justify-between mb-2">
                    <span className="text-sm text-gray-500 dark:text-gray-400">{deadline}</span>
                    <span className="px-3 py-1 text-xs font-medium text-blue-800 uppercase bg-blue-100 rounded-full dark:bg-blue-300 dark:text-blue-900">
                        {category}
                    </span>
                </div>

                <h2 className="text-xl font-semibold text-gray-800 dark:text-white truncate">{job_title}</h2>
                <p className="mt-2 text-sm text-gray-600 dark:text-gray-300 line-clamp-3">{description}</p>

                <div className="mt-4 border-t pt-3 border-gray-200 dark:border-gray-700">
                    <h3 className="text-sm font-medium text-gray-700 dark:text-gray-300">Price Range</h3>
                    <div className="text-sm text-gray-800 dark:text-gray-200">
                        <p>Min: <span className="font-semibold">${min_price}</span></p>
                        <p>Max: <span className="font-semibold">${max_price}</span></p>
                    </div>
                </div>
            </Link>

            <div className="mt-4">
                <Link
                    to={`/bid/${_id}`}
                    className="inline-block w-full text-center px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-md hover:bg-blue-700 transition duration-200"
                >
                    Bid Now
                </Link>
            </div>
        </div>
    );
};

export default Card;
