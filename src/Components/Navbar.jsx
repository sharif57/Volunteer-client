import { useContext, useEffect, useState } from "react"
import { AuthContext } from "../AuthProvider/AuthProvider"
import { Link, NavLink } from "react-router-dom"

const Navbar = () => {
    const [theme, setTheme] = useState('light')

    const { user, logOut } = useContext(AuthContext)

    const handleLogOut = () => {
        logOut()
            .then(() => console.log('logout successfully'))
            .catch(error => console.error(error))

    }
    useEffect(() => {
        localStorage.setItem('theme', theme)
        const localTheme = localStorage.getItem('theme')
        document.querySelector('html').setAttribute('data-theme', localTheme)
    }, [theme])


    const handleToggle = (e) => {
        if (e.target.checked) {
            setTheme('dark')
        }
        else {
            setTheme('light')
        }
    }

    return (
        <div className='navbar lg:flex justify-between bg-base-100 shadow-sm container mx-auto'>
            {/* <div className='flex-1'>
                <button className='flex gap-2 items-center'>
                    <img className='w-auto h-7' src='' alt='' />
                    <Link to={'/'} className='font-bold'>Volunteer</Link>
                </button>
            </div> */}
            <div>
                <Link to={'/'} className='font-bold text-3xl'>Volunteer</Link>
            </div>
            <div className='flex-none'>
                <ul className='menu menu-horizontal px-1'>
                    <li>
                        <p><NavLink to='/' className={({ isActive }) => isActive ? 'text-primary font-bold ' : 'font-bold'}>Home</NavLink></p>
                    </li>

                    <li>
                        <p><NavLink to='/allVolunteer' className={({ isActive }) => isActive ? 'text-primary font-bold ' : 'font-bold'}>Need Volunteer Page</NavLink></p>

                    </li>
                    {
                        !user && (
                            <li>
                                <Link to={'/login'}><p><NavLink className={({ isActive }) => isActive ? 'text-primary font-bold ' : 'font-bold'}>Login</NavLink></p></Link>
                            </li>
                        )
                    }
                    <label className="cursor-pointer grid place-items-center ">
                        <input onChange={handleToggle} type="checkbox" className="toggle theme-controller bg-base-content row-start-1 col-start-1 col-span-2" />
                        <svg className="col-start-1 row-start-1 stroke-base-100 fill-base-100" xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="5" /><path d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4" /></svg>
                        <svg className="col-start-2 row-start-1 stroke-base-100 fill-base-100" xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>
                    </label>
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
                                    <div><p><NavLink to='addData' className={({ isActive }) => isActive ? 'text-primary font-bold ' : 'font-bold'}>Add Volunteer Post</NavLink></p></div>
                                </li>
                                <li>
                                    <div><p><NavLink to='/myCard' className={({ isActive }) => isActive ? 'text-primary font-bold ' : 'font-bold'}>Manage My Post</NavLink></p></div>
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