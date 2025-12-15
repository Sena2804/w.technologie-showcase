import { Link, useParams } from "react-router-dom";
import ServicesV1Data from "../../../src/assets/jsonData/services/ServicesV1Data.json";

const ServiceDetailsContent = ({ sectionClass }: { sectionClass?: string }) => {
    const { id } = useParams<{ id: string }>();

    // Recherche du service correspondant à l'id dans les données
    const service = ServicesV1Data.find(item => item.id === Number(id));

    if (!service) {
        return (
            <div className={`services-details-area ${sectionClass || ""}`}>
                <div className="container">
                    <p>Service non trouvé.</p>
                </div>
            </div>
        );
    }

    return (
        <div className={`services-details-area ${sectionClass || ""}`}>
            <div className="container">
                <div className="services-details-items">

                    {/* Bannière dynamique */}
                    <div className="row">
                        <div className="col-xl-12">
                            <div className="service-single-thumb">
                                <img
                                    src={`/assets/img/banner/${service.banner}`}
                                    alt={service.title}
                                />
                            </div>
                        </div>
                    </div>

                    {/* Titre et description longue */}
                    <div className="row">
                        <div className="col-lg-7">
                            <h2>{service.title}</h2>
                            <p>{service.descriptionLong || service.text}</p>

                            
                        </div>

                        {/* Partie droite statique ou légèrement dynamique */}
                        <div className="col-lg-5 pl-60 pl-md-15 pl-xs-15">
                            <p>
                                {service.description ||
                                    "Nous nous engageons à fournir des solutions de haute qualité qui répondent aux besoins uniques de chaque client."}
                            </p>
                            {/* Liste des features dynamiques */}
                            {service.features && service.features.length > 0 && (
                                <ul className="feature-list-item mt-3">
                                    {service.features.map((feature, index) => (
                                        <li key={index}>{feature}</li>
                                    ))}
                                </ul>
                            )}
                        </div>
                    </div>

                    {/* Process dynamique */}
                    <div className="mt-50 mt-xs-20">
                        <div className="process-style-two">
                            {service.process && service.process.map((step) => (
                                <div className="process-style-two-item" key={step.step}>
                                    <span>{step.step}</span>
                                    <h4>{step.title}</h4>
                                    <p>{step.text}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Galerie dynamique */}
                    <div className="row mt-80 mt-xs-50 gallery-two-columns">
                        {service.gallery && service.gallery.map((imgName, idx) => (
                            <div className="col-md-6" key={idx}>
                                <img
                                    src={`/assets/img/portfolio/${imgName}`}
                                    alt={`Gallery image ${idx + 1}`}
                                />
                            </div>
                        ))}
                    </div>

                    {/* FAQ dynamique */}
                    {service.faq && service.faq.length > 0 && (
                        <div className="d-grid colums-2 mt-50">
                            <div className="item">
                                <div className="faq-style-one faq-style-two">
                                    <h2 className="mb-30">Questions fréquentes.</h2>
                                    <div className="accordion" id="faqAccordion">
                                        {service.faq.map((faqItem, idx) => (
                                            <div className="accordion-item" key={idx}>
                                                <h2 className="accordion-header" id={`heading${idx}`}>
                                                    <button
                                                        className={`accordion-button ${idx === 0 ? "" : "collapsed"}`}
                                                        type="button"
                                                        data-bs-toggle="collapse"
                                                        data-bs-target={`#collapse${idx}`}
                                                        aria-expanded={idx === 0 ? "true" : "false"}
                                                        aria-controls={`collapse${idx}`}
                                                    >
                                                        {faqItem.question}
                                                    </button>
                                                </h2>
                                                <div
                                                    id={`collapse${idx}`}
                                                    className={`accordion-collapse collapse ${idx === 0 ? "show" : ""}`}
                                                    aria-labelledby={`heading${idx}`}
                                                    data-bs-parent="#faqAccordion"
                                                >
                                                    <div className="accordion-body">
                                                        <p>{faqItem.answer}</p>
                                                    </div>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            {/* Section droite "What we do?" peut rester statique */}
                            <div className="item">
                                <h2>{service.approche}</h2>
                                <p>
                                    {service.approche1}
                                </p>
                                <p>
                                    {service.approche2}
                                </p>
                            </div>
                        </div>
                    )}

                    {/* Services populaires */}
                    <div className="services-more mt-100 mt-xs-30">
                        <h2 className="mb-20">Services</h2>
                        <div className="row">
                            {ServicesV1Data.slice(0, 3).map((item) => (
                                <div className="col-lg-4 col-md-6" key={item.id}>
                                    <div className="item">
                                        <img
                                            className="regular-img"
                                            src={`/assets/img/icon/${item.icon}`}
                                            alt={item.title}
                                            width={75}
                                            height={60}
                                        />
                                        <img
                                            className="light-img"
                                            src={`/assets/img/icon/${item.iconLight}`}
                                            alt={item.title}
                                            width={75}
                                            height={60}
                                        />
                                        <h4>
                                            <Link to={`/service-details/${item.id}`}>
                                                {item.title}
                                            </Link>
                                        </h4>
                                        <p>{item.text}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default ServiceDetailsContent;
