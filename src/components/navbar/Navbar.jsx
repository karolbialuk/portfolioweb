import React from "react";
import "./Navbar.scss";
import { RiHome2Line } from "react-icons/ri";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navbar__container">
        <div className="navbar__container-items">
          <div className="navbar__icon">
            <RiHome2Line size={20} />
          </div>

          <div className="navbar__item">
            <div>O mnie</div>
            <div>Projekty</div>
            <div>Kontakt</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export { Navbar };
