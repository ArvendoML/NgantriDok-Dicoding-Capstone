import React from "react";
import { Link } from "react-router-dom";
import { GrLogout } from "react-icons/gr";
import "../../../styles/layout/header.css";
import dummyImg from "../../../public/images/rumah-sakit.png";
import appLogo from "../../../public/images/ngantriDok-logo.png";

const HeaderOwner = ({ handleOnClickLogout, authedUser }) => {
  return (
    <header id="headerOwner">
      <Link to="/owner">
        <img src={appLogo} alt="NgantriDok" className="app-img-logo" />
      </Link>
      <section className="header-right">
        <a href="#top" className="btn btn-primary">
          Informasi
        </a>
        <a href="#hospitalPatientList" className="btn btn-primary">
          Daftar Pasien
        </a>
        <div className="header-user-info">
          <p>{authedUser.name}</p>
          <img src={dummyImg} alt="avatar" className="header-avatar" />
          <button onClick={() => handleOnClickLogout()} className="btn-logout-header">
            <GrLogout />
          </button>
        </div>
      </section>
    </header>
  );
};

export default HeaderOwner;
