import React from "react";
import { Link } from "react-router-dom";
import "../../../styles/layout/header.css";
import avatarImg from "../../../public/images/avatar.png";
import appLogo from "../../../public/images/ngantriDok-logo.png";

const HeaderOwner = () => {
  return (
    <header id="headerOwner">
      <Link to="/">
        <img src={appLogo} alt="NgantriDok" className="app-img-logo" />
      </Link>
      <section className="header-right">
        <a href="#top" className="btn btn-primary">
          Daftar Tempat
        </a>
        <a href="#hospital-patient-list" className="btn btn-primary">
          Antrian
        </a>
        <div className="header-user-info">
          <p>Nama</p>
          <img src={avatarImg} alt="avatar" className="header-avatar" />
          <Link to="/login" className="btn btn-primary btn-login-header">
            Login
          </Link>
        </div>
      </section>
    </header>
  );
};

export default HeaderOwner;
