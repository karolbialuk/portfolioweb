import { React, useEffect, useState } from "react";
import "./About.scss";
import {
  react,
  html,
  css,
  javascript,
  redux,
  next,
  typescript,
  mui,
  scss,
  wordpress,
} from "../../assets/imgs/";
import Typewriter from "typewriter-effect";
import { useMediaQuery } from "react-responsive";

const About = () => {
  const [isContainerVisible, setisContainerVisible] = useState(false);
  const [isContainer2Visible, setisContainer2Visible] = useState(false);
  const [isElementVisible, setisElementVisible] = useState(false);

  const isTablet = useMediaQuery({ maxHeight: 768 });
  const isMobile = useMediaQuery({ maxHeight: 500 });

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const triggerHeight = isTablet ? 100 : isMobile ? 50 : 0;
      const trigger2Height = isTablet ? 200 : 650;
      const trigger3Height = 820;
      setisContainerVisible(scrollPosition > triggerHeight);
      setisElementVisible(scrollPosition > trigger2Height);
      setisContainer2Visible(scrollPosition > trigger3Height);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="about">
      <div
        className={`about__container ${isContainerVisible ? "visible" : ""}`}
      >
        <div className="about__header">
          <h1>
            <Typewriter
              options={{
                loop: true,
              }}
              onInit={(typewriter) => {
                typewriter
                  .typeString("O mnie")
                  .pauseFor(2000)
                  .deleteAll()
                  .typeString("Kariera")
                  .start();
              }}
            />
          </h1>
        </div>
        <div className="about__element-container">
          <div
            className={`about__element  ${isElementVisible ? "visible" : ""}`}
          >
            <div className="about__element-text-container">
              <div className="about__element-text-left">
                <p>Lut 2021 - Maj 2021</p>
                <p>Polska · Zdalnie</p>
                <ul>
                  <li>HTML5</li>
                  <li>CSS</li>
                  <li>JavaScript</li>
                  <li>WordPress</li>
                </ul>
              </div>
              <div className="about__element-text-right">
                <h3>Web Developer</h3>
                <h4>NS Code · Staż</h4>
                <p>
                  Staż studencki, wprowadzający do zagadnień związanych z
                  tworzeniem stron internetowych. Tworzone projekty opierały się
                  głównie na WordPress a praca dotyczyła głównie operowania na
                  szablonach, modyfikowania ich oraz wprowadzania nowych
                  elementów do gotowych stron internetowych.
                </p>
              </div>
            </div>
          </div>
          <div
            className={`about__element  ${isElementVisible ? "visible" : ""}`}
          >
            <div className="about__element-text-container">
              <div className="about__element-text-left">
                <p>Lut 2023 - Maj 2023</p>
                <p>Polska · Zdalnie</p>
                <ul>
                  <li>HTML5</li>
                  <li>CSS</li>
                  <li>JavaScript</li>
                  <li>WordPress</li>
                </ul>
              </div>
              <div className="about__element-text-right">
                <h3>Web Developer</h3>
                <h4>UDX · Staż</h4>
                <p>
                  Staż studencki, ukazujący szeroko przebieg oraz strukturę
                  pracy podczas tworzonych projektów stron internetowych.
                  Projekty skupiały się na WordPress. Wyjątkowo zdarzały się
                  strony internetowe, wykorzystujące czysty HTML w połączeniu z
                  JavaScript i CSS.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div
          className={`about__container-second ${
            isContainer2Visible ? "visible" : ""
          }`}
        >
          <div className="about__header">
            <h2>
              <Typewriter
                onInit={(typewriter) => {
                  typewriter.typeString("Techstack").pauseFor(2000).start();
                }}
              />
            </h2>
          </div>
          <div className="about__techstack-elements-container">
            <div className="about__techstack-element-container">
              <div className="about__techstack-element">
                <img src={react} alt="react" />
              </div>
              <div>React</div>
            </div>
            <div className="about__techstack-element-container">
              <div className="about__techstack-element">
                <img src={html} alt="html" />
              </div>
              <div>HTML</div>
            </div>
            <div className="about__techstack-element-container">
              <div className="about__techstack-element">
                <img src={css} alt="css" />
              </div>
              <div>CSS</div>
            </div>
            <div className="about__techstack-element-container">
              <div className="about__techstack-element">
                <img src={scss} alt="scss" />
              </div>
              <div>SCSS</div>
            </div>
            <div className="about__techstack-element-container">
              <div className="about__techstack-element">
                <img src={javascript} alt="javascript" />
              </div>
              <div>JavaScript</div>
            </div>
            <div className="about__techstack-element-container">
              <div className="about__techstack-element">
                <img src={redux} alt="redux" />
              </div>
              <div>Redux</div>
            </div>
            <div className="about__techstack-element-container">
              <div className="about__techstack-element">
                <img src={mui} alt="mui" />
              </div>
              <div>MUI</div>
            </div>
            <div className="about__techstack-element-container">
              <div className="about__techstack-element image-loading">
                <img src={wordpress} alt="wordpress" />
              </div>
              <div>Wordpress</div>
            </div>
            <div className="about__techstack-element-container">
              <div className="about__techstack-element image-loading">
                <img src={typescript} alt="typescript" />
              </div>
              <div>TypeScript</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export { About };
