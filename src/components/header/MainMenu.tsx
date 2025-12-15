import { Link } from "react-router-dom";

interface DataType {
  navbarPlacement?: string;
}

const MainMenu = ({ navbarPlacement }: DataType) => {
  return (
    <ul
      className={`nav navbar-nav ${navbarPlacement ? navbarPlacement : ""}`}
      data-in="fadeInDown"
      data-out="fadeOutUp"
    >
      <li>
        <Link to="/">Accueil</Link>
      </li>

      <li>
        <Link to="/services">Nos services</Link>
      </li>

      <li>
        <Link to="/about-us">Notre structure</Link>
      </li>

      <li>
        <Link to="/blog">Actualités</Link>
      </li>

      <li>
        <Link to="/contact-us">Contact</Link>
      </li>
    </ul>
  );
};

export default MainMenu;
