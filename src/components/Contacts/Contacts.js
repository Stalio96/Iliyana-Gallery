import './Contacts.css';

const Contacts = () => {

    return (
        <div className="contacts__container">
            <h2 className="contacts__heading">Contacts</h2>

            <p className="contacts__work">Let's work together!</p>

            <ul className="contacts__items">
                <li className="contacts__item">
                    <div className="contacts__circle">
                        <i className="fa-solid fa-mobile-screen-button"></i>
                    </div>
                    <p>+1 720 517 5090</p>
                </li>
                <li className="contacts__item">
                    <div className="contacts__circle">
                        <i className="fa-solid fa-envelope"></i>
                    </div>
                    <p>iliyana0822@gmail.com</p>
                </li>
                <li className="contacts__item">
                    <div className="contacts__circle">
                        <i className="fa-solid fa-location-dot"></i>
                    </div>
                    <p>Los Angeles, California</p>
                </li>
            </ul>
        </div>
    );
}

export default Contacts;