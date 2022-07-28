import './Header.css';

const Header = () => {

    return (
        <header className="header">
            <button>button</button>
            <a className="header__title" href="/home">Iliyana's photos</a>
            <ul className="header__items">
                <li className="header__item">
                    <a className="item__link" href="/home">Home</a>
                </li>
                <li className="header__item">
                    <a className="item__link" href="/contacts">Contacts</a>
                </li>
                <li className="header__item">
                    <a className="item__link" href="/gallery">Gallery</a>
                </li>
                <li className="header__item">
                    <a className="item__link" href="/create">Create</a>
                </li>
                <li className="header__item">
                    <a className="item__link" href="/login">Login</a>
                </li>
                <li className="header__item">
                    <a className="item__link" href="/register">Register</a>
                </li>
                <li className="header__item">
                    <a className="item__link" href="/logout">Logout</a>
                </li>
            </ul>
        </header>
    );
}

export default Header;