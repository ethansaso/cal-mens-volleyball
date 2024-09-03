import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const path_prefix = process.env.NODE_ENV === 'production' ? "/cal-mens-volleyball/" : '/'

const Footer = () => {
    return (
        <>
            <footer className="footer1-container">
                <div className="footer-content">
                    <div className="footer-nav">
                        <h4 className="footer-header">Links</h4>
                        <div className="footer-nav-links">
                            <div className="footer-nav-column">
                                <p className="footer-text">
                                    <a href={`${path_prefix}`} className="footer-link" style={{color: "black"}}>Home</a>
                                </p>
                                <p className="footer-text">
                                    <a href={`${path_prefix}schedule`} className="footer-link" style={{color: "black"}}>Schedule</a>
                                </p>
                                <p className="footer-text">
                                    <a href={`${path_prefix}roster`} className="footer-link" style={{color: "black"}}>Roster</a>
                                </p>
                            </div>
                            <div className="footer-nav-column">
                                <p className="footer-text">
                                    <a href={`${path_prefix}about`} className="footer-link" style={{color: "black"}}>About</a>
                                </p>
                                <p className="footer-text">
                                    <a href={`${path_prefix}resources`} className="footer-link" style={{color: "black"}}>Resources</a>
                                </p>
                                <p className="footer-text">
                                    <a href={`${path_prefix}donate`} className="footer-link" style={{color: "black"}}>Donate</a>
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="footer-socials">
                        <div>
                            <h4 className="footer-header">Socials</h4>
                            <div className="footer-social-links">
                                <a href="https://www.instagram.com/calclubvolleyball/" style={{color: "black"}}>
                                    <FontAwesomeIcon icon="fa-brands fa-instagram" fixedWidth size="lg" style={{marginRight: '5px'}} />
                                    Instagram
                                </a>
                                <a href="https://www.facebook.com/calclubvball/" style={{color: "black"}}>
                                    <FontAwesomeIcon icon="fa-brands fa-facebook" fixedWidth size="lg" style={{marginRight: '5px'}} />
                                    Facebook
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
            <footer className="footer2-container">
                <p className="footer2-text">
                    Made with love by <a href="https://ethansaso.github.io/" style={{color: "black"}}>Ethan Saso</a>
                </p>
            </footer>
        </>
    )
}

export default Footer;