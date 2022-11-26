import React from "react";
import { Link } from "react-router-dom";
import "../../styles/components/header.css";

function Header() {
  return (
    <header>
      <h1>Logo</h1>
      <section className="header-right">
        <Link to="/" className="btn btn-primary">
          Home
        </Link>
        <Link to="/" className="btn btn-primary">
          Antrian
        </Link>
        <p>Nama</p>
        <Link to="/login" className="btn btn-primary">
          Login
        </Link>
      </section>
    </header>
  );
}

export default Header;
