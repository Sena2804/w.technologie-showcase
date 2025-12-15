import PortfolioV2Data from "../../../src/assets/jsonData/portfolio/PortfolioV2Data.json";
import SinglePortfolioV2 from "./SinglePortfolioV2";
import SplitText from "../animation/SplitText.jsx";
import { Link } from "react-router-dom";

interface DataType {
  hasTitle?: boolean;
  moreBtn?: boolean;
  sectionClass?: string;
}

const PortfolioV2 = ({ hasTitle, moreBtn, sectionClass }: DataType) => {
  return (
    <>
      <div
        className={`portfolio-style-two-area overflow-hidden ${
          sectionClass ? sectionClass : ""
        }`}
      >
        {/* Portfolio Title */}
        {hasTitle && (
          <div className="container">
            <div className="row">
              <div className="col-xl-6 offset-xl-3 col-lg-8 offset-lg-2">
                <div className="site-heading text-center">
                  <h4 className="sub-title">Projet récent</h4>
                  <p className="about-style-seven-info">
                    Nous concevons et réalisons des projets innovants qui
                    allient performance, créativité et technologie. Chaque
                    solution est pensée pour répondre aux besoins spécifiques de
                    nos clients et leur offrir une expérience numérique
                    exceptionnelle.
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}

        <div className="container mt--100 mt-xs--50">
          <div className="row">
            <div className="col-lg-12">
              <div className="row gutter-xl">
                {PortfolioV2Data.map((portfolio) => (
                  <div className="col-lg-6 item-center" key={portfolio.id}>
                    <SinglePortfolioV2 portfolio={portfolio} />
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Load More Btn */}
          {moreBtn && (
            <div className="row">
              <div className="col-lg-12">
                <div className="text-center">
                  <Link
                    className="btn-round-animation dark mt-80"
                    to="/contact-us"
                  >
                    Charger plus
                  </Link>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default PortfolioV2;
