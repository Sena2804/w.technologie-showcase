import { Swiper, SwiperSlide } from "swiper/react";
import { Keyboard } from "swiper/modules";
import SplitText from "../animation/SplitText.jsx";
import SingleTeamV1 from "./SingleTeamV1";
import TeamV1Data from "../../../src/assets/jsonData/team/TeamV1Data.json";

interface DataType {
  sectionClass?: string;
  hasTitle?: boolean;
}

const TeamV1 = ({ sectionClass, hasTitle }: DataType) => {
  // 🔹 1. GÉRANT (1 seul)
  const manager = TeamV1Data.find(member =>
    member.designation.toLowerCase().includes("gérant")
  );

  // 🔹 2. ÉQUIPE MARKETING & COMMERCIAL (3 employés)
  const marketingTeam = TeamV1Data.filter(member =>
    member.designation.toLowerCase().includes("marketing")||
    member.designation.toLowerCase().includes("commercial")
  );

  // 🔹 3. DÉVELOPPEUR (1 seul)
  const developer = TeamV1Data.find(member =>
    member.designation.toLowerCase().includes("developer") ||
    member.designation.toLowerCase().includes("développeur")
  );

  return (
    <div
      className={`team-style-one-area relative overflow-hidden default-padding-bottom ${
        sectionClass || ""
      }`}
    >
      {/* TITRE */}
      {hasTitle && (
        <div className="team-style-one-heading">
          <div className="container">
            <div className="row">
              <div className="col-xl-6 offset-xl-3 col-lg-8 offset-lg-2 text-center">
                <div className="site-heading">
                  <h4 className="sub-title">Notre Équipe</h4>
                  <h2 className="title split-text">
                    <SplitText
                      delay={40}
                      animationFrom={{
                        opacity: 0,
                        transform: "translate3d(0,50px,0)",
                      }}
                      animationTo={{
                        opacity: 1,
                        transform: "translate3d(0,0,0)",
                      }}
                      easing="easeOutCubic"
                    >
                      Des talents engagés pour servir
                    </SplitText>
                  </h2>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      <div className="container">
        <div className="team-style-one-items">
          <div className="row">
            {/* ONGLET GAUCHE */}
            <div className="col-xl-4">
              <ul className="nav nav-tabs" role="tablist">
                <li className="nav-item">
                  <button
                    className="nav-link active"
                    data-bs-toggle="tab"
                    data-bs-target="#tab1"
                  >
                    <strong>Gérant</strong>
                  </button>
                </li>

                <li className="nav-item">
                  <button
                    className="nav-link"
                    data-bs-toggle="tab"
                    data-bs-target="#tab2"
                  >
                    <strong>Équipe Marketing & Commercial</strong>
                  </button>
                </li>

                <li className="nav-item">
                  <button
                    className="nav-link"
                    data-bs-toggle="tab"
                    data-bs-target="#tab3"
                  >
                    <strong>Développeur</strong>
                  </button>
                </li>
              </ul>
            </div>

            {/* CONTENU DROIT */}
            <div className="col-xl-7 offset-xl-1">
              <div className="tab-content">
                {/* TAB 1 – GÉRANT */}
                <div className="tab-pane fade show active" id="tab1">
                  <Swiper slidesPerView={1} modules={[Keyboard]}>
                    {manager && (
                      <SwiperSlide>
                        <SingleTeamV1 team={manager} />
                      </SwiperSlide>
                    )}
                  </Swiper>
                </div>

                {/* TAB 2 – MARKETING (3) */}
                <div className="tab-pane fade" id="tab2">
                  <Swiper
                    slidesPerView={1}
                    spaceBetween={30}
                    breakpoints={{
                      768: { slidesPerView: 2, spaceBetween: 60 },
                    }}
                    modules={[Keyboard]}
                  >
                    {marketingTeam.map(member => (
                      <SwiperSlide key={member.id}>
                        <SingleTeamV1 team={member} />
                      </SwiperSlide>
                    ))}
                  </Swiper>
                </div>

                {/* TAB 3 – DÉVELOPPEUR (1) */}
                <div className="tab-pane fade" id="tab3">
                  <Swiper slidesPerView={1} modules={[Keyboard]}>
                    {developer && (
                      <SwiperSlide>
                        <SingleTeamV1 team={developer} />
                      </SwiperSlide>
                    )}
                  </Swiper>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeamV1;
