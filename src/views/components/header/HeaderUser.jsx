import React from "react";
import { GrLogin, GrLogout } from "react-icons/gr";
import { Link } from "react-router-dom";
import avatarImg from "../../../public/images/avatar.png";

const HeaderUser = ({ authedUser, handleOnClickLogout }) => {
  return (
    <>
      <div className="header-user-info">
        {authedUser === null ? (
          <Link to="/login" className="btn-login-header">
            <GrLogin />
          </Link>
        ) : (
          <>
            <p className="header-username">{authedUser.name}</p>
            <img src={avatarImg} alt="avatar" className="header-avatar" />
            <button onClick={() => handleOnClickLogout()} className="btn-logout-header">
              <GrLogout />
            </button>
          </>
        )}
      </div>
    </>
  );
};

export default HeaderUser;
