import { Helmet } from "react-helmet-async";
import Breadcrumb from "../../components/breadcrumb/Breadcrumb";
import DarkClass from "../../components/classes/DarkClass";
import ClientsV1 from "../../components/clients/ClientsV1";
import FunFactV1 from "../../components/fact/FunFactV1";
import LayoutV1 from "../../components/layouts/LayoutV1";

import ServicesV1 from "../../components/services/ServicesV1";

//import ThemeDark from "../../components/switcher/ThemeDark";

const ServicesPage = () => {
  return (
    <>
      <Helmet>
        <title>Nos Services</title>
      </Helmet>

      <LayoutV1>
        <Breadcrumb title="Nos Services" breadCrumb="Nos Services" backgroundImage="/assets/img/shape/services.jpg" />
        <ServicesV1 sectionClass="default-padding-bottom" />
        <FunFactV1 sectionClass="default-padding-bottom" />
        <ClientsV1 sectionClass="bg-gray" />
        <DarkClass />
        {/* <ThemeDark /> */}
      </LayoutV1>
    </>
  );
};

export default ServicesPage;
