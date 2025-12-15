import { Link } from "react-router-dom";
import NewsletterV2 from "../newsletter/NewsletterV2";
import FooterSocial from "../social/FooterSocial";
// import logo
import logo from "/assets/img/logo1black.png"; // adapte le chemin selon ton projet

const FooterV3 = () => {
  return (
    <>
      <footer>
        <div className="footer-box">
          <div className="container">
            <div className="f-items">
              <div className="row">
                <div className="col-lg-6 footer-item about pr-120 pr-md-15 pr-xs-15 pr-md-15 pr-xs-15">
                  <div className="top">
                    {/* Remplacement du texte + bouton par le logo */}
                    <img
                      src={logo}
                      alt="Logo W-Technologie"
                      style={{
                        width: "200px",
                        height: "150px",
                      }}
                    />
                  </div>
                  <ul className="address-list">
                    <li>
                      <h4>Côte d'Ivoire</h4>
                      <p>
                        Abidjan, Immeuble Longchamp, Plateau 25 BP 469 ABIDJAN
                        25
                      </p>
                    </li>
                  </ul>
                </div>
                <div className="col-lg-5 offset-lg-1 footer-item">
                  <h4 className="widget-title">Liens utiles</h4>
                  <ul className="useful-link">
                    <li>
                      <Link to="/about-us">À propos de nous</Link>
                    </li>
                    <li>
                      <Link to="/contact-us">Contact</Link>
                    </li>
                    <li>
                      <Link to="/services">Services</Link>
                    </li>
                    <li>
                      <Link to="/blog">Actualités</Link>
                    </li>
                  </ul>
                  <NewsletterV2 />
                </div>
              </div>
            </div>
          </div>
          <div className="footer-bottom">
            <div className="container">
              <div className="row">
                <div className="col-lg-6">
                  <ul className="footer-social">
                    <FooterSocial />
                  </ul>
                </div>
                <div className="col-lg-6 text-end">
                  <p>
                    Copyright &copy; {new Date().getFullYear()} W-Technologie.
                    Tous droits réservés
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default FooterV3;
