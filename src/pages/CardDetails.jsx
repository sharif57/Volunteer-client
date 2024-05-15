import { FaMapLocationDot } from "react-icons/fa6";
import { IoIosTime } from "react-icons/io";
import { MdVolunteerActivism } from "react-icons/md";
import { useLoaderData } from "react-router-dom";

const CardDetails = () => {
    const items = useLoaderData()
    return (
        <div>
            <section>
                <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
                    <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
                        <div className="relative h-64 overflow-hidden rounded-lg sm:h-80 lg:order-last lg:h-full">
                            <img
                                alt=""
                                src={items.Thumbnail}
                                className="absolute inset-0 h-full w-full object-cover"
                            />
                        </div>

                        <div className="lg:py-24">
                            <h1 className="text-xl font-bold ">{items.Category}</h1>
                            <h2 className="text-3xl font-bold sm:text-4xl">{items.PostTitle}</h2>

                            <p className="mt-4 text-gray-600">
                                {items.Description}
                            </p>
                            <div className="flex gap-6 items-center mt-5">
                                <p className="flex justify-center items-center gap-2"><FaMapLocationDot />
                                    {items.Location}</p>
                                <p className="flex justify-center items-center gap-2"><IoIosTime />
                                    {items.Deadline}</p>
                                <p className="flex justify-center items-center gap-2"><MdVolunteerActivism />
                                    {items.VolunteersNeeded}</p>
                            </div>

                            <a
                                href="#"
                                className="mt-8 inline-block rounded bg-indigo-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-indigo-700 focus:outline-none focus:ring focus:ring-yellow-400"
                            >
                                Be a Volunteer
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default CardDetails;