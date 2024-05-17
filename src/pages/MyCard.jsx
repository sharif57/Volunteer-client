import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import axios from "axios";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";

const MyCard = () => {

    const [items, setItems] = useState([])
    



    const { user } = useContext(AuthContext)
    const [item, setItem] = useState([])
    useEffect(() => {
         axios(`http://localhost:5000/volunteer/${user?.email}`,{withCredentials: true})
         .then(res =>{
            setItem(res.data)
         })
    }, [user])

    console.log(item);

    const handleDelete = _id => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        })
            .then((result) => {
                if (result.isConfirmed) {
                    fetch(`http://localhost:5000/delete/${_id}`, {
                        method: 'DELETE'
                    })
                        .then(res => res.json())
                        .then(data => {
                            if (data.deletedCount > 0) {

                                Swal.fire({
                                    title: "Deleted!",
                                    text: "Your item has been deleted.",
                                    icon: "success"
                                });

                                const remaining = item.filter(i => i._id !== _id);
                                setItem(remaining)
                                // console.log('delete');
                                // setSort(remaining)
                            }
                        })
                }
            })

    }
    return (
        <div className="overflow-x-auto">
            <table className="table ">
                {/* head */}
                <thead>
                    <tr>
                        <th>

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
                                <Link to={`/update/${p._id}`}
                                    className="group relative inline-block text-sm font-medium text-white focus:outline-none focus:ring"

                                >
                                    <span className="absolute inset-0 border border-red-600 group-active:border-red-500"></span>
                                    <span
                                        className="block border border-red-600 bg-red-600 px-12 py-3 transition-transform active:border-red-500 active:bg-red-500 group-hover:-translate-x-1 group-hover:-translate-y-1"
                                    >
                                        Update
                                    </span>
                                </Link>

                                <button onClick={() => handleDelete(p._id)}
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