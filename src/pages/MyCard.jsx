import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import axios from "axios";

const MyCard = () => {
    const { user } = useContext(AuthContext)
    const [item, setItem] = useState([])
    useEffect(() => {
        const getData = async () => {
            const { data } = await axios(`http://localhost:5000/volunteer/${user?.email}`)
            setItem(data)
        }
        getData()
    }, [user])

    console.log(item);
    return (
        <div>
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
                        <th className="text-xl font-bold">Post Title</th>
                        <th className="text-xl font-bold">Location</th>
                        <th className="text-xl font-bold">Category</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody className="divide-y divide-x divide-gray-500">
                    {/* row 1 */}
                    <tr>

                    </tr>
                    {item.map((p) => (
                        <tr className="hover:shadow-lg bg-gray-200" key={p._id}>
                            <th>

                            </th>
                            <td>
                                <div className="flex items-center gap-3">
                                    <div className="avatar">

                                    </div>
                                    <div>
                                        <div className="font-bold">{p.OrganizerName}</div>
                                    </div>
                                </div>
                            </td>
                            <td>
                                {p.PostTitle}
                                <br />
                            </td>
                            <td>{p.Location
                            }</td>
                            <td>{p.Category
                            }</td>

                            <th className="flex flex-row gap-4">
                                <button
                                    className="group relative inline-block text-sm font-medium text-white focus:outline-none focus:ring"
                                    href="#"
                                >
                                    <span className="absolute inset-0 border border-red-600 group-active:border-red-500"></span>
                                    <span
                                        className="block border border-red-600 bg-red-600 px-12 py-3 transition-transform active:border-red-500 active:bg-red-500 group-hover:-translate-x-1 group-hover:-translate-y-1"
                                    >
                                        Update
                                    </span>
                                </button>
                                <button
                                    className="group relative inline-block text-sm font-medium text-white focus:outline-none focus:ring"
                                    href="#"
                                >
                                    <span className="absolute inset-0 border border-red-600 group-active:border-red-500"></span>
                                    <span
                                        className="block border border-red-600 bg-red-600 px-12 py-3 transition-transform active:border-red-500 active:bg-red-500 group-hover:-translate-x-1 group-hover:-translate-y-1"
                                    >
                                        Delete
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

export default MyCard;