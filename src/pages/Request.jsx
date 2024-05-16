import { useEffect, useState } from "react";
import Swal from "sweetalert2";

const Request = () => {
    const [item, setItem] = useState([])
    const [control, setControl] = useState(false)

    const handleDelete = id => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        })
        fetch(`http://localhost:5000/delete/${id}`, {
            method: 'DELETE',

        })
            .then((res) => res.json())
            .then((data) => {
                // setItem(data)
                console.log(data);
                if (data.deletedCount > 0) {
                    Swal.fire({
                        title: "Canceled!",
                        text: "Your item has been deleted.",
                        icon: "success"
                    });
                    setControl(!control)
                }

            })

    }


    const [volunteer, setVolunteer] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/modalInfo')
            .then(res => res.json())
            .then(data => setVolunteer(data))
    }, [control])
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

                            </th>
                            <td>
                                <div className="flex items-center gap-3">
                                    <div className="avatar">

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
                                <button onClick={() => handleDelete(item._id)}
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