import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../../../styles/pages/loginRegisterPage.css";
import appLogo from "../../../public/images/ngantriDok-logo.png";
import { getUserData } from "../../../scripts/data/userData";
import { addNewHospital } from "../../../scripts/data/hospitalListData";

const HospitalRegisterPage = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [phoneNumber, setPhoneNumber] = useState();
  const [addressCity, setAddressCity] = useState();
  const [address, setAddress] = useState();
  const [description, setDescription] = useState();

  const handleOnChangeUsername = (event) => {
    setUsername(event.target.value);
  };

  const handleOnChangeEmail = (event) => {
    setEmail(event.target.value);
  };

  const handleOnChangePassword = (event) => {
    setPassword(event.target.value);
  };

  const handleOnChangePhoneNumber = (event) => {
    setPhoneNumber(event.target.value);
  };

  const handleOnChangeAddressCity = (event) => {
    setAddressCity(event.target.value);
  };

  const handleOnChangeAddress = (event) => {
    setAddress(event.target.value);
  };

  const handleOnChangeDescription = (event) => {
    setDescription(event.target.value);
  };

  const handleOnSubmitButton = (event) => {
    event.preventDefault();
    addNewHospital(username, email, password, phoneNumber, addressCity, address, description);
    alert("Registrasi Rumah Sakit Berhasil!");
    navigate("/login");
  };

  useEffect(() => {
    if (getUserData() !== null) {
      navigate("/");
    }
  }, []);

  return (
    <section id="registerPage" onSubmit={handleOnSubmitButton}>
      <form className="container hospital-register-form">
        <img src={appLogo} alt="NgantriDok" className="app-img-logo" />
        <div className="form-main">
          <div className="mb-3">
            <label className="form-label">Nama Rumah Sakit</label>
            <input
              type="text"
              name="hospitalName"
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
              required
            />
          </div>
          <div className="mb-3">
            <label className="form-label">No. Telepon</label>
            <input
              type="number"
              name="phoneNumber"
              className="form-control"
              placeholder="ex: 08121234567"
              minLength={10}
              min={0}
              onChange={handleOnChangePhoneNumber}
              required
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Kota</label>
            <input
              type="text"
              name="addressCity"
              className="form-control"
              placeholder="ex: Jakarta"
              onChange={handleOnChangeAddressCity}
              required
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Alamat</label>
            <input
              type="text"
              name="address"
              className="form-control"
              placeholder="ex: Jalan Muhammad Yani"
              onChange={handleOnChangeAddress}
              required
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Deskripsi</label>
            <textarea
              type="text"
              className="form-control"
              placeholder="Deskripsikan rumah sakitmu (spesialisasi, dll)"
              onChange={handleOnChangeDescription}
              required
            />
          </div>
        </div>
        <div className="form-footer">
          <button type="submit" className="btn btn-success btn-login">
            Register
          </button>
          <p>
            Sudah punya akun? <Link to="/login">Masuk disini!</Link>
          </p>
        </div>
      </form>
    </section>
  );
};

export default HospitalRegisterPage;
