import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { GrLogin, GrLogout } from "react-icons/gr";
import "../../styles/layout/header.css";
import avatarImg from "../../public/images/avatar.png";
import appLogo from "../../public/images/ngantriDok-logo.png";
import { logout } from "../../scripts/auth";

const Header = ({ authedUser, setAuthedUser }) => {
  const navigate = useNavigate();

  const handleOnClickLogout = () => {
    logout();
    setAuthedUser(null);
    navigate("/");
  };

  return (
    <header id="headerMain">
      <Link to="/">
        <img src={appLogo} alt="NgantriDok" className="app-img-logo" />
      </Link>
      <section className="header-right">
        <Link to="/list" className="btn btn-primary">
          Daftar Tempat
        </Link>
        <Link to="/queue" className="btn btn-primary">
          Antrian
        </Link>
        <div className="header-user-info">
          {authedUser === null ? (
            <Link to="/login" className="btn-login-header">
              <GrLogin />
            </Link>
          ) : (
            <>
              <p>{authedUser.name}</p>
              <img src={avatarImg} alt="avatar" className="header-avatar" />
              <button onClick={() => handleOnClickLogout()} className="btn-logout-header">
                <GrLogout />
              </button>
            </>
          )}
        </div>
      </section>
    </header>
  );
};

export default Header;
