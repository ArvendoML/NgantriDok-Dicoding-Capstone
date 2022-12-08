import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getOneHospital } from "../../scripts/data/hospitalListData";
import { addNewPatient } from "../../scripts/data/patientListData";
import { getUserData } from "../../scripts/data/userData";
import "../../styles/pages/hospitalQueueRegistration.css";

const HospitalQueueRegistration = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [patientName, setPatientName] = useState();
  const [patientAge, setPatientAge] = useState();
  const [patientPhoneNumber, setPatientPhoneNumber] = useState();
  const [patientSymptom, setPatientSymptom] = useState();
  const hospitalName = getOneHospital(id).name;
  const userLogged = getUserData();

  const handleOnChangePatientName = (event) => {
    setPatientName(event.target.value);
  };

  const handleOnChangePatientAge = (event) => {
    setPatientAge(event.target.value);
  };

  const handleOnChangePatientPhoneNumber = (event) => {
    setPatientPhoneNumber(event.target.value);
  };

  const handleOnChangePatientSymptom = (event) => {
    setPatientSymptom(event.target.value);
  };

  const handleOnSubmitButton = (event) => {
    event.preventDefault();
    addNewPatient(id, userLogged.id, patientName, patientAge, patientPhoneNumber, patientSymptom);
    alert("Pendaftaran antrian berhasil!");
    navigate("/queue");
  };

  return (
    <main>
      <form id="formQueueRegistration" className="container" onSubmit={handleOnSubmitButton}>
        <h2>Form Pendaftaran Antrian</h2>
        <hr />
        <div className="form-main">
          <div className="mb-3">
            <label className="form-label">Nama Rumah Sakit</label>
            <input type="text" className="form-control" placeholder={hospitalName} disabled />
          </div>
          <div className="mb-3">
            <label className="form-label">Atas Nama</label>
            <input
              type="text"
              className="form-control"
              placeholder="Nama Pasien"
              onChange={handleOnChangePatientName}
              required
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Usia</label>
            <input
              type="number"
              className="form-control"
              placeholder="20"
              min={0}
              onChange={handleOnChangePatientAge}
              required
            />
          </div>
          <div className="mb-3">
            <label className="form-label">No. Telepon</label>
            <input
              type="number"
              className="form-control"
              placeholder="08121234567"
              min={0}
              minLength="10"
              onChange={handleOnChangePatientPhoneNumber}
              required
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Gejala</label>
            <input
              type="text"
              className="form-control"
              placeholder="Gejala yang dialami"
              onChange={handleOnChangePatientSymptom}
              required
            />
          </div>
        </div>
        <div className="form-footer">
          <button type="submit" className="btn btn-success btn-daftar">
            Daftar
          </button>
        </div>
      </form>
    </main>
  );
};

export default HospitalQueueRegistration;
