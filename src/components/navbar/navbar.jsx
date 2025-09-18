import './navbar.scss'
import { NavLink } from 'react-router-dom'
export default function Navbar() {

    return (
        <>
            <nav>
                <div className="logo">
                    <a className="icon"><i className="fa-solid fa-calendar-days"></i></a>
                    <a className="brand-name"><b>Event Manager</b></a>
                </div>
                <div className="links">
                    <NavLink to="/" ><i className="fa-solid fa-house"></i><b>Home</b></NavLink>
                    <NavLink to="/about">About Us</NavLink>
                    <NavLink to="/search"><i className="fa-solid fa-magnifying-glass"></i>Search Event</NavLink>
                    <NavLink to="/create"> <i className="fa-solid fa-circle-plus"></i>Create Event</NavLink>
                </div>
            </nav>
        </>
    )
}