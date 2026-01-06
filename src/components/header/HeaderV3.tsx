import { Link } from "react-router-dom";
import logoLight from "/assets/img/logo1black.png";
import MainMenu from "./MainMenu";
import useSidebarMenu from "../../hooks/useSidebarMenu";
import useSubMenuToggle from "../../hooks/useSubMenuToggle";
import useStickyMenu from "../../hooks/useStickyMenu";

const HeaderV3 = () => {
  const { isOpen, openMenu, closeMenu } = useSidebarMenu();
  const toggleSubMenu = useSubMenuToggle();
  const isMenuSticky = useStickyMenu();

  return (
    <>
      <header>
        <nav
          className={`navbar mobile-sidenav navbar-sticky navbar-default validnavs navbar-fixed ${
            isMenuSticky ? "sticked" : "no-background"
          } ${isOpen ? "navbar-responsive" : ""}`}
          style={{ borderBottom: "1px solid rgba(255,255,255,0.1)" }}
        >
          <div className="container-full d-flex justify-content-between align-items-center">
            <div className="navbar-header">
              <Link className="navbar-brand" to="/">
                <img
                  src={logoLight}
                  alt="Logo W-Technologie"
                  style={{
                    width: "180px",
                    height: "auto",
                  }}
                />
              </Link>
              <button
                type="button"
                className="navbar-toggle"
                onClick={openMenu}
              >
                <i className="fa fa-bars" />
              </button>
            </div>

            <div
              className={`collapse navbar-collapse ${
                isOpen ? "show collapse-mobile" : "collapse-mobile"
              }`}
              id="navbar-menu"
            >
              <div className="mobile-only-header" style={{ display: isOpen ? 'block' : 'none' }}>
                <button
                  type="button"
                  className="navbar-toggle"
                  onClick={closeMenu}
                  style={{ position: 'absolute', right: '20px', top: '20px' }}
                >
                  <i className="fa fa-times" />
                </button>
              </div>

              <MainMenu
                toggleSubMenu={toggleSubMenu}
                navbarPlacement="justify-content-center"
              />
            </div>
            <div className="attr-right">
              <div className="attr-nav">
                <ul>
                  <li className="button">
                    <Link 
                        to="/contact-us" 
                        className="btn-contact-main"
                        style={{
                            padding: "10px 25px",
                            backgroundColor: "#000",
                            color: "#fff",
                            borderRadius: "5px",
                            textDecoration: "none"
                        }}
                    >
                        Contactez-nous
                    </Link>
                  </li>
                </ul>
              </div>
            </div>

          </div>
          <div
            className={`overlay-screen ${isOpen ? "opened" : ""}`}
            onClick={closeMenu}
          />
        </nav>
      </header>
    </>
  );
};

export default HeaderV3;