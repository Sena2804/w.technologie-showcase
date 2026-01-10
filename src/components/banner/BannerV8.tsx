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
                        <div className="col-xl-15 banner_fist_part">
                            <div className="banner-style-eight-heading">
                                <div className="banner-title mt-80 mb-30">

                                    <div className="banner_text_container">
                                        {/* <svg 
                                            style={{ position: 'absolute', top: '-40px', right: '-20px', width: '50px', overflow: 'visible' }} 
                                            viewBox="0 0 50 50" 
                                            fill="none" 
                                            stroke="#ffffffff" 
                                            strokeWidth="7" 
                                            strokeLinecap="round"
                                        >
                                            <line x1="15" y1="35" x2="5" y2="20" /> 
                                            <line x1="25" y1="30" x2="25" y2="10" />
                                            <line x1="35" y1="35" x2="45" y2="20" />
                                        </svg> */}
                                        <h2 className="mb-0">
                                            <SplitText
                                                className="title-left split-text banner_text_orange"
                                                delay={150}
                                                animationFrom={{ opacity: 0, transform: 'translate3d(0,50px,0)' }}
                                                animationTo={{ opacity: 1, transform: 'translate3d(0,0,0)' }}
                                                easing="easeOutCubic"
                                            >
                                                W.
                                            </SplitText>
                                        </h2>
                                    </div>

                                    <h2 className="split-text">
                                        <SplitText
                                            delay={150}
                                            animationFrom={{ opacity: 0, transform: 'translate3d(0,50px,0)' }}
                                            animationTo={{ opacity: 1, transform: 'translate3d(0,0,0)' }}
                                            easing="easeOutCubic"
                                            threshold={0.2}
                                            rootMargin="-50px"
                                        >
                                            Tech
                                        </SplitText>
                                    </h2>

                                </div>
                                <div className='banner_arrow'>
                                    <img src="/assets/img/arrow-right.png" alt="arrow_right" className='arrow_right' />
                                    <h2 className="title-right split-text">
                                        <SplitText
                                            delay={150}
                                            animationFrom={{ opacity: 0, transform: 'translate3d(0,50px,0)' }}
                                            animationTo={{ opacity: 1, transform: 'translate3d(0,0,0)' }}
                                            easing="easeOutCubic"
                                            threshold={0.2}
                                            rootMargin="-50px"
                                        >
                                            Informatique
                                        </SplitText>
                                    </h2>
                                </div>
                            </div>
                            <div className='banner_right'>
                                <img src="/assets/img/banner/index.webp" alt="index.webp" />
                            </div>
                        </div>
                        <div className='banner_description'>
                            <img src="/assets/img/banner/background.jpg" alt="background.jpg" className='rounded-circle'/>
                            <p>W.Technologies est une entreprise innovante spécialisée dans les solutions technologiques avancées.</p>
                        </div>
                        
                    </div>
                    <div className="row">
                        <div className="col-xl-7">
                            <div className="d-grid">
                                <div className="right">
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