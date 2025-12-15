import arrowLongRight from "/assets/img/icon/arrow-long-right.png";
import ServicesV3Data from "../../../src/assets/jsonData/services/ServicesV3Data.json";
import SingleServiceV3 from "./SingleServiceV3";
import { Link } from "react-router-dom";
import SplitText from "../animation/SplitText.jsx";
import useActiveIndex from "../../hooks/useActiveIndex";

interface DataType {
  sectionClass?: string;
  hasTitle?: boolean;
}

const ServicesV3 = ({ sectionClass, hasTitle }: DataType) => {
  const { activeIndex, handleMouseEnter, handleTouchStart } = useActiveIndex();

  return (
    <>
      <div
        className={`services-style-three-area ${
          sectionClass ? sectionClass : ""
        }`}
      >
        {/* Section Title */}
        {hasTitle && (
          <div className="container">
            <div className="site-heading">
              <div className="row align-center">
                <div className="col-lg-8">
                  <h4 className="sub-title">w.Technologie</h4>
                  <h2 className="title">
                    <SplitText
                      delay={80}
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
                      Meilleure entreprise informatique
                    </SplitText>
                  </h2>
                  <p className="title text-red">
                    
                      Nous proposons des produits et services performants,
                      fiables et accessibles, en mettant l’humain au centre de
                      notre démarche. Grâce à une équipe d’experts en
                      technologies et gestion de projet, nous offrons des
                      solutions adaptées tout en accompagnant nos clients de
                      l’analyse de leurs besoins à la mise en œuvre de solutions
                      durables.
              
                  </p>
                </div>
                <div className="col-lg-4 text-end">
                  <Link to="/services" className="btn-circle">
                    <div className="button-content">
                      <span>
                        <img src={arrowLongRight} alt="Image Not Found" />
                      </span>{" "}
                      <strong>All Members</strong>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        )}

        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <ul className="service-style-three-items" id="accordion">
                {ServicesV3Data.map((service, index) => (
                  <li
                    className={activeIndex === index ? "out" : ""}
                    onMouseEnter={() => handleMouseEnter(index)}
                    onClick={() => handleTouchStart(index)}
                    onTouchStart={() => handleTouchStart(index)}
                    key={service.id}
                  >
                    <SingleServiceV3 service={service} />
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ServicesV3;
