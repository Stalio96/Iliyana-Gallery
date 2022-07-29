import { Link } from "react-router-dom";
import { useAuthContext } from "../../contexts/AuthContext";

import './Header.css';

const Header = () => {
    const { user } = useAuthContext();

    return (
        <header className="header">
            <button>button</button>
            <Link className="header__title" to="/home">Iliyana's photos</Link>
            <ul className="header__items">
                <li>Welcome, {user.email}</li>
                <li className="header__item">
                    <Link className="item__link" to="/home">Home</Link>
                </li>
                <li className="header__item">
                    <Link className="item__link" to="/contacts">Contacts</Link>
                </li>
                <li className="header__item">
                    <Link className="item__link" to="/gallery">Gallery</Link>
                </li>
                <li className="header__item">
                    <Link className="item__link" to="/create">Create</Link>
                </li>
                <li className="header__item">
                    <Link className="item__link" to="/login">Login</Link>
                </li>
                <li className="header__item">
                    <Link className="item__link" to="/register">Register</Link>
                </li>
                <li className="header__item">
                    <Link className="item__link" to="/logout">Logout</Link>
                </li>
            </ul>
        </header>
    );
}

export default Header;