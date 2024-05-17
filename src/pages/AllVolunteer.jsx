

import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

const AllVolunteer = () => {

    useEffect(() => {
        document.title = 'All Volunteer'
    }, [])
    // const [show, setShow] = useState(true);
    const [volunteer, setVolunteer] = useState([]);
    const [old, setOld] = useState([]);
    const [isTableLayout, setIsTableLayout] = useState(false);

    useEffect(() => {
        fetch('https://volunteer-server-one.vercel.app/volunteerInfo')
            .then(res => res.json())
            .then(data => setOld(data));
    }, []);

    const handleAll = (filter) => {
        if (filter === 'All') {
            setVolunteer(old);
        }
    }

    const handleSearch = (e) => {
        e.preventDefault();
        const foodName = e.target.search.value.toLowerCase();
        const result = old.filter(food => food.PostTitle.toLowerCase() === foodName);
        setVolunteer(result);
    }

    const toggleLayout = () => {
        setIsTableLayout(prevLayout => !prevLayout);
    };

    const CardLayout = () => (
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3 mt-6">
            {volunteer.length > 0 ? volunteer.map(p => (
                <div key={p._id}>
                    <article className="rounded-xl border-2 border-gray-100 shadow-xl bg-white">
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
                                        <a href="#" className="font-medium underline hover:text-gray-700"> {p.OrganizerName} </a>
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
                    </article>
                </div>
            )) : (
                <div className="col-span-3 text-center mt-8">
                    <h2 className="text-2xl font-bold">No Volunteer Requests Found</h2>
                    <p>You have not added any volunteer requests yet.</p>
                </div>
            )}
        </div>
    );

    const TableLayout = () => (
        <div className="overflow-x-auto">
            {volunteer.length > 0 ? (
                <table className="min-w-full divide-y divide-gray-200">
                    <thead>
                        <tr>
                            <th className="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
                            <th className="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Email</th>
                            <th className="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Location</th>
                            <th className="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">PostTitle</th>
                            <th className="px-6 py-3 bg-gray-50"></th>
                        </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                        {volunteer.map(item => (
                            <tr key={item._id}>
                                <td className="px-6 py-4 whitespace-nowrap">{item.OrganizerName}</td>
                                <td className="px-6 py-4 whitespace-nowrap">{item.email}</td>
                                <td className="px-6 py-4 whitespace-nowrap">{item.Location}</td>
                                <td className="px-6 py-4 whitespace-nowrap">{item.PostTitle}</td>
                                <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                                    <Link to={`/volunteerInfo/${item._id}`} className="text-indigo-600 hover:text-indigo-900">
                                        View Details
                                    </Link>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            ) : (
                <div className="text-center mt-8">
                    <h2 className="text-2xl font-bold">No Volunteer Requests Found</h2>
                    <p>You haven not added any volunteer requests yet.</p>
                </div>
            )}
        </div>
    );

    return (
        <div>
            <div className="flex justify-around items-center flex-col">
                <form onSubmit={handleSearch} className="max-w-md mx-auto">
                    <label className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
                    <div className="relative">
                        <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                            <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                <path stroke="currentColor" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                            </svg>
                        </div>
                        <input name="search" type="text" id="search" className="block w-full p-4 lg:mr-[100px] ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search Mockups, Logos..." required />
                        <button type="submit" className="text-white absolute end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Search</button>
                    </div>
                </form>
                <div>
                    <div className="dropdown dropdown-bottom">
                        <div onClick={() => handleAll('All')} tabIndex={0} role="button" className="btn m-1 mt-3 btn-primary">Click and See all items</div>
                        <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52"></ul>
                    </div>
                </div>
            </div>
            <div className="flex justify-end my-4">
                <button onClick={toggleLayout} className="px-4 py-2 bg-blue-500 text-white rounded">
                    Change Layout
                </button>
            </div>
            {isTableLayout ? <TableLayout /> : <CardLayout />}
        </div>
    );
};

export default AllVolunteer;
