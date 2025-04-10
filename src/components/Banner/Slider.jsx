import React from 'react';
import { Link } from 'react-router';

const Slider = ({ image, text }) => {

    return (
        <header><div className="w-full bg-center bg-cover h-[38rem]" style={{ backgroundImage: `url(${image})` }}>
            <div className="flex items-center justify-center w-full h-full bg-gray-900/40">
                <div className="text-center">
                    <h1 className="text-3xl font-semibold text-white lg:text-4xl mb-3">{text}</h1>
                    <Link to='/' className="w-full px-5 py-2 mt-4 text-sm font-medium text-white capitalize transition-colors duration-300 transform bg-blue-600 rounded-md lg:w-auto hover:bg-blue-500 focus:outline-none focus:bg-blue-500">
                        Add Job
                    </Link>
                </div>
            </div>
        </div>
        </header>
    );
};

export default Slider;
