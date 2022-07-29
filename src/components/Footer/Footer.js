const Footer = () => {

    return (
        <div className="footer__container">
            <div className="footer__title">
                <a href="/home">Iliyana's photos</a>
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
                            Phone: +1 720 517 5090
                        </span>
                    </div>
                    <div className="footer__contact">
                        <span>
                            Email: iliyana0822@gmail.com
                        </span>
                    </div>
                </div>

                <div className="footer__copyright">
                    <span>
                        Copyright © 2022 ILIYANA'S PHOTOS. All Rights Reserved.
                    </span>
                </div>
            </div>
        </div>
    );
}

export default Footer;