import { useParams } from "react-router-dom";
import MultiSection from "../../components/multi/MultiSection";
import BrandV1 from "../../components/brand/BrandV1";
import Breadcrumb from "../../components/breadcrumb/Breadcrumb";
import DarkClass from "../../components/classes/DarkClass";
import LayoutV1 from "../../components/layouts/LayoutV1";
import TeamDetails from "../../components/team/TeamDetails";
import TeamQualification from "../../components/team/TeamQualification";
import TeamV1Data from "../../../src/assets/jsonData/team/TeamV1Data.json"
import { Helmet } from "react-helmet-async";
import ThemeDark from "../../components/switcher/ThemeDark";

const TeamDetailsPage = () => {

    const { id } = useParams();
    const data = TeamV1Data.find(team => team.id === parseInt(id || '0'));

    return (
        <>
            <Helmet>
                <title>Détails de l'équipe</title>
            </Helmet>

            <LayoutV1>
                <Breadcrumb title={"Détails de l'équipe"} breadCrumb={"Détails de l'équipe"} />
                {data && <TeamDetails teamInfo={data} sectionClass='default-padding-bottom' />}
                <MultiSection />
                <BrandV1 />
                <TeamQualification />
                <DarkClass />
                {/*<ThemeDark /> */}
            </LayoutV1>
        </>
    );
};

export default TeamDetailsPage;