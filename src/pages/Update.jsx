import { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const Update = () => {
    const data = useLoaderData()
    const { user } = useContext(AuthContext)
    const handleUpdate = (e) => {
        e.preventDefault();
        const form = e.target;

        const Thumbnail = form.Thumbnail.value;
        const PostTitle = form.PostTitle.value;
        const Description = form.Description.value;
        const Category = form.Category.value;
        const Location = form.Location.value;
        const VolunteersNeeded = form.VolunteersNeeded.value;
        const Deadline = form.Deadline.value;
        const OrganizerName = form.OrganizerName.value;
        const email = user.email;

        const newUsers = { Thumbnail, PostTitle, Description, Category, Location, VolunteersNeeded, Deadline, email, OrganizerName }
        console.log(newUsers);

        fetch(`http://localhost:5000/volunteerInfo/${data._id}`, {
            method: 'PUT',
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(newUsers)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.modifiedCount > 0) {
                    Swal.fire({
                        title: 'Success!',
                        text: 'Items updated Successfully',
                        icon: 'success',
                        confirmButtonText: 'Cool'
                    })
                }
            })

    }
    return (
        <div>
            <form onSubmit={handleUpdate} action="#" className="mt-8 grid grid-cols-6 gap-6">
                <div className="col-span-6 sm:col-span-3">
                    <label htmlFor="FirstName" className="block text-sm font-medium text-gray-700">
                        Thumbnail
                    </label>

                    <input
                        type="text"

                        name="Thumbnail"
                        className="mt-1 w-full p-4 border-black border rounded-md  bg-white text-sm text-gray-700 shadow-sm"
                        defaultValue={data.Thumbnail}
                    />
                </div>
                <div className="col-span-6 sm:col-span-3">
                    <label htmlFor="FirstName" className="block text-sm font-medium text-gray-700">
                        Post Title
                    </label>

                    <input
                        type="text"
                        name="PostTitle"
                        className="mt-1 w-full p-4 border-black border rounded-md bg-white text-sm text-gray-700 shadow-sm"
                        defaultValue={data.PostTitle}
                    />
                </div>


                <div className="col-span-6">
                    <label className="block text-sm font-medium text-gray-700"> Description</label>

                    <input
                        type="text"
                        name="Description"
                        className="mt-1 w-full p-4 border border-black rounded-md  bg-white text-sm text-gray-700 shadow-sm"
                        defaultValue={data.Description}
                    />
                </div>

                <div className="col-span-6 sm:col-span-3">
                    <label className="block text-sm font-medium text-gray-700"> Category </label>

                    <input
                        type="text"
                        name="Category"
                        className="mt-1 w-full p-4 border border-black rounded-md  bg-white text-sm text-gray-700 shadow-sm"
                        defaultValue={data.Category}
                    />
                </div>
                <div className="col-span-6 sm:col-span-3">
                    <label className="block text-sm font-medium text-gray-700"> Location </label>

                    <input
                        type="text"
                        name="Location"
                        className="mt-1 w-full p-4 border border-black rounded-md  bg-white text-sm text-gray-700 shadow-sm"
                        defaultValue={data.Location}
                    />
                </div>

                <div className="col-span-6 sm:col-span-3">
                    <label className="block text-sm font-medium text-gray-700">
                        Volunteers Needed
                    </label>

                    <input
                        type="number"
                        name="VolunteersNeeded"
                        className="mt-1 w-full border border-black p-4 rounded-md  bg-white text-sm text-gray-700 shadow-sm"
                        defaultValue={data.VolunteersNeeded}
                    />
                </div>
                <div className="col-span-6 sm:col-span-3">
                    <label className="block text-sm font-medium text-gray-700">
                        Deadline
                    </label>

                    <input
                        type="date"
                        name="Deadline"
                        className="mt-1 w-full border border-black p-4 rounded-md  bg-white text-sm text-gray-700 shadow-sm"
                        defaultValue={data.Deadline}
                    />
                </div>
                <div className="col-span-6 sm:col-span-3 disabled:first-line:">
                    <label className="block text-sm font-medium text-gray-700">
                        OrganizerName
                    </label>

                    <input
                        type="text"

                        name="OrganizerName"
                        className="mt-1 w-full border border-black p-4 rounded-md  bg-white text-sm text-gray-700 shadow-sm"
                        defaultValue={user?.
                            displayName}
                    />
                </div>
                <div className="col-span-6 sm:col-span-3 disabled:first-line:">
                    <label className="block text-sm font-medium text-gray-700">
                        Email
                    </label>

                    <input
                        type="text"
                        name="email"
                        className="mt-1 w-full border border-black p-4 rounded-md  bg-white text-sm text-gray-700 shadow-sm"
                        defaultValue={user?.email}
                    />
                </div>



                <div className="col-span-6 sm:flex sm:items-center sm:gap-4">
                    <button
                        className="inline-block shrink-0 rounded-md border border-blue-600 bg-blue-600 px-12 w-full py-3 text-sm font-medium text-white transition hover:bg-transparent hover:text-blue-600 focus:outline-none focus:ring active:text-blue-500"
                    >
                        Update Post
                    </button>


                </div>
            </form>
        </div>
    );
};

export default Update;