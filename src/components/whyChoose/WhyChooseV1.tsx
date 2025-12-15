import Animate from "../animation/Animate";
import thumb3 from "/assets/img/thumb/digital.jpg";

interface DataType {
  sectionClass?: string;
}

const WhyChooseV1 = ({ sectionClass }: DataType) => {
  return (
    <>
      <div className={`${sectionClass ? sectionClass : ""}`}>
        <div className="container">
          <div className="row align-center">
            <div className="col-lg-5">
              <div className="thumb-style-one">
                <img src={thumb3} alt="Image Not Found" />
              </div>
            </div>
            <div className="col-lg-7">
              <div className="choose-us-style-one">
                <div className="pl-80 pl-md-0 pl-xs-0">
                  <h4 className="sub-title">
                    Pourquoi choisir W-Technologies
                  </h4>
                  <h2 className="title">Libérez votre potentiel digital</h2>
                  <div
                    className="faq-style-one accordion mt-30"
                    id="faqAccordion"
                  >
                    <div className="accordion-item">
                      <h2 className="accordion-header" id="headingOne">
                        <button
                          className="accordion-button"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapseOne"
                          aria-expanded="true"
                          aria-controls="collapseOne"
                        >
                          Innovation continue
                        </button>
                      </h2>
                      <div
                        id="collapseOne"
                        className="accordion-collapse collapse show"
                        aria-labelledby="headingOne"
                        data-bs-parent="#faqAccordion"
                      >
                        <div className="accordion-body">
                          <p>
                            Nous plaçons l’innovation au cœur de chaque projet,
                            en intégrant les dernières technologies pour créer
                            des solutions performantes et durables qui font la
                            différence.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="accordion-item">
                      <h2 className="accordion-header" id="headingTwo">
                        <button
                          className="accordion-button collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapseTwo"
                          aria-expanded="false"
                          aria-controls="collapseTwo"
                        >
                          Excellence technique
                        </button>
                      </h2>
                      <div
                        id="collapseTwo"
                        className="accordion-collapse collapse"
                        aria-labelledby="headingTwo"
                        data-bs-parent="#faqAccordion"
                      >
                        <div className="accordion-body">
                          <p>
                            Nos équipes maîtrisent les technologies les plus
                            récentes en développement web, mobile et cloud afin
                            d’assurer des performances et une sécurité
                            optimales.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="accordion-item">
                      <h2 className="accordion-header" id="headingThree">
                        <button
                          className="accordion-button collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapseThree"
                          aria-expanded="false"
                          aria-controls="collapseThree"
                        >
                          Vision centrée sur le client
                        </button>
                      </h2>
                      <div
                        id="collapseThree"
                        className="accordion-collapse collapse"
                        aria-labelledby="headingThree"
                        data-bs-parent="#faqAccordion"
                      >
                        <div className="accordion-body">
                          <p>
                            Chaque solution est conçue en étroite collaboration
                            avec nos clients pour garantir une parfaite
                            adéquation entre les besoins et les résultats.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="award-items">
                  <Animate className="animate__animated animate__fadeInLeft">
                    <div className="award-item">
                      <i className="fas fa-code" />
                      <h4>Excellence en développement </h4>
                    </div>
                  </Animate>

                  <Animate
                    className="animate__animated animate__fadeInLeft"
                    delay="100ms"
                  >
                    <div className="award-item">
                      <i className="fas fa-layer-group" />
                      <h4>Design et innovation</h4>
                    </div>
                  </Animate>

                  <Animate
                    className="animate__animated animate__fadeInLeft"
                    delay="200ms"
                  >
                    <div className="award-item">
                      <i className="fab fa-laravel" />
                      <h4>Expertise réseau & cloud</h4>
                    </div>
                  </Animate>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default WhyChooseV1;
