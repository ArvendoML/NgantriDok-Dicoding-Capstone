import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../../styles/pages/loginRegisterPage.css";
import appLogo from "../../public/images/ngantriDok-logo.png";
import { login } from "../../scripts/auth";
import { getUserData } from "../../scripts/data/userData";

const Login = ({ setAuthedUser }) => {
  const navigate = useNavigate();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const handleOnChangeEmail = (event) => {
    setEmail(event.target.value);
  };

  const handleOnChangePassword = (event) => {
    setPassword(event.target.value);
  };

  const handleOnSubmitButton = async (event) => {
    event.preventDefault();
    const loginSuccess = await login(email, password);
    const user = getUserData();

    if (loginSuccess === true) {
      setAuthedUser(user);
      if (user.role === "owner") {
        navigate("/owner");
      } else {
        navigate("/");
      }
    } else {
      alert("Email/Password invalid!");
    }
  };

  useEffect(() => {
    if (getUserData() !== null) {
      navigate("/");
    }
  }, []);

  return (
    <section id="loginPage" onSubmit={handleOnSubmitButton}>
      <form className="container">
        <img src={appLogo} alt="NgantriDok" className="app-img-logo" />
        <div className="form-main">
          <div className="mb-3">
            <label className="form-label">Email</label>
            <input
              type="email"
              name="email"
              className="form-control"
              placeholder="example@gmail.com"
              onChange={handleOnChangeEmail}
              required
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Password</label>
            <input
              type="password"
              name="password"
              className="form-control"
              placeholder="*********"
              onChange={handleOnChangePassword}
            />
          </div>
        </div>
        <div className="form-footer">
          <button type="submit" className="btn btn-success btn-login">
            Login
          </button>
          <p>
            Belum punya akun? <Link to="/register/user">Daftar disini!</Link>
          </p>
        </div>
      </form>
    </section>
  );
};

export default Login;
