import thumb2 from "/assets/img/thumb/logo2.jpg";
import arrowIcon from "/assets/img/icon/arrow.png";
import ServiceListData from "../../../src/assets/jsonData/services/ServiceListData.json";
import ServiceList from "../services/ServiceList";
import { Link } from "react-router-dom";
import useScrollAnimation from "../../hooks/useScrollAnimation";
import { useState } from "react";

interface DataType {
  sectionClass?: string;
}

const AboutV6 = ({ sectionClass }: DataType) => {
  const containerRef = useScrollAnimation();

  const [activeServiceId, setActiveServiceId] = useState(
    ServiceListData[0]?.id || null
  );

  const handleMouseEnter = (id: number) => {
    setActiveServiceId(id);
  };

  const handleMouseLeave = () => {
    // Do nothing on mouse leave to keep the active item
  };

  return (
    <>
      <div
        className={`about-style-six-area ${sectionClass ? sectionClass : ""}`}
      >
        <div className="container">
          <div className="row">
            <div className="col-xl-5 col-lg-5">
              <div className="thumb-style-four">
                <img src={thumb2} alt="Image Not Found" />
              </div>
            </div>
            <div className="col-xl-6 offset-xl-1 col-lg-7">
              <div
                className="about-style-six-info text-scroll-animation"
                ref={containerRef}
              >
                <div className="info">
                  <div className="d-flex">
                    <Link to="/about-us">
                      <img src={arrowIcon} alt="Image Not Found" />
                    </Link>
                    <h2 className="title text">
                      Meilleure entreprise informatique
                    </h2>
                  </div>
                  <p className="text">
                    Nous proposons des produits et services performants, fiables
                    et accessibles, en mettant l’humain au centre de notre
                    démarche. Grâce à une équipe d’experts en technologies et
                    gestion de projet, nous offrons des solutions adaptées tout
                    en accompagnant nos clients de l’analyse de leurs besoins à
                    la mise en œuvre de solutions durables.
                  </p>
                </div>
                <ul className="service-list">
                  {ServiceListData.map((service) => (
                    <li
                      key={service.id}
                      onMouseEnter={() => handleMouseEnter(service.id)}
                      onMouseLeave={handleMouseLeave}
                    >
                      <Link
                        to="/services"
                        className={`${
                          activeServiceId === service.id ? "active" : ""
                        }`}
                      >
                        <ServiceList service={service} />
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutV6;
