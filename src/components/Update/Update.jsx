import { useLoaderData, useNavigate } from "react-router";
import useAuth from "../../hooks/useAuth";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useState } from "react";
import toast from "react-hot-toast";
import useAxiosSecure from "../../hooks/useAxiosSecure";

const Update = () => {
    const job = useLoaderData();
    const axiosSecure = useAxiosSecure();
    const { category, deadline, description, job_title, max_price, min_price, _id, buyer } = job;

    const [startDate, setStartDate] = useState(new Date(deadline));
    const { user } = useAuth();
    const navigate = useNavigate();

    const handleFormSubmit = async (event) => {
        event.preventDefault();
        const form = event.target;

        if (!user) {
            toast.error("You must be logged in to update a job.");
            return;
        }

        const jobId = _id;
        const job_title = form.job_title.value;
        const email = form.email.value;
        const category = form.category.value;
        const min_price = form.min_price.value;
        const max_price = form.max_price.value;
        const description = form.description.value;
        const deadline = startDate;

        const updateInfo = {
            jobId,
            job_title,
            email,
            category,
            min_price,
            max_price,
            description,
            deadline,
        };

        try {
            const { data } = await axiosSecure.put(`/updateInfo/${_id}`, updateInfo);
            console.log(data);
            toast.success("Job Data Updated Successfully!");
            navigate("/my-post-job");
        } catch (err) {
            console.error(err);
            toast.error(err.response?.data?.message || "Something went wrong!");
        }
    };

    return (
        <div className="flex justify-center items-center min-h-[calc(100vh-306px)] my-12 text-black">
            <section className="p-2 md:p-6 mx-auto bg-white rounded-md shadow-md">
                <h2 className="text-lg font-semibold text-gray-700 capitalize">Update a Job</h2>

                <form onSubmit={handleFormSubmit}>
                    <div className="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
                        <div>
                            <label className="text-gray-700" htmlFor="job_title">Job Title</label>
                            <input
                                id="job_title"
                                name="job_title"
                                type="text"
                                defaultValue={job_title}
                                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 focus:outline-none focus:ring"
                            />
                        </div>

                        <div>
                            <label className="text-gray-700" htmlFor="emailAddress">Email Address</label>
                            <input
                                id="emailAddress"
                                type="email"
                                name="email"
                                defaultValue={buyer?.email}
                                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 focus:outline-none focus:ring"
                            />
                        </div>

                        <div className="flex flex-col gap-2">
                            <label className="text-gray-700">Deadline</label>
                            <DatePicker
                                className="border p-2 rounded-md"
                                selected={startDate}
                                onChange={(date) => setStartDate(date)}
                            />
                        </div>

                        <div className="flex flex-col gap-2">
                            <label className="text-gray-700" htmlFor="category">Category</label>
                            <select
                                name="category"
                                id="category"
                                className="border p-2 rounded-md"
                                defaultValue={category}
                            >
                                <option value="Web Development">Web Development</option>
                                <option value="Graphics Design">Graphics Design</option>
                                <option value="Digital Marketing">Digital Marketing</option>
                            </select>
                        </div>

                        <div>
                            <label className="text-gray-700" htmlFor="min_price">Minimum Price</label>
                            <input
                                id="min_price"
                                name="min_price"
                                type="number"
                                defaultValue={min_price}
                                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 focus:outline-none focus:ring"
                            />
                        </div>

                        <div>
                            <label className="text-gray-700" htmlFor="max_price">Maximum Price</label>
                            <input
                                id="max_price"
                                name="max_price"
                                type="number"
                                defaultValue={max_price}
                                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 focus:outline-none focus:ring"
                            />
                        </div>
                    </div>

                    <div className="flex flex-col gap-2 mt-4">
                        <label className="text-gray-700" htmlFor="description">Description</label>
                        <textarea
                            className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 focus:outline-none focus:ring"
                            name="description"
                            id="description"
                            cols="30"
                            defaultValue={description}
                        ></textarea>
                    </div>

                    <div className="flex justify-end mt-6">
                        <button className="px-8 py-2.5 leading-5 text-white transition-colors duration-300 bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600">
                            Save
                        </button>
                    </div>
                </form>
            </section>
        </div>
    );
};

export default Update;