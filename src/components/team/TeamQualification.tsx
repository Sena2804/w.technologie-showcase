import SkillProgressData from "../../../src/assets/jsonData/progress/SkillProgressData.json"
import SkillProgress from "../process/SkillProgress";

const TeamQualification = () => {
    return (
        <>
            <div className="team-qualifcations default-padding">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-6">
                            <div className="qualification-grid">
                                <h2>Expertise Pro</h2>
                                <div className="qualification-item">
                                    <i className="flaticon-data-management" />
                                    <h4>Base de données</h4>
                                </div>
                                <div className="qualification-item">
                                    <i className="flaticon-marketing-agent" />
                                    <h4>Marketing numérique</h4>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-6">
                            <div className="skill-items pl-50 pl-md-0 pl-xs-0 mt-md-50 mt-xs-30">
                                <h2>Compétences personnelles</h2>
                                {SkillProgressData.map(skill =>
                                    <SkillProgress skill={skill} key={skill.id} />
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default TeamQualification;