import React from "react";
import { Link } from "react-router-dom";
import { TbHandClick } from "react-icons/tb";
import { BiStopwatch } from "react-icons/bi";
import { BsHandThumbsUp } from "react-icons/bs";
import heroImg from "../../public/images/hero-img.png";
import "../../styles/pages/mainPage.css";

const HomePage = () => {
  return (
    <main id="mainPage">
      <section className="main-hero-section">
        <img src={heroImg} alt="Hero Queue" />
        <h2>
          NgantriDok,
          <br />
          Nunggu Antrian Dirumah Aja Yuk!
        </h2>
      </section>

      <section className="main-why-desc">
        <h3>Kenapa menggunakan NgantriDok?</h3>
        <div className="main-why-desc_icons">
          <div className="main-why-desc_icons-card why-icon-easy">
            <h5>
              <TbHandClick />
              Mudah
            </h5>
            <p>NgantriDok sangat mudah untuk digunakan</p>
          </div>
          <div className="main-why-desc_icons-card why-icon-fast">
            <h5>
              <BiStopwatch />
              Cepat
            </h5>
            <p>NgantriDok tidak akan memakan waktu yang lama untuk digunakan</p>
          </div>
          <div className="main-why-desc_icons-card why-icon-practical">
            <h5>
              <BsHandThumbsUp />
              Praktis
            </h5>
            <p>NgantriDok sangat mudah untuk dipahami dengan fitur-fitur yang berguna</p>
          </div>
        </div>
      </section>

      <section className="main-register">
        <h3>Daftar Sekarang Juga!</h3>
        <hr />
        <div className="main-register_link">
          <div className="main-register_link_section">
            <h3>Belum punya akun?</h3>
            <Link to="/register/user" className="btn btn-primary">
              Daftar Disini
            </Link>
          </div>
          <div className="main-register_link_section">
            <h3>Pemilik Rumah Sakit?</h3>
            <Link to="/register/hospital" className="btn btn-info">
              Daftar Disini!
            </Link>
          </div>
          <div className="main-register_link_section">
            <h3>Sudah punya akun?</h3>
            <Link to="/login" className="btn btn-success">
              Masuk Disini!
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

export default HomePage;
