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
                    <a className="active"><Link to="/"><i className="fa-solid fa-house"></i><b>Home</b></Link></a>
                    <a ><Link to="/about">About Us</Link></a>
                    <Link to="/search"><i className="fa-solid fa-magnifying-glass"></i>Search Event</Link>
                    <a ><Link to="/create"> <i className="fa-solid fa-circle-plus"></i>Create Event</Link></a>
                </div>
            </nav>
        </>
    )
}