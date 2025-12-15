import { Link } from "react-router-dom";
import icon16 from "/assets/img/icon/16.png";
import team10 from "/assets/img/team/10.jpg";
import team11 from "/assets/img/team/11.jpg";
import team12 from "/assets/img/team/12.jpg";
import team13 from "/assets/img/team/13.jpg";
import SplitText from "../animation/SplitText.jsx";

interface DataType {
  sectionClass?: string;
}

const AboutV7 = ({ sectionClass }: DataType) => {
  return (
    <>
      <div
        className={`about-style-seven-area default-padding ${
          sectionClass ? sectionClass : ""
        }`}
      >
        <div className="container">
          <div className="about-style-one-items">
            <div className="row">
              <div className="col-lg-5">
                <div className="about-style-seven-left-info">
                  <h2 className="title">
                    <SplitText
                      delay={20}
                      animationFrom={{
                        opacity: 0,
                        transform: "translate3d(0,50px,0)",
                      }}
                      animationTo={{
                        opacity: 1,
                        transform: "translate3d(0,0,0)",
                      }}
                      easing="easeOutCubic"
                      threshold={0.2}
                      rootMargin="-50px"
                    >
                      Établir les bases solides de votre entreprise
                    </SplitText>
                  </h2>
                  <Link className="btn-animation mt-10" to="/about-us">
                    <i className="fas fa-arrow-right" />{" "}
                    <span>En savoir plus</span>
                  </Link>
                </div>
              </div>
              <div className="col-lg-7 pl-80 pl-md-15 pl-xs-15">
                <div className="about-style-seven-info">
                  <div className="d-grid">
                    <div className="left">
                      
                      <p>
                        W.TECHNOLOGIE accompagne les entreprises dans leur
                        transformation digitale à travers des solutions
                        innovantes, performantes et sur mesure. Nous concevons
                        des expériences numériques modernes pour renforcer votre
                        visibilité, optimiser vos performances et accélérer
                        votre croissance.
                      </p>
                    </div>
                    <div className="award-style-one">
                      <div className="top">
                        <div className="icon">
                          <img src={icon16} alt="Image Not Found" />
                        </div>
                        <div className="info">
                          <h4>Meilleur Agence numérique </h4>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutV7;
