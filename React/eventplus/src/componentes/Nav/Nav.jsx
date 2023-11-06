import React from "react";
import "./Nav.css";

import logMobile from "../../assets/images/logo-white.svg";
import logDesktop from "../../assets/images/logo-pink.svg";

import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <nav className="navbar">
      <span className="navbar__close">X</span>

      <Link to="/" className="eventlogo">
        <img
          className="eventlogo__logo-image"
          src={window.innerWidth >= 992 ? logDesktop : logMobile}
          alt="Event Plus logo"
        />
      </Link>

      <div className="navbar__items-box">
        <Link to="/">Home</Link>
        <Link to="/eventos">Eventos</Link>
        <Link to="/tipo-eventos">Tipos de Eventos</Link>
        <Link to="/login">Usuários</Link>
      </div>
    </nav>
  );
};

export default Nav;
