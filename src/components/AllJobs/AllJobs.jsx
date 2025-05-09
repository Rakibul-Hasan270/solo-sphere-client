import { useQuery } from "@tanstack/react-query"
import axios from "axios"
import Card from "../Card/Card"
import { useEffect, useState } from "react"

const AllJobs = () => {
    const [count, setCount] = useState(0);
    const [itemPerPage, setItemPerPage] = useState(5);
    const [currentPage, setCurrentPage] = useState(0);

    // const numberOfPages = Math.ceil(count / itemPerPage);
    // const pages = [...Array(numberOfPages).keys()].map(e => e + 1);
    // console.log(pages, count);

    const numberOfPages = Math.ceil(count / itemPerPage || 1); // fallback 1 page
    const pages = [...Array(isNaN(numberOfPages) ? 1 : numberOfPages).keys()]; //.map(e => e + 1)

    const handelOnChange = event => {
        const value = parseInt(event.target.value);
        setItemPerPage(value);
        setCurrentPage(0);
    }
    const handelPrevPage = () => {
        if (currentPage > 0) {
            setCurrentPage(currentPage - 1);
        }
    }
    const handelNextPage = () => {
        if (currentPage < pages.length - 1) {
            setCurrentPage(currentPage + 1);
        }
    }

    useEffect(() => {
        const getCount = async () => {
            const { data } = await axios.get(`${import.meta.env.VITE_API_URL}/jobs-count`);
            setCount(data.count)
        }
        getCount();
    }, [])

    const getData = async () => {
        const { data } = await axios.get(`${import.meta.env.VITE_API_URL}/all-jobs?page=${currentPage}&size=${itemPerPage}`);
        return data;
    }
    const { data, isFetching, isPreviousData } = useQuery({
        queryKey: ['all_jobs', currentPage, itemPerPage],
        queryFn: () => getData(),
        keepPreviousData: true,
        staleTime: 1000 * 30
    })
    const jobs = data ?? [];

    if (!count) return <p className="flex justify-center items-center ">Loading...</p>
    if (isFetching) return <p>Fetching new page...</p>
    console.log('current page:', currentPage, 'count: ', count)
    return (
        <div className='container px-6 py-10 mx-auto min-h-[calc(100vh-306px)] flex flex-col justify-between'>
            <div>
                <div className='flex flex-col md:flex-row justify-center items-center gap-5 '>
                    <div>
                        <select
                            name='category'
                            id='category'
                            className='border p-4 rounded-lg'
                        >
                            <option value=''>Filter By Category</option>
                            <option value='Web Development'>Web Development</option>
                            <option value='Graphics Design'>Graphics Design</option>
                            <option value='Digital Marketing'>Digital Marketing</option>
                        </select>
                    </div>

                    <form>
                        <div className='flex p-1 overflow-hidden border rounded-lg    focus-within:ring focus-within:ring-opacity-40 focus-within:border-blue-400 focus-within:ring-blue-300'>
                            <input
                                className='px-6 py-2 text-gray-700 placeholder-gray-500 bg-white outline-none focus:placeholder-transparent'
                                type='text'
                                name='search'
                                placeholder='Enter Job Title'
                                aria-label='Enter Job Title'
                            />

                            <button className='px-1 md:px-4 py-3 text-sm font-medium tracking-wider text-gray-100 uppercase transition-colors duration-300 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:bg-gray-600 focus:outline-none'>
                                Search
                            </button>
                        </div>
                    </form>
                    <div>
                        <select
                            name='category'
                            id='category'
                            className='border p-4 rounded-md'
                        >
                            <option value=''>Sort By Deadline</option>
                            <option value='dsc'>Descending Order</option>
                            <option value='asc'>Ascending Order</option>
                        </select>
                    </div>
                    <button className='btn'>Reset</button>
                </div>

                {/* Loader only when fetching new data */}
                {isFetching && isPreviousData && (
                    <p className="text-center mt-8">Loading new jobs...</p>
                )}

                <div className='grid grid-cols-1 gap-8 mt-8 xl:mt-16 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
                    {
                        jobs.map(job => <Card key={job._id} info={job}></Card>)
                    }
                </div>
            </div>

            <div className='flex justify-center mt-12'>
                <button onClick={handelPrevPage} className='px-4 py-2 mx-1 text-gray-700 disabled:text-gray-500 capitalize bg-gray-200 rounded-md disabled:cursor-not-allowed disabled:hover:bg-gray-200 disabled:hover:text-gray-500 hover:bg-blue-500  hover:text-white'>
                    <div className='flex items-center -mx-1'>
                        <svg
                            xmlns='http://www.w3.org/2000/svg'
                            className='w-6 h-6 mx-1 rtl:-scale-x-100'
                            fill='none'
                            viewBox='0 0 24 24'
                            stroke='currentColor'
                        >
                            <path
                                strokeLinecap='round'
                                strokeLinejoin='round'
                                strokeWidth='2'
                                d='M7 16l-4-4m0 0l4-4m-4 4h18'
                            />
                        </svg>

                        <span className='mx-1'>previous</span>
                    </div>
                </button>

                {pages.map(btnNum => (
                    <button
                        onClick={() => setCurrentPage(btnNum)}
                        key={btnNum}
                        className={`hidden px-4 py-2 mx-1 transition-colors duration-300 transform  rounded-md sm:inline hover:bg-blue-500  hover:text-white ${currentPage === btnNum ? 'bg-blue-500' : undefined}`}
                    >
                        {btnNum}
                    </button>
                ))}

                <select className="px-4 py-2 mx-1 text-gray-700 transition-colors duration-300 transform bg-gray-200 rounded-md hover:bg-blue-500 disabled:hover:bg-gray-200 disabled:hover:text-gray-500 hover:text-white disabled:cursor-not-allowed disabled:text-gray-500 border" value={itemPerPage} onChange={handelOnChange} name="" id="">
                    <option value="2">2</option>
                    <option value="5">5</option>
                    <option value="10">10</option>
                </select>

                <button onClick={handelNextPage} className='px-4 py-2 mx-1 text-gray-700 transition-colors duration-300 transform bg-gray-200 rounded-md hover:bg-blue-500 disabled:hover:bg-gray-200 disabled:hover:text-gray-500 hover:text-white disabled:cursor-not-allowed disabled:text-gray-500'>
                    <div className='flex items-center -mx-1'>
                        <span className='mx-1'>Next</span>

                        <svg
                            xmlns='http://www.w3.org/2000/svg'
                            className='w-6 h-6 mx-1 rtl:-scale-x-100'
                            fill='none'
                            viewBox='0 0 24 24'
                            stroke='currentColor'
                        >
                            <path
                                strokeLinecap='round'
                                strokeLinejoin='round'
                                strokeWidth='2'
                                d='M17 8l4 4m0 0l-4 4m4-4H3'
                            />
                        </svg>
                    </div>
                </button>
            </div>
        </div>
    )
}

export default AllJobs