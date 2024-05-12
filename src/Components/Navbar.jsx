import { useContext } from "react"
import { AuthContext } from "../AuthProvider/AuthProvider"
import { Link, NavLink } from "react-router-dom"

const Navbar = () => {

    const { user, logOut } = useContext(AuthContext)

    const handleLogOut = () => {
        logOut()
            .then(() => console.log('logout successfully'))
            .catch(error => console.error(error))

    }

    return (
        <div className='navbar bg-base-100 shadow-sm container px-4 mx-auto'>
            <div className='flex-1'>
                <button className='flex gap-2 items-center'>
                    <img className='w-auto h-7' src='' alt='' />
                    <Link to={'/'} className='font-bold'>Volunteer</Link>
                </button>
            </div>
            <div className='flex-none'>
                <ul className='menu menu-horizontal px-1'>
                    <li>
                        <p><NavLink to='/' className={({ isActive }) => isActive ? 'text-primary font-bold ' : 'font-bold'}>Home</NavLink></p>
                    </li>

                    <li>
                        <p><NavLink to='/' className={({ isActive }) => isActive ? 'text-primary font-bold ' : 'font-bold'}>Need Volunteer Page</NavLink></p>

                    </li>
                    {
                        !user && (
                            <li>
                                <Link to={'/login'}><p><NavLink className={({ isActive }) => isActive ? 'text-primary font-bold ' : 'font-bold'}>Login</NavLink></p></Link>
                            </li>
                        )
                    }
                </ul>

                {
                    user && (
                        <div className='dropdown dropdown-end z-50'>
                            <div
                                tabIndex={0}
                                role='button'
                                className='btn btn-ghost btn-circle avatar'
                            >
                                <div title={user?.displayName} className='w-10 rounded-full'>
                                    <img
                                        referrerPolicy='no-referrer'
                                        alt='User Profile Photo'
                                        src={user?.photoURL}
                                    />
                                </div>
                            </div>
                            <ul
                                tabIndex={0}
                                className='menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52'
                            >
                                
                                <li>
                                    <div><p><NavLink to='/' className={({ isActive }) => isActive ? 'text-primary font-bold ' : 'font-bold'}>Add Volunteer Post</NavLink></p></div>
                                </li>
                                <li>
                                    <div><p><NavLink to='/' className={({ isActive }) => isActive ? 'text-primary font-bold ' : 'font-bold'}>Manage My Post</NavLink></p></div>
                                </li>
                                
                                <li className='mt-2'>
                                    <button onClick={handleLogOut} className='bg-gray-200 block text-center'>Logout</button>

                                </li>
                            </ul>
                        </div>
                    )
                }
            </div>
        </div>
    )
}

export default Navbar