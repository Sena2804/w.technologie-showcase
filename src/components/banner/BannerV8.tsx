import illustration1 from '/assets/img/illustration/1.png';
import { Link } from "react-router-dom";
import CountUp from 'react-countup';
import SplitText from "../animation/SplitText.jsx"

const BannerV8 = () => {
    return (
        <>
            <div className="banner-style-eight-area bg-cover"
                style={{ backgroundImage: 'url(/assets/img/shape/3.jpg)' }}>
                <div className="light-banner-active bg-gray bg-cover" style={{ backgroundImage: 'url(/assets/img/shape/4.jpg)' }} />
                <div className="container">
                    <div className="row">
                        <div className="col-xl-15">
                            <div className="banner-style-eight-heading">
                                <div className="banner-title">

                                    <h2>
                                        <SplitText
                                            className="title-left split-text"
                                            delay={150}
                                            animationFrom={{ opacity: 0, transform: 'translate3d(0,50px,0)' }}
                                            animationTo={{ opacity: 1, transform: 'translate3d(0,0,0)' }}
                                            easing="easeOutCubic"
                                            threshold={0.2}
                                            rootMargin="-50px"
                                        >
                                            W.
                                        </SplitText>
                                    </h2>

                                    <h2 className="title-right split-text">
                                        <SplitText
                                            delay={150}
                                            animationFrom={{ opacity: 0, transform: 'translate3d(0,50px,0)' }}
                                            animationTo={{ opacity: 1, transform: 'translate3d(0,0,0)' }}
                                            easing="easeOutCubic"
                                            threshold={0.2}
                                            rootMargin="-50px"
                                        >
                                            Technologie
                                        </SplitText>
                                    </h2>

                                </div>
                            </div>
                        </div>
                        
                    </div>
                    <div className="row">
                        <div className="col-xl-7">
                            <div className="d-grid">
                                <h4>Informatique</h4>
                                <div className="right">
                                    <p>
                                        W.Technologie est une entreprise innovante spécialisée dans les solutions technologiques avancées.
                                    </p>
                                    <Link className="btn-animation mt-10" to="/about-us"><i className="fas fa-arrow-right" /> <span>En savoir plus</span></Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-4 offset-xl-1">
                            <div className="card-style-one">
                                <div className="bottom">
                                    <div className="fun-fact">
                                        <div className="counter">
                                            <div className="timer"><CountUp end={150} enableScrollSpy /></div>
                                            <div className="operator">+</div>
                                        </div>
                                        <span className="medium">Projets terminés</span>
                                    </div>
                                    <Link to="/project"><i className="fas fa-long-arrow-right" /></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default BannerV8;