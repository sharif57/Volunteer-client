import { Link, useLoaderData } from "react-router-dom";

import { useEffect, useState } from "react";

const AllVolunteer = () => {
    const items = useLoaderData()
    const [volunteer, setVolunteer] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/volunteerInfo')
            .then(res => res.json())
            .then(data => setVolunteer(data))
    }, [])

    
    return (

        <div>

            <form className="max-w-md mx-auto">
                <label for="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
                <div className="relative">
                    <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                        <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                        </svg>
                    </div>
                    <input type="search-field" id="default-search" className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search Mockups, Logos..." required />
                    <button  type="submit" className="text-white absolute end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Search</button>
                </div>
            </form>

            <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-2 mt-6">

                {
                    volunteer.map(p => <div key={p._id}> <article className="rounded-xl border-2 border-gray-100 shadow-xl bg-white">
                        <div className="flex items-start gap-4 p-4 sm:p-6 lg:p-8">
                            <a href="#" className="block shrink-0">
                                <img
                                    alt=""
                                    src={p.Thumbnail}
                                    className="size-14 rounded-lg object-cover"
                                />
                            </a>

                            <div>
                                <h3 className="font-medium sm:text-lg">
                                    <a href="#" className="hover:underline"> {p.Category} </a>
                                </h3>
                                <h3 className="font-medium sm:text-lg">
                                    <a href="#" className="hover:underline"> {p.PostTitle} </a>
                                </h3>

                                <p className="line-clamp-2 text-sm text-gray-700">
                                    {p.Description}
                                </p>

                                <div className="mt-2 sm:flex sm:items-center sm:gap-2">
                                    <div className="flex items-center gap-1 text-gray-500">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="h-4 w-4"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                            strokeWidth="2"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z"
                                            />
                                        </svg>

                                        <p className="text-xs">{p.Deadline}</p>
                                    </div>

                                    <span className="hidden sm:block" aria-hidden="true">&middot;</span>

                                    <p className="hidden sm:block sm:text-xs sm:text-gray-500">
                                        Posted by
                                        <a href="#" className="font-medium underline hover:text-gray-700"> John </a>
                                    </p>

                                </div>
                            </div>
                        </div>

                        <div className="flex justify-between">
                            <Link to={`/volunteerInfo/${p._id}`}
                                className="group inline-block rounded bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 p-[2px] hover:text-white focus:outline-none focus:ring active:text-opacity-75"
                                href="#"
                            >
                                <span className="block rounded-sm bg-white px-8 py-3 text-sm font-medium group-hover:bg-transparent">
                                    View Details
                                </span>
                            </Link>
                            <strong
                                className="-mb-[2px] -me-[2px] inline-flex items-center gap-1 rounded-ee-xl rounded-ss-xl bg-green-600 px-3 py-1.5 text-white"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-4 w-4"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
                                    />
                                </svg>

                                <span className="text-[10px] font-medium sm:text-xs">{p.Location}</span>
                            </strong>
                        </div>
                    </article></div>)
                }

            </div>
        </div>
    );
};

export default AllVolunteer;