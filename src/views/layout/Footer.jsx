import React from "react";
import { Link } from "react-router-dom";
import appLogo from "../../public/images/ngantriDok-logo.png";
import "../../styles/layout/footer.css";

const Footer = () => {
  return (
    <footer>
      <div>
        <img src={appLogo} alt="NgantriDok" className="app-img-logo" />
      </div>

      <section>
        <h5>Navigation</h5>
        <nav>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/list">Daftar Tempat</Link>
          </li>
          <li>
            <Link to="/queue">Antrian</Link>
          </li>
        </nav>
      </section>

      <section>
        <h5>Team</h5>
        <Link to="/list">About Us</Link>
      </section>

      <p>Copyright &copy; Dicoding Capstone Team C22-240</p>
    </footer>
  );
}

export default Footer;
