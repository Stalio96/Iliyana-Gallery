import { Link } from "react-router-dom";
import { useAuthContext } from "../../contexts/AuthContext";

import './Header.css';

const Header = () => {
    const { user } = useAuthContext();

    const guest = (
        <>
            <li className="header__item">
                <Link className="item__link" to="/login">Login</Link>
            </li>
            <li className="header__item">
                <Link className="item__link" to="/register">Register</Link>
            </li>
        </>
    );

    const client = (
        <>
            <li className="header__item">Welcome, {user.email}</li>
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
                <Link className="item__link" to="/logout">Logout</Link>
            </li>
        </>
    );

    return (
        <header className="header">
            <button>button</button>
            <Link className="header__title" to="/home">Iliyana's photos</Link>
            <ul className="header__items">
                <li className="header__item">
                    <Link className="item__link" to="/home">Home</Link>
                    <Link className="item__link" to="/search"><i className="fa-solid fa-magnifying-glass"></i></Link>
                </li>
                {user.email
                    ? client
                    : guest
                }
            </ul>
        </header>
    );
}

export default Header;