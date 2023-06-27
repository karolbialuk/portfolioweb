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
} from "../../assets/imgs/";
import Typewriter from "typewriter-effect";
const About = () => {
  const [isContainerVisible, setisContainerVisible] = useState(false);
  const [isContainer2Visible, setisContainer2Visible] = useState(false);
  const [isElementVisible, setisElementVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const triggerHeight = 400;
      const trigger2Height = 650;
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
                  Staż mający na celu pokazanie struktury pracy w firmie
                  programistycznej zajmującej się tworzeniem stron internetowych
                  w różnych środowiskach oraz dostarczenie podstawowej wiedzy z
                  zakresu tworzenia stron internetowych. w różnych środowiskach
                  i dostarczenie podstawowej wiedzy z zakresu tworzenia stron
                  internetowych.
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
                  Staż mający na celu pokazanie struktury pracy w firmie
                  programistycznej zajmującej się tworzeniem stron internetowych
                  w różnych środowiskach i dostarczenie podstawowej wiedzy z
                  zakresu tworzenia stron internetowych.
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
              <div className="about__techstack-element image-loading">
                <img src={next} alt="next" />
              </div>
              <div>Next.js</div>
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
