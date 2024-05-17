
import { useContext, useEffect, useState } from "react";
import Swal from "sweetalert2";
import { AuthContext } from "../AuthProvider/AuthProvider";
import axios from "axios";

const Request = () => {
    const { user } = useContext(AuthContext)
    const [volunteer, setVolunteer] = useState([]);

    // useEffect(() => {
    //     axios(`http://localhost:5000/modalInfo/${user?.email}`)
    //         .then(data => setVolunteer(data.data))
    // }, [user]);

    useEffect(() => {
        axios(`http://localhost:5000/volunteer/${user?.email}`, { withCredentials: true })
            .then(res => {
                setVolunteer(res.data)
            })
    }, [user])

    const handleDelete = (id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:5000/delete/${id}`, {
                    method: 'DELETE',
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.deletedCount > 0) {
                            const updatedVolunteer = volunteer.filter(item => item._id !== id);
                            setVolunteer(updatedVolunteer);
                            Swal.fire(
                                "Deleted!",
                                "Your item has been deleted.",
                                "success"
                            );
                        } else {
                            Swal.fire(
                                "Error!",
                                "Failed to delete the item.",
                                "error"
                            );
                        }
                    })
                    .catch(error => console.error('Error deleting item:', error));
            }
        });
    };

    return (
        <div className="overflow-x-auto">
            <table className="table">
                <thead>
                    <tr>
                        <th></th>
                        <th className="text-xl font-bold">Name</th>
                        <th className="text-xl font-bold">Email</th>
                        <th className="text-xl font-bold">Location</th>
                        <th className="text-xl font-bold">Category</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody className="divide-y divide-x divide-gray-500">
                    {volunteer.map(item => (
                        <tr className="hover:shadow-lg bg-gray-200" key={item._id}>
                            <th></th>
                            <td>
                                <div className="flex items-center gap-3">
                                    <div className="avatar"></div>
                                    <div>
                                        <div className="font-bold">{item.OrganizerName}</div>
                                    </div>
                                </div>
                            </td>
                            <td>{item.email}</td>
                            <td>{item.Location}</td>
                            <td>{item.Category}</td>
                            <th>
                                <button onClick={() => handleDelete(item._id)}
                                    className="group relative inline-block text-sm font-medium text-white focus:outline-none focus:ring"
                                >
                                    <span className="absolute inset-0 border border-red-600 group-active:border-red-500"></span>
                                    <span className="block border border-red-600 bg-red-600 px-12 py-3 transition-transform active:border-red-500 active:bg-red-500 group-hover:-translate-x-1 group-hover:-translate-y-1">
                                        Cancel
                                    </span>
                                </button>
                            </th>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Request;
