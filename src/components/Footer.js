import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="app-footer">
      <li>
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9vTQQKswoaJXT5OQWWVtvyH9GKBoKlxMk1g&s"
          alt="logo"
        />
      </li>
      <div>
        <b>Navigation</b>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/menu">Menu</Link>
          </li>
          <li>
            <Link to="/booking">Reservation</Link>
          </li>
          <li>
            <Link to="/order">Order online</Link>
          </li>
          <li>
            <Link to="/login">Login</Link>
          </li>
        </ul>
      </div>
      <div>
        <b>Contact</b>
        <ul>
          <li>Address</li>
          <li>Phone number</li>
          <li>Email</li>
        </ul>
      </div>
      <div>
        <b>Social media links</b>
        <ul>
          <li>
            <a>Facebook</a>
          </li>
          <li>
            <a>Instagram</a>
          </li>
        </ul>
      </div>
    </footer>
  );
}
