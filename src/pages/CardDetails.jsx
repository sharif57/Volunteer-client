import { FaMapLocationDot } from "react-icons/fa6";
import { IoIosTime } from "react-icons/io";
import { MdVolunteerActivism } from "react-icons/md";
import { Link, useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const CardDetails = () => {
    const items = useLoaderData()
    const handleAdd = (e) => {
        const form = e.target;

        const Thumbnail = form.Thumbnail.value;
        const PostTitle = form.PostTitle.value;
        const Description = form.Description.value;
        const Category = form.Category.value;
        const Location = form.Location.value;
        const VolunteersNeeded = form.VolunteersNeeded.value;
        const Deadline = form.Deadline.value;
        const OrganizerName = form.OrganizerName.value;
        const OrganizerEmail = form.OrganizerEmail.value;
        const Suggestion = form.Suggestion.value;

        const newUsers = { Thumbnail, PostTitle, Description, Category, Location, VolunteersNeeded, Deadline, OrganizerEmail, OrganizerName, Suggestion }
        console.log(newUsers);

        // server data send
        fetch('http://localhost:5000/modalInfo', {
            method: 'POST',
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(newUsers)
        })

            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.insertedId) {
                    Swal.fire({
                        title: 'Success!',
                        text: 'User Added Successfully',
                        icon: 'success',
                        confirmButtonText: 'Cool'
                    })
                }
            })
    }
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

                            <Link to={`/volunteerInfo/${items._id}`}

                            // className="mt-8 inline-block rounded bg-indigo-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-indigo-700 focus:outline-none focus:ring focus:ring-yellow-400"
                            >
                                {/* Be a Volunteer */}

                                {/* Open the modal using document.getElementById('ID').showModal() method */}
                                <button className="inline-block rounded bg-indigo-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-indigo-700 focus:outline-none focus:ring focus:ring-yellow-400 mt-5" onClick={() => document.getElementById('my_modal_5').showModal()}>Be a Volunteer</button>
                                <dialog id="my_modal_5" className="modal  modal-bottom sm:modal-middle">
                                    <div className="modal-box">
                                        <h3 className="font-bold text-lg">Be a Volunteer!</h3>
                                        <p className="py-4">Press ESC key or click the button below to close</p>

                                        <form onSubmit={handleAdd}>
                                            <div className="flex flex-col ">
                                                {/* if there is a button in form, it will close the modal */}
                                                <div>
                                                    <label htmlFor="">
                                                        Thumbnail
                                                    </label>
                                                    <input name="Thumbnail" type="text" placeholder="Type here" className="input border mb-4 border-black input-ghost w-full " defaultValue={items.Thumbnail} />
                                                    <label htmlFor="">
                                                        Post Title
                                                    </label>
                                                    <input name="PostTitle" type="text" placeholder="Type here" className="input mb-4 border border-black  input-ghost w-full " defaultValue={items.PostTitle} />
                                                    <label htmlFor="">
                                                        Category
                                                    </label>
                                                    <input type="text" name="Category" placeholder="Type here" className="input mb-4 border border-black input-ghost w-full " defaultValue={items.Category} />
                                                    <label htmlFor="">
                                                        Location
                                                    </label>
                                                    <input name="Location" type="text" placeholder="Type here" className="input mb-4 border border-black input-ghost w-full " defaultValue={items.Location} />
                                                    <label htmlFor="">
                                                        VolunteersNeeded
                                                    </label>
                                                    <input name="VolunteersNeeded" type="text" placeholder="Type here" className="input mb-4 border border-black input-ghost w-full " defaultValue={items.VolunteersNeeded} />
                                                    <label htmlFor="">
                                                        Deadline
                                                    </label>
                                                    <input name="Deadline" type="text" placeholder="Type here" className="input border mb-4 border-black input-ghost w-full " defaultValue={items.Deadline} />
                                                    <label htmlFor="">
                                                        OrganizerName
                                                    </label>
                                                    <input name="OrganizerName" type="text" placeholder="Type here" className="input mb-4 border border-black input-ghost w-full " defaultValue={items.OrganizerName} />
                                                    <label htmlFor="">
                                                        OrganizerEmail
                                                    </label>
                                                    <input name="OrganizerEmail" type="text" placeholder="Type here" className="input mb-4 border border-black input-ghost w-full " defaultValue={items.OrganizerEmail} />
                                                    <label htmlFor="">
                                                        Suggestion
                                                    </label>
                                                    <textarea name="Suggestion" type="text" placeholder="Type here" className="input mb-4 border border-black input-ghost w-full textarea" />
                                                    {/* <input type="text" placeholder="Type here" className="input input-ghost w-full max-w-xs" /> */}
                                                </div>

                                                <div className="flex justify-around mt-4 items-center ">
                                                    <button className="inline-block rounded bg-indigo-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-indigo-700 focus:outline-none focus:ring focus:ring-yellow-400">Request</button>
                                                </div>
                                            </div>
                                        </form>




                                        <div className="modal-action">
                                            <form className="grid-cols-1 " method="dialog">
                                                <button className="inline-block rounded bg-indigo-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-indigo-700 focus:outline-none focus:ring focus:ring-yellow-400">Close</button>
                                            </form>
                                        </div>
                                    </div>
                                </dialog>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default CardDetails;