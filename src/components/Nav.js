import { Link } from "react-router-dom"

export default function Nav() {
    return <nav>
        <ul className="app-nav">
            <li><img src="https://littlelemonproject.com/Logo.png" alt="little lemon logo" className="app-logo"/></li>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/menu">Menu</Link></li>
            <li><Link to="/booking">Reservations</Link></li>
            <li><Link to="/order">Order online</Link></li>
            <li><Link to="/login">Login</Link></li>
        </ul>
    </nav>
}