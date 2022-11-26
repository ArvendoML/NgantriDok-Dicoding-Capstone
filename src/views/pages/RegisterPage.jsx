import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../../styles/pages/loginPage.css";

function Register() {
  const navigate = useNavigate();
  const [username, setUsername] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const handleOnChangeUsername = (event) => {
    setUsername(event.target.value);
  };

  const handleOnChangeEmail = (event) => {
    setEmail(event.target.value);
  };

  const handleOnChangePassword = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmitButton = (event) => {
    event.preventDefault();
    console.log(email, password, username);
    navigate("/login");
  };

  return (
    <section id="loginPage">
      <form className="container">
        <h1>Logo</h1>
        <div className="form-main">
          <div className="mb-3">
            <label className="form-label">Username</label>
            <input
              type="email"
              className="form-control"
              placeholder="Example"
              onChange={handleOnChangeUsername}
              required
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Email</label>
            <input
              type="email"
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
              className="form-control"
              placeholder="*********"
              onChange={handleOnChangePassword}
            />
          </div>
        </div>
        <div className="form-footer">
          <button
            type="button"
            className="btn btn-primary btn-login"
            onClick={(e) => handleSubmitButton(e)}
          >
            Register
          </button>
          <p>
            Sudah punya akun?
            {' '}
            <Link to="/login">Masuk disini!</Link>
          </p>
        </div>
      </form>
    </section>
  );
}

export default Register;
