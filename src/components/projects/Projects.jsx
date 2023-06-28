import { React, useState, useEffect } from "react";
import "./Projects.scss";
import Typewriter from "typewriter-effect";
import { img1, img2, img3, img4 } from "../../assets/imgs";
import { Link } from "react-router-dom";

const Projects = () => {
  const [isElementVisible, setisElementVisible] = useState(false);
  const [isContainerVisible, setisContainerVisible] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const triggerHeight = 1650;
      const trigger2Height = 1400;
      setisElementVisible(scrollPosition > triggerHeight);
      setisContainerVisible(scrollPosition > trigger2Height);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="projects">
      <div className="projects__container">
        <div className="projects__header">
          <h1>
            <Typewriter
              onInit={(typewriter) => {
                typewriter.typeString("Projekty").start();
              }}
            />
          </h1>
        </div>
        <div className="projects__grid-container">
          <div className="projects__element-container">
            <div className="projects_element">
              <div
                className={`projects__element-content ${
                  isContainerVisible ? "visible" : ""
                }`}
              >
                <div
                  className={`projects__element-img ${
                    isElementVisible ? "visible" : ""
                  }`}
                >
                  <a href="https://mojemecze.netlify.app">
                    <img src={img4} alt="img4" />

                    <div className="projects__element-text">
                      <p>
                        Strona została zaprojektowana tak, aby dostarczać
                        użytkownikom najświeższych informacji o wynikach meczów
                        oraz szczegółowych danych dotyczących przebiegu spotkań.
                      </p>
                      <p>
                        W projekcie zdecydowałem się użyć Reacta, popularnej
                        biblioteki JavaScript, która umożliwia budowanie
                        interaktywnych interfejsów użytkownika. Wykorzystanie
                        Redux, biblioteki zarządzania stanem, pozwoliło mi
                        efektywnie zarządzać danymi aplikacji i zapewnić ich
                        spójność w różnych komponentach.
                      </p>
                      <p>
                        Aby zapewnić atrakcyjny wygląd strony, skorzystałem z
                        Material-UI (Mui), biblioteki komponentów i stylów
                        opartych na Material Design. Dzięki temu udało mi się
                        stworzyć responsywny interfejs użytkownika, który
                        doskonale dostosowuje się do różnych urządzeń i
                        rozmiarów ekranów.
                      </p>
                    </div>
                  </a>
                </div>
              </div>
            </div>
            <div className="projects_element">
              <div
                className={`projects__element-content ${
                  isContainerVisible ? "visible" : ""
                }`}
              >
                <div
                  className={`projects__element-img ${
                    isElementVisible ? "visible" : ""
                  }`}
                >
                  <a href="https://mojnetflix.netlify.app">
                    <img src={img1} alt="img1" />

                    <div className="projects__element-text">
                      <p>
                        Projekt ten składa się z różnych komponentów React,
                        które zostały zoptymalizowane pod kątem wydajności i
                        reużywalności. Dzięki temu strona startowa Netflix jest
                        łatwa do skalowania i modyfikacji.
                      </p>
                      <p>
                        SCSS, czyli preprocesor CSS, został wykorzystany do
                        tworzenia elastycznego systemu stylów. Pozwoliło mi to
                        łatwo manipulować wyglądem elementów i utrzymać spójność
                        stylistyczną z oryginalnym designem Netflix.
                      </p>
                      <p>
                        Projekt odwzorowujący stronę startową Netflix jest nie
                        tylko estetyczny, ale również responsywny, dostosowujący
                        się do różnych urządzeń i rozmiarów ekranów. Dzięki temu
                        użytkownicy mogą korzystać z pełnej funkcjonalności
                        strony zarówno na komputerach, tabletach, jak i
                        smartfonach.
                      </p>
                    </div>
                  </a>
                </div>
              </div>
            </div>
            <div className="projects_element">
              <div
                className={`projects__element-content ${
                  isContainerVisible ? "visible" : ""
                }`}
              >
                <div
                  className={`projects__element-img ${
                    isElementVisible ? "visible" : ""
                  }`}
                >
                  <a href="https://mojgenerator.netlify.app">
                    <img src={img2} alt="img2" />

                    <div className="projects__element-text">
                      <p>
                        Aplikacja umożliwia użytkownikom tworzenie bezpiecznych
                        haseł poprzez dostęp do różnych funkcji, takich jak
                        zmiana znaków, regulacja długości oraz wyświetlanie siły
                        generowanego hasła.
                      </p>
                      <p>
                        Do stylizacji aplikacji użyłem SCSS, który jest
                        preprocesorem CSS. Pozwoliło mi to na tworzenie
                        elastycznego systemu stylów, który nadaje aplikacji
                        atrakcyjny wygląd i jednocześnie jest łatwy w
                        utrzymaniu. Dzięki temu aplikacja jest przyjemna dla oka
                        i zapewnia spójność stylistyczną.
                      </p>
                      <p>
                        Aplikacja do generowania haseł oferuje różnorodne
                        funkcje, takie jak możliwość wyboru zestawu znaków,
                        które mają być uwzględniane w haśle, regulacja długości
                        hasła oraz wyświetlanie siły generowanego hasła.
                        Użytkownicy mogą dostosować te parametry według swoich
                        potrzeb i otrzymać bezpieczne hasło, które spełnia ich
                        wymagania.
                      </p>
                    </div>
                  </a>
                </div>
              </div>
            </div>
            <div className="projects_element">
              <div
                className={`projects__element-content ${
                  isContainerVisible ? "visible" : ""
                }`}
              >
                <div
                  className={`projects__element-img ${
                    isElementVisible ? "visible" : ""
                  }`}
                >
                  <a href="https://mojamuzyka.netlify.app">
                    <img src={img3} alt="img3" />

                    <div className="projects__element-text">
                      <p>
                        Aplikacja odwzorowująca spotify, oparta jest na
                        technologiach takich jak React, Redux i SCSS, umożliwia
                        użytkownikom logowanie się do swojego konta Spotify
                        Premium oraz dostęp do różnych funkcji, takich jak
                        odtwarzanie muzyki, wyszukiwanie utworów i playlist,
                        tworzenie nowych playlist oraz dodawanie do nich
                        ulubionych piosenek.
                      </p>
                      <p>
                        SCSS został zastosowany w celu tworzenia elastycznego
                        systemu stylów, który nadaje aplikacji wyjątkowy wygląd
                        i spójność z oryginalnym interfejsem Spotify. Dzięki
                        temu użytkownicy aplikacji mogą łatwo rozpoznać znane im
                        elementy i korzystać z aplikacji bez większych
                        trudności.
                      </p>
                      <p>
                        Aplikacja oferuje pełen dostęp do swoich możliwości
                        tylko po zalogowaniu się kontem Spotify Premium! inaczej
                        mogą wystąpić problemy.
                      </p>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export { Projects };
