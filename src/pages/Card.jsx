import { useEffect, useState } from "react";
import { Link } from "react-router-dom";


const Card = () => {
    const [volunteer, setVolunteer] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/volunteerInfo')
            .then(res => res.json())
            .then(data => setVolunteer(data))
    }, [])
    return (
        <div >
            <div className="w-1/2 mx-auto mt-16 text-center">
                <h1 className="lg:text-5xl text-2xl font-bold ">Volunteer Needs Now</h1>
                <p className="mt-7">Assist healthcare professionals in providing essential medical care to those in need. No medical experience required; training provided.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-16 gap-6">
                {
                    volunteer.slice(0, 6).map(v => <div key={v._id} >


                        <article className="overflow-hidden rounded-lg border border-gray-100 bg-white shadow-lg">
                            <img
                                alt=""
                                src={v.Thumbnail}
                                className="h-56 w-full object-cover"
                            />

                            <div className="p-4 sm:p-6">
                                <p className="text-primary underline">{v.Deadline}</p>
                                <a href="#">
                                    <h3 className="text-lg font-medium text-gray-900">
                                        {v.PostTitle}
                                    </h3>
                                </a>

                                <p className="mt-2 line-clamp-3 text-sm/relaxed text-gray-500">
                                    {v.Category}
                                </p>

                                <Link to={`/volunteerInfo/${v._id}`} href="#" className="group mt-4 inline-flex items-center gap-1 text-sm font-medium text-blue-600">
                                    Find out more

                                    <span aria-hidden="true" className="block transition-all group-hover:ms-0.5 rtl:rotate-180">
                                        &rarr;
                                    </span>
                                </Link>
                            </div>
                        </article>
                    </div>)
                }

                {/* <div className="w-1/2 text-center mx-auto ">
                    <button
                        className="group  flex items-center justify-between gap-4 rounded-lg border border-indigo-600 bg-indigo-600 px-5 py-3 transition-colors hover:bg-transparent focus:outline-none focus:ring"
                        href="#"
                    >
                        <span
                            className="font-medium text-white transition-colors group-hover:text-indigo-600 group-active:text-indigo-500"
                        >
                            Find out more
                        </span>

                        <span
                            className="shrink-0 rounded-full border border-current bg-white p-2 text-indigo-600 group-active:text-indigo-500"
                        >
                            <svg
                                className="size-5 rtl:rotate-180"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                                />
                            </svg>
                        </span>

                    </button>
                </div> */}
                <div className="text-center w-1/2 mx-auto">
                    <Link to={'/allVolunteer'}
                        className="inline-flex items-center gap-2 rounded border border-indigo-600 bg-indigo-600 px-8 py-3 text-white hover:bg-transparent hover:text-indigo-600 focus:outline-none focus:ring active:text-indigo-500"
                        href="#"
                    >
                        <span className="text-sm font-medium"> See More.. </span>

                        <svg
                            className="size-5 rtl:rotate-180"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M17 8l4 4m0 0l-4 4m4-4H3"
                            />
                        </svg>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Card;