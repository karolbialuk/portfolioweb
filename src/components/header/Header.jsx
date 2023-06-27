import React from "react";
import "./Header.scss";
import { Navbar } from "../index";
import Typewriter from "typewriter-effect";

const Header = () => {
  return (
    <div className="header">
      <div className="header__container">
        <div className="header__container-text">
          <div className="header__container-text-h1">
            <h1>
              <Typewriter
                onInit={(typewriter) => {
                  typewriter
                    .typeString("Karol Bialuk")
                    .pauseFor(500)
                    .deleteAll()
                    .typeString("Karol Bialuk React Web Developer")
                    .start();
                }}
              />
            </h1>
          </div>

          <p>
            Jestem web developerem specjalizującym się w tworzeniu dynamicznych
            stron i aplikacji przy użyciu frameworka{" "}
            <span style={{ fontWeight: "bold" }}>React</span>. Moja pasja do
            programowania połączona z kreatywnym podejściem do projektowania
            umożliwia mi tworzenie interaktywnych i nowoczesnych rozwiązań.
          </p>
          <p>
            Zajmuję się projektowaniem i programowaniem stron internetowych,
            począwszy od prostych stron informacyjnych, po skomplikowane
            aplikacje internetowe. Stawiam na responsywność i skalowalność, aby
            moje projekty wyglądały świetnie i działały sprawnie na różnych
            urządzeniach <span style={{ fontWeight: "bold" }}> :)</span>
          </p>
          <div className="header__arrows-container">
            <div class="header__arrows"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export { Header };
