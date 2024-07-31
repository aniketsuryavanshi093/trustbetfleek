import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode } from "swiper/modules";
import s from "./roadmap.module.css";
import "swiper/css";
import "./swiper.css";
import Ok from "../../assets/imgs/ok.svg";
import Loading from "../../assets/imgs/loading.svg";
import { SwiperButtons } from "./swiperbuttons";
import { useState, useEffect } from "react";
import { PageSection } from "../../page-section";
export const Roadmap = () => {
  const [slidesPerView, setSlidesPerView] = useState(3);

  useEffect(() => {
    const updateSlidesPerView = () => {
      if (window.innerWidth <= 820) {
        setSlidesPerView(1);
      } else {
        setSlidesPerView(2);
      }
    };

    updateSlidesPerView();
    window.addEventListener("resize", updateSlidesPerView);

    return () => window.removeEventListener("resize", updateSlidesPerView);
  }, []);
  return (
    <section
      id={PageSection.ROADMAP}
      className={s["section"]}
      style={{ position: "relative" }}
    >
      <div className={s["roadmap-bg"]}></div>
      <div className="roadmap-container">
        <Swiper
          slidesPerView="auto"
          spaceBetween={30}
          freeMode={true}
          pagination={{
            clickable: true,
          }}
          modules={[FreeMode]}
          className="mySwiper"
        >
          <div className={s["roadmap-title"]}>
            <h2>
              TrustBet On-Chain's{" "}
              <span className="text-[--secondary-color]">roadmap</span>
            </h2>
            <SwiperButtons />
          </div>
          <div className="myswiperdiv">
            <SwiperSlide className="swiper-slide-1">
              <h3>Q1 2024</h3>
              <div className="swiper-line"></div>
              <ul>
                <li>
                  <img src={Ok} alt="" />
                  <p>Angel investor round (Locked for 2 years from TGE)</p>
                </li>
                <li>
                  <img src={Ok} alt="" />
                  <p>Obtaining DAO LLC</p>
                </li>
                <li>
                  <img src={Ok} alt="" />
                  <p>Obtaining gaming license</p>
                </li>
                <li>
                  <img src={Ok} alt="" />
                  <p>On-boarding team members including consultants</p>
                </li>
                <li>
                  <img src={Ok} alt="" />
                  <p>Seed round completion</p>
                </li>
                <li>
                  <img src={Ok} alt="" />
                  <p>Pre-sale website construction</p>
                </li>
                <li>
                  <img src={Ok} alt="" />
                  <p>Assure DEFI KYC verification</p>
                </li>
                <li>
                  <img src={Ok} alt="" />
                  <p>Launch pre-sale website</p>
                </li>
                <li>
                  <img src={Ok} alt="" />
                  <p>Marketing for presale</p>
                </li>
              </ul>
            </SwiperSlide>
            <SwiperSlide className="swiper-slide-1">
              <h3>Q2 2024</h3>
              <div className="swiper-line"></div>
              <ul>
                <li>
                  <img src={Ok} alt="" />
                  <p>Main website construction initiation,</p>
                </li>
                <li>
                  <img src={Ok} alt="" />
                  <p>Audit of Website</p>
                </li>
                <li>
                  <img src={Ok} alt="" />
                  <p>Marketing program for presale.</p>
                </li>
              </ul>
            </SwiperSlide>
            <SwiperSlide className="swiper-slide-1">
              <h3>Q3 2024</h3>
              <div className="swiper-line"></div>
              <ul>
                <li>
                  <img src={Ok} alt="" />
                  <p>Presale program marketing and continuation</p>
                </li>
                <li>
                  <img src={Loading} alt="" />
                  <p>
                    Incorporate staking facility in to DAO for passive income.
                  </p>
                </li>
                <li>
                  <img src={Loading} alt="" />
                  <p>Launch website in beta</p>
                </li>
                <li>
                  <img src={Loading} alt="" />
                  <p> Announce Tier 1 Exchange listing.</p>
                </li>
                <li>
                  <img src={Loading} alt="" />
                  <p> Announce Tier 1 Exchange listing.</p>
                </li>
                <li>
                  <img src={Loading} alt="" />
                  <p>
                    Commence work on additional applications of the main UI.{" "}
                  </p>
                </li>
              </ul>
            </SwiperSlide>
            <SwiperSlide className="swiper-slide-1">
              <h3>Q4 2024</h3>
              <div className="swiper-line"></div>
              <ul>
                <li>
                  <img src={Loading} alt="" />
                  <p>List on Tier 1 Exchange.</p>
                </li>
                <li>
                  <img src={Loading} alt="" />
                  <p>Testing of passive income functionality</p>
                </li>
                <li>
                  <img src={Loading} alt="" />
                  <p> Register with Coin Gecko.</p>
                </li>
                <li>
                  <img src={Loading} alt="" />
                  <p>Commence work on DEX and Derivatives platforms,</p>
                </li>
                <li>
                  <img src={Loading} alt="" />
                  <p>Website update with NFT functionality.</p>
                </li>
                <li>
                  <img src={Loading} alt="" />
                  <p>First voting proposal for TBET</p>
                </li>
                <li>
                  <img src={Loading} alt="" />
                  <p>
                    TrustBet On-Chain released as a full Autonomous
                    Organisation.
                  </p>
                </li>
              </ul>
            </SwiperSlide>
          </div>
        </Swiper>
      </div>
    </section>
  );
};
