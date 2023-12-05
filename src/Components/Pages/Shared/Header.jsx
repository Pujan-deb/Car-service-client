import { NavLink, useNavigate } from 'react-router-dom'
import logo from '../../../assets/logo.svg'
import { useContext } from 'react'
import { AuthContext } from '../../../Authentication/Authuser/Authinfo'
export default function Header() {
    const navigate = useNavigate()
    const { user, Signout } = useContext(AuthContext)
    const Logout = () => {
        Signout()
    }
    const navigation = <>
        <li><NavLink to="/">Home</NavLink></li>
        <li tabIndex={0}>
            <details>
                <summary>Services</summary>
                <ul className="p-2 z-10">
                    <li><NavLink to={`/allservices`}>All services</NavLink></li>
                    <li><a>Car repair</a></li>
                </ul>
            </details>
        </li>
        <li><NavLink to="/About">About</NavLink></li>
        <li><a>Blog</a></li>
        <li><a>Contact</a></li>
        {user && <li><NavLink to={`/allbookings`}>Bookings</NavLink></li>}
    </>
    return (
        <div className="navbar bg-base-100 mt-4 mb-2">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {navigation}
                    </ul>
                </div>
                <NavLink to="/"><img src={logo} alt="" /></NavLink>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {navigation}
                </ul>
            </div>
            <div className="navbar-end">
                {user ? <NavLink to="/" className="btn btn-outline btn-error" onClick={() => {
                    Logout()
                    localStorage.removeItem("Car-doctor-token")
                }}>Logout</NavLink> : <NavLink to="/login" className="btn btn-outline btn-error">Get started</NavLink>}


            </div>
        </div>)
}
