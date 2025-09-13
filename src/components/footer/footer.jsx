import './footer.scss'

export default function Footer() {
    return (

        <footer>
            <div className="footer-icons">
                <div className="brand-name">
                    <i className="fa-solid fa-calendar-days"></i>
                    <h3>Event Manager</h3>
                </div>
                <div className="social-icons">
                    <i className="fa-brands fa-instagram"></i>
                    <i className="fa-brands fa-x-twitter"></i>
                    <i className="fa-brands fa-youtube"></i>
                    <i className="fa-brands fa-linkedin"></i>
                </div>

            </div>
            <div className="legals">
                <h3>Legals</h3>

                <a>Privacy</a>
                <a>Terms & Conditions</a>
                <a>Licence</a>
                <a>Write with us</a>
            </div>
            <div className="contact-us">
                <h3>Contact US</h3>
                <a>WP 760622059</a>
                <a>10128795206/12595206184</a>

            </div>
            <div className="action-btns">
                <div className="action-btn">Join With Us</div>
                <div className="action-btn">Join With Us</div>
            </div>
        </footer>
    );
}