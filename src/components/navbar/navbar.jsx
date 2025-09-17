import './navbar.scss'
import { Link } from 'react-router-dom'
export default function Navbar() {

    return (
        <>
            <nav>
                <div className="logo">
                    <a className="icon"><i className="fa-solid fa-calendar-days"></i></a>
                    <a className="brand-name"><b>Event Manager</b></a>
                </div>
                <div className="links">
                    <Link to="/" className="active"><i className="fa-solid fa-house"></i><b>Home</b></Link>
                    <Link to="/about">About Us</Link>
                    <a href="/searchEvent.html"><i className="fa-solid fa-magnifying-glass"></i>Search Event</a>
                    <Link to="/create"> <i className="fa-solid fa-circle-plus"></i>Create Event</Link>
                </div>
            </nav>
        </>
    )
}