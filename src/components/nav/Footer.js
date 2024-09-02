import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Footer = () => {
    return (
        <footer className="footer-container">
            <a href="https://ethansaso.github.io/" className="footer-item" style={{color: "black", textDecoration: 'none'}}>
                <p className="footer-text">© Ethan Saso 2024</p>
            </a>
            <div className="footer-item footer-icon-container">
                <a href="https://www.instagram.com/calclubvolleyball/" style={{color: "black"}}>
                    <FontAwesomeIcon icon="fa-brands fa-instagram" fixedWidth size="xl" />
                </a>
                <a href="https://www.facebook.com/calclubvball/" style={{color: "black"}}>
                    <FontAwesomeIcon icon="fa-brands fa-facebook" fixedWidth size="xl" />
                </a>
            </div>
            <a href="mailto:cal.mensvb@gmail.com" className="footer-item" style={{color: "black", textDecoration: 'none'}}>
                <p className="footer-text">Contact Us</p>
            </a>
        </footer>
    )
}

export default Footer;