import { useEffect, useState } from "react";

const Request = () => {
    const [volunteer, setVolunteer] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/modalInfo')
            .then(res => res.json())
            .then(data => setVolunteer(data))
    }, [])
    return (
        <div>
            {/*
  Heads up! 👋

  This component comes with some `rtl` classes. Please remove them if they are not needed in your project.
*/}

            {/* <div className="overflow-x-auto">
                <table className="min-w-full divide-y-2 divide-gray-200 bg-white text-sm">
                    <thead className="ltr:text-left rtl:text-right">
                        <tr>
                            <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">Name</th>
                            <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">Date of Birth</th>
                            <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">Role</th>
                            <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">Salary</th>
                            <th className="px-4 py-2"></th>
                        </tr>
                    </thead>

                    <tbody className="divide-y divide-gray-200">
                        {
                            volunteer.map(p => <div key={p._id}>
                                <tr>
                                    <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">John Doe</td>
                                    <td className="whitespace-nowrap px-4 py-2 text-gray-700">24/05/1995</td>
                                    <td className="whitespace-nowrap px-4 py-2 text-gray-700">Web Developer</td>
                                    <td className="whitespace-nowrap px-4 py-2 text-gray-700">$120,000</td>
                                    <td className="whitespace-nowrap px-4 py-2">
                                        <a
                                            href="#"
                                            className="inline-block rounded bg-indigo-600 px-4 py-2 text-xs font-medium text-white hover:bg-indigo-700"
                                        >
                                            View
                                        </a>
                                    </td>
                                </tr>
                            </div>)
                        }




                    </tbody>
                </table>
            </div> */}

            <table className="table">
                {/* head */}
                <thead>
                    <tr>
                        <th>
                            {/* <label>
                                <input type="checkbox" className="checkbox" />
                            </label> */}
                        </th>
                        <th className="text-xl font-bold">Name</th>
                        <th className="text-xl font-bold">Email</th>
                        <th className="text-xl font-bold">Location</th>
                        <th className="text-xl font-bold">Category</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody className="divide-y divide-x divide-gray-500">
                    {/* row 1 */}
                    <tr>

                    </tr>
                    {volunteer.map((item) => (
                        <tr className="hover:shadow-lg bg-gray-200" key={item._id}>
                            <th>
                                {/* <label>
                                    <input type="checkbox" className="checkbox" />
                                </label> */}
                            </th>
                            <td>
                                <div className="flex items-center gap-3">
                                    <div className="avatar">
                                        {/* <div className="mask mask-squircle w-12 h-12">
                                            <img src={item.image} alt="Avatar Tailwind CSS Component" />
                                        </div> */}
                                    </div>
                                    <div>
                                        <div className="font-bold">{item.OrganizerName}</div>
                                    </div>
                                </div>
                            </td>
                            <td>
                                {item.OrganizerEmail}
                                <br />
                            </td>
                            <td>{item.Location
                            }</td>
                            <td>{item.Category
                            }</td>

                            <th>
                                <button
                                    className="group relative inline-block text-sm font-medium text-white focus:outline-none focus:ring"
                                    href="#"
                                >
                                    <span className="absolute inset-0 border border-red-600 group-active:border-red-500"></span>
                                    <span
                                        className="block border border-red-600 bg-red-600 px-12 py-3 transition-transform active:border-red-500 active:bg-red-500 group-hover:-translate-x-1 group-hover:-translate-y-1"
                                    >
                                        Cancel
                                    </span>
                                </button>
                            </th>

                        </tr>
                    ))}

                </tbody>
                {/* foot */}
                {/* <tfoot>
                    <tr>
                        <th></th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Items Name</th>
                        <th>Stock Status</th>
                        <th></th>
                    </tr>
                </tfoot> */}

            </table>
        </div>
    );
};

export default Request;