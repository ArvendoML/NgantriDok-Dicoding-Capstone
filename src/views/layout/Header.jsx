import React from "react";
import { Link } from "react-router-dom";
import "../../styles/layout/header.css";
import appLogo from "../../public/images/ngantriDok-logo.png";
import HamburgerButton from "../components/HamburgerButton";
import HeaderUser from "../components/header/HeaderUser";

const Header = ({ authedUser, handleOnClickLogout }) => {
  return (
    <header id="headerMain">
      <Link to="/">
        <img src={appLogo} alt="NgantriDok" className="app-img-logo" />
      </Link>
      <HamburgerButton authedUser={authedUser} handleOnClickLogout={handleOnClickLogout} />
      <section className="header-right">
        <Link to="/list" className="btn btn-primary">
          Daftar Tempat
        </Link>
        <Link to="/queue" className="btn btn-primary">
          Antrian
        </Link>
        <HeaderUser authedUser={authedUser} handleOnClickLogout={handleOnClickLogout} />
      </section>
    </header>
  );
};

export default Header;
