import { faBook, faHotel, faTachographDigital, faUsers } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from 'react-router-dom'
import LOGO from "./logo.png"
function Sidebar() {
    return (
        <ul className="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion" id="accordionSidebar">

            <img 
            src={LOGO}
            />
    
            {/* <!-- Divider --> */}
            <hr className="sidebar-divider my-0" />

            {/* <!-- Nav Item - Dashboard --> */}
            <li className="nav-item active">
                <Link className="nav-link" to="/">
                    <FontAwesomeIcon icon={faTachographDigital} style={{ marginRight: "0.5rem" }} />
                    <span>Dashboard</span>
                </Link>
            </li>
            {/* <!-- Divider --> */}
            <hr className="sidebar-divider my-0" />

            {/* <!-- Nav Item - Users --> */}
            <li className="nav-item active">
                <Link className="nav-link" to="/user-list">
                    <FontAwesomeIcon icon={faUsers} style={{ marginRight: "0.5rem" }} />
                    <span>Users</span>
                </Link>
            </li>
            <li className="nav-item active">
                <Link className="nav-link" to="/hotel-list">
                    <FontAwesomeIcon icon={faHotel} style={{ marginRight: "0.5rem" }} />
                    <span>Hotel</span>
                </Link>
            </li>
            <li className="nav-item active">
                <Link className="nav-link" to="/booking-list">
                    <FontAwesomeIcon icon={faBook} style={{ marginRight: "0.5rem" }} />
                    <span>Booking</span>
                </Link>
            </li>
            <li className="nav-item active">
                <Link className="nav-link" to="/room-list">
                    <FontAwesomeIcon icon={faBook} style={{ marginRight: "0.5rem" }} />
                    <span>Room</span>
                </Link>
            </li>

        </ul>
    )
}

export default Sidebar
