import { Link } from "react-router-dom";

interface DataType {
  title?: string;
  breadCrumb?: string;
  backgroundImage?: string; 
  lightBannerImage?: string;
}

const Breadcrumb = ({
  title,
  breadCrumb,
  backgroundImage,
  lightBannerImage,
}: DataType) => {
  return (
    <div
      className="breadcrumb-area text-center"
      style={{
        backgroundImage: `url(${
          backgroundImage || "/assets/img/shape/10.jpg"
        })`,
      }}
    >
      <div
        className="light-banner-active bg-gray bg-cover"
        style={{
          backgroundImage: `url(${
            lightBannerImage || "/assets/img/shape/6.jpg"
          })`,
        }}
      />
      <div className="container">
        <div className="breadcrumb-item">
          <div className="row">
            <div className="col-lg-8 offset-lg-2">
              <h1>{title ? title : "not found"}</h1>
              <nav aria-label="breadcrumb">
                <ol className="breadcrumb">
                  <li>
                    <Link to="/">
                      <i className="fas fa-home" /> Accueil
                    </Link>
                  </li>
                  <li className="active">
                    {breadCrumb ? breadCrumb : "error"}
                  </li>
                </ol>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Breadcrumb;
