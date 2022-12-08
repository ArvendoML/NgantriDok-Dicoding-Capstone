import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Offcanvas from "react-bootstrap/Offcanvas";
import { GrLogin, GrLogout } from "react-icons/gr";
import { Link } from "react-router-dom";
import avatarImg from "../../public/images/avatar.png";

const HamburgerButton = ({ authedUser, handleOnClickLogout }) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  let navigation = (
    <>
      <Link to="/list" className="btn btn-primary">
        Daftar Tempat
      </Link>
      <Link to="/queue" className="btn btn-primary">
        Antrian
      </Link>
    </>
  );

  if (authedUser) {
    if (authedUser.role === "owner") {
      navigation = (
        <>
          <a href="#top" className="btn btn-primary">
            Atas
          </a>
          <a href="#hospitalPatientList" className="btn btn-primary">
            Daftar Pasien
          </a>
        </>
      );
    }
  }

  return (
    <>
      <Button variant="primary" onClick={handleShow} className="me-2 btn-hamburger-mobile">
        &#8801;
      </Button>

      <Offcanvas show={show} onHide={handleClose} placement="end">
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>
            {authedUser === null ? (
              <>
                <Link to="/login" className="btn-login-header">
                  <GrLogin />
                </Link>
                <h5 className="h5">Login</h5>
              </>
            ) : (
              <>
                <button onClick={() => handleOnClickLogout()} className="btn-logout-header">
                  <GrLogout />
                </button>
                Logout
              </>
            )}
          </Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          {authedUser !== null ? (
            <>
              <div className="header-mobile_user_info">
                <img src={avatarImg} alt="avatar" className="header-avatar" />
                <p className="header-username">{authedUser.name}</p>
              </div>
              <hr />
            </>
          ) : (
            <></>
          )}

          <div className="header-mobile_navigation">{navigation}</div>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
};

export default HamburgerButton;
