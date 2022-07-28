const Footer = () => {

    return (
        <div className="footer__container">
            <div className="footer__title">
                <a href="/home">Iliyana's Visuals</a>
            </div>
            <div className="footer__decor">
                <div className="footer__decor__heading">
                    <span>
                        Contacts
                    </span>
                </div>
                <div className="contact__container">
                    <div className="footer__contact">
                        <span>
                            Phone:
                        </span>
                    </div>
                    <div className="footer__contact">
                        <span>
                            Email:
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Footer;