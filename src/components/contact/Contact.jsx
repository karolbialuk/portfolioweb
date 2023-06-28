import { React, useEffect, useState } from "react";
import "./Contact.scss";
import { github, gmail, linkedin } from "../../assets/imgs";
import Typewriter from "typewriter-effect";
import { useMediaQuery } from "react-responsive";

const Contact = () => {
  const [isContainerVisible, setisContainerVisible] = useState(false);
  const isMobile = useMediaQuery({ maxHeight: 768 });

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const triggerHeight = isMobile ? 2200 : 2700;

      setisContainerVisible(scrollPosition > triggerHeight);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <div className="contact">
      <div className="contact__container">
        <div className="contact__header">
          <h1>
            <Typewriter
              onInit={(typewriter) => {
                typewriter.typeString("Kontakt").start();
              }}
            />
          </h1>
          <h3>
            Masz pytanie, propozycję lub po prostu chcesz się przywitać? Śmiało.
          </h3>
        </div>
        <div className="contact__icons">
          <div
            className={`contact__icons-container ${
              isContainerVisible ? "visible" : ""
            }`}
          >
            <a href="https://www.linkedin.com/in/karol-bialuk-61772227b/">
              <div className="contact__icon">
                <img src={linkedin} alt="linkedin" />
              </div>
            </a>
            <a href="https://github.com/karolbialuk">
              <div className="contact__icon">
                <img src={github} alt="github" />
              </div>
            </a>
            <a href="mailto: karol.bialuk@gmail.com">
              <div className="contact__icon">
                <img src={gmail} alt="gmail" />
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export { Contact };
