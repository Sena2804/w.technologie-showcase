import { Helmet } from "react-helmet-async";
import AboutV7 from "../../components/about/AboutV7";
import AwardV1 from "../../components/awards/AwardV1";
import BannerV8 from "../../components/banner/BannerV8";
import BrandV2 from "../../components/brand/BrandV2";
import ClientsV1 from "../../components/clients/ClientsV1";
import FooterV3 from "../../components/footer/FooterV3";
import HeaderV3 from "../../components/header/HeaderV3";
import PortfolioV2 from "../../components/portfolio/PortfolioV2";
import ServicesV1 from "../../components/services/ServicesV1";
import TestimonialV3 from "../../components/testimonial/TestimonialV3";
import DarkClass from "../../components/classes/DarkClass";
import ThemeDark from "../../components/switcher/ThemeDark";
import TeamV1 from "../../components/team/TeamV1";

const Home3 = () => {
  return (
    <>
      <Helmet>
        <title>W.Technologie - SARL</title>
      </Helmet>

      <div className="smooth-scroll-container">
        <HeaderV3 />
        <BannerV8 />
        <ServicesV1 sectionClass="default-padding bg-gray" hasTitle={true} />
        <AboutV7 sectionClass="bg-gray" />
        
        <TeamV1
          hasTitle={true}
          sectionClass="bg-gray overflow-hidden blurry-shape-left"
        />
        <BrandV2 />
        <PortfolioV2 hasTitle={true} sectionClass="default-padding" />

        <ClientsV1 sectionClass="bg-gray overflow-hidden blurry-shape-left" />
        
        <TestimonialV3 />
        <FooterV3 />
        <DarkClass />
        {/* <ThemeDark /> */}
      </div>
    </>
  );
};

export default Home3;
