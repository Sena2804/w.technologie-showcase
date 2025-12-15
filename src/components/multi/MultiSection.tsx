import useHorizontalScroll from "../../hooks/useHorizontalScroll";
import ExpertiseV1 from "../expertise/ExpertiseV1";
import ProjectIdeaV1 from "../project/ProjectIdeaV1";
import WhyChooseV1 from "../whyChoose/WhyChooseV1";

interface Props {
  enableHorizontalScroll?: boolean;
}

const MultiSection = ({ enableHorizontalScroll = false }: Props) => {
  if (enableHorizontalScroll) {
    useHorizontalScroll();
  }

  return (
    <div className="multi-section">
      <div className="thecontainer">
        <div className="panel">
          <WhyChooseV1 />
        </div>
        <br />
        <div className="panel hide-on-mobile">
          <ExpertiseV1 />
        </div>
        <div className="panel hide-on-mobile">
          <ProjectIdeaV1 />
        </div>
      </div>
    </div>
  );
};

export default MultiSection;
