import React from "react";
import { Link } from "react-router-dom";
import "../../styles/layout/header.css";
import avatarImg from "../../public/images/avatar.png";

function Header() {
  return (
    <header>
      <Link to="/">
        <h1>Logo</h1>
      </Link>
      <section className="header-right">
        <Link to="/queue" className="btn btn-primary">
          Daftar Tempat
        </Link>
        <Link to="/queue" className="btn btn-primary">
          Antrian
        </Link>
        <div className="header-user-info">
          <p>Nama</p>
          <img src={avatarImg} alt="avatar" className="header-avatar" />
          <Link to="/login" className="btn btn-primary">
            Login
          </Link>
        </div>
      </section>
    </header>
  );
}

export default Header;
