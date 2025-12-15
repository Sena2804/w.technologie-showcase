import { Link } from "react-router-dom";
import PortfolioV4Data from "../../../src/assets/jsonData/portfolio/PortfolioV4Data.json";

interface DataType {
  id?: number;
  title?: string;
  title2?: string;
  title3?: string;
  li1?: string;
  li2?: string;
  li3?: string;
  li4?: string;
  li5?: string;
  tag?: string;
  thumb?: string;
  thumbFull?: string;
  thumbFull2?: string;
  date?: string;
  description?: string;
  descriptionP?: string;
  client?: string;
  disciplines?: string[];
  gallery?: string[];
  sections?: {
    background?: {
      paragraphs?: string[];
    };
    challenges?: {
      intro?: string;
      details?: string[];
      prioritiesTitle?: string;
      priorities?: string[];
    };
    solution?: {
      paragraphs?: string[];
    };
  };
}

interface ProjectDetailsProps {
  projectInfo?: DataType;
  sectionClass?: string;
  totalProjects?: number;
}

const ProjectDetailsContent = ({
  projectInfo,
  sectionClass,
  totalProjects = PortfolioV4Data.length,
}: ProjectDetailsProps) => {
  const {
    id,
    title,
    tag,
    description,
    client,
    title2,
    title3,
    li1,
    li2,
    li3,
    li4,
    li5,
    descriptionP,
    gallery,
    sections,
    thumbFull,
    thumbFull2,
  } = projectInfo || {};

  const imagePath = "/assets/img/portfolio/";

  /* ===== Navigation ===== */
  const currentId = id ?? 1;
  const previousId = currentId === 1 ? totalProjects : currentId - 1;
  const nextId = currentId === totalProjects ? 1 : currentId + 1;

  const previousProject = PortfolioV4Data.find((p) => p.id === previousId);
  const nextProject = PortfolioV4Data.find((p) => p.id === nextId);

  const getFirstTwoWords = (text?: string) =>
    text ? text.split(" ").slice(0, 2).join(" ") : "";

  return (
    <>
      {/* ================= SECTION 1 : INFOS ================= */}
      <div
        className={`project-details-items default-padding-bottom ${
          sectionClass || ""
        }`}
      >
        <div className="container">
          <div className="row">
            <div className="col-lg-10 offset-lg-1">
              <div className="project-details-main-info">
                <div className="project-single-tags">
                  <Link to="#">{tag}</Link>
                </div>

                <h2 className="title">{title}</h2>

                <div className="project-author-details mt-35">
                  <ul>
                    <li>
                      <div className="left-info">
                        <h3>Domaines</h3>
                      </div>
                      <div className="right-info">
                        <h3>{client}</h3>
                      </div>
                    </li>

                    <li>
                      <div className="left-info">
                        <h3>Détails du Projet</h3>
                      </div>
                      <div className="right-info">
                        <p>{description}</p>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ================= SECTION 2 : GALERIE ================= */}
      <div className="project-details-items bg-gray default-padding">
        <div className="container">
          <div className="row">
            <div className="col-lg-7">
              <div className="thumb-grid">
                {gallery?.map((img, index) => (
                  <img
                    key={index}
                    src={`${imagePath}${img}`}
                    alt={`${title} ${index + 1}`}
                  />
                ))}
              </div>
            </div>

            <div className="col-lg-5 pl-50 pl-md-15 pl-xs-15">
              <div className="check-list">
                <h3>{title2}</h3>
                <p className="list-disc">{descriptionP}</p>
              </div>
              <br />
              <div className="check-list">
                <h3>{title3}</h3>
                <ul className="list-disc">
                  <li>{li1}</li>
                  <li>{li2}</li>
                  <li>{li3}</li>
                  <li>{li4}</li>
                  <li>{li5}</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ================= SECTION 3 : CONTENU ================= */}
      <div className="project-details-items default-padding">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="item-grid-container">
                {/* Background */}
                <div className="single-grid">
                  <div className="item-grid-colum">
                    <div className="left-info">
                      <h3>
                        <strong>01</strong> Contexte
                      </h3>
                    </div>

                    <div className="right-info">
                      {sections?.background?.paragraphs?.map((text, index) => (
                        <p
                          key={index}
                          style={{ marginBottom: "20px", lineHeight: "1.8" }}
                        >
                          {text}
                        </p>
                      ))}
                    </div>
                  </div>
                  {thumbFull && (
                    <img src={`${imagePath}${thumbFull}`} alt="Background" />
                  )}
                </div>

                {/* Challenges */}
                <div className="single-grid">
                  <div className="item-grid-colum">
                    <div className="left-info">
                      <h3>
                        <strong>02</strong> Les Défis
                      </h3>
                    </div>

                    <div className="right-info">
                      {/* Intro */}
                      {sections?.challenges?.intro && (
                        <p className="mb-20">{sections.challenges.intro}</p>
                      )}

                      {/* Détails */}
                      {sections?.challenges?.details && (
                        <ul className="list-disc mb-30">
                          {sections.challenges.details.map((item, index) => (
                            <li key={index}>{item}</li>
                          ))}
                        </ul>
                      )}

                      {/* Priorités */}
                      {sections?.challenges?.priorities && (
                        <>
                          <h4 className="mt-30">
                            {sections.challenges.prioritiesTitle}
                          </h4>

                          <ul className="list-check mt-15">
                            {sections.challenges.priorities.map(
                              (item, index) => (
                                <li key={index}>{item}</li>
                              )
                            )}
                          </ul>
                        </>
                      )}
                    </div>
                  </div>
                  {thumbFull2 && (
                    <img src={`${imagePath}${thumbFull2}`} alt="Background" />
                  )}
                </div>

                {/* Solution */}
                <div className="single-grid">
                  <div className="item-grid-colum">
                    <div className="left-info">
                      <h3>
                        <strong>03</strong> La Solution
                      </h3>
                    </div>

                    <div className="right-info">
                      {sections?.solution?.paragraphs?.map((text, index) => (
                        <p
                          key={index}
                          style={{ marginBottom: "20px", lineHeight: "1.8" }}
                        >
                          {text}
                        </p>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ================= SECTION 4 : NAVIGATION ================= */}
      <div className="project-pagination default-padding-bottom">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="project-paginvation-items">
                <div className="project-previous">
                  <Link to={`/project-details/${previousId}`}>
                    <div className="icon">
                      <i className="fas fa-angle-double-left" />
                    </div>
                    <div className="nav-title">
                      Précédent
                      <h5>{getFirstTwoWords(previousProject?.title)}</h5>
                    </div>
                  </Link>
                </div>

                <div className="project-all">
                  <Link to="/project">
                    <i className="fas fa-th-large" />
                  </Link>
                </div>

                <div className="project-next">
                  <Link to={`/project-details/${nextId}`}>
                    <div className="nav-title">
                      Suivant
                      <h5>{getFirstTwoWords(nextProject?.title)}</h5>
                    </div>
                    <div className="icon">
                      <i className="fas fa-angle-double-right" />
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProjectDetailsContent;
