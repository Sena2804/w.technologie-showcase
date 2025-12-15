import instagram from "/assets/img/icon/insta.png";  // change l’import pour Instagram
import { Link } from "react-router-dom";

const FooterSocial = () => {
    return (
        <>
            <li>
                <Link to="https://www.facebook.com/people/WTECH/61581542858227/?mibextid=wwXIfr&rdid=ECra0WB2fQnDtHOg&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F17SUcMmYVX%2F%3Fmibextid%3DwwXIfr" target='_blank' rel="noopener noreferrer">
                    <i className="fab fa-facebook-f" />
                </Link>
            </li>
            <li>
                <Link to="https://www.linkedin.com/company/wtechafrique/" target='_blank' rel="noopener noreferrer">
                    <i className="fab fa-linkedin-in" />
                </Link>
            </li>
            <li>
                <Link to="https://www.instagram.com/wtechafrique/" target='_blank' rel="noopener noreferrer">
                    <img src={instagram} alt="Instagram" />
                </Link>
            </li>
        </>
    );
};

export default FooterSocial;
