import React, { useEffect, useState } from "react";
import "../../styles/pages/queuePage.css";
import dummyImg from "../../public/images/rumah-sakit.png";
import { getUserData } from "../../scripts/data/userData";
import { Link } from "react-router-dom";
import {
  cancelHospitalPatient,
  getHospitalPatientDetail,
} from "../../scripts/data/patientListData";
import { getOneHospital } from "../../scripts/data/hospitalListData";
import QueueError from "../components/QueueError";

const QueuePage = () => {
  const authedUser = getUserData();
  const [patientDetail, setPatientDetail] = useState(null);
  const [hospitalDetail, setHospitalDetail] = useState(null);

  useEffect(() => {
    const setData = async () => {
      const patient = getHospitalPatientDetail(authedUser.id);
      setPatientDetail(patient);

      if (patient) {
        const hospital = getOneHospital(patient.hospital_id);
        setHospitalDetail(hospital);
      }
    };

    setData();
  }, []);

  const handleCancelQueue = () => {
    cancelHospitalPatient(patientDetail.user_id, patientDetail.hospital_id);
    setPatientDetail(null);
    setHospitalDetail(null);
    alert("Berhasil Batal Antri");
  };

  // If no user logged in
  if (authedUser === null) {
    return (
      <QueueError
        description="Silahkan Masuk Terlebih Dahulu!"
        btnDesc="Masuk Disini!"
        link="/login"
      />
    );
  }

  // If user not queued
  if (patientDetail === null || hospitalDetail === null) {
    if (!patientDetail) {
      return (
        <QueueError description="Anda belum mengantri!" btnDesc="Antri Disini!" link="/list" />
      );
    }
  }

  return (
    <main id="queuePage" className="container">
      <section className="user-queue-info_left">
        <div className="user-queue-info_left_header">
          <img src={dummyImg} alt="rumah sakit" />
          <div className="user-queue-info_left_header_currQue">
            <p>No. Antrian Sekarang:</p>
            <p>{hospitalDetail.currQueue}</p>
          </div>
        </div>
        <div className="user-queue-info_left_body">
          <table className="table table-hover">
            <tbody>
              <tr>
                <td>Nama</td>
                <td className="align-middle">
                  <Link to={`/detail/${hospitalDetail.id}`}>
                    <strong>{hospitalDetail.name}</strong>
                  </Link>
                </td>
              </tr>
              <tr>
                <td>No. Telepon</td>
                <td className="align-middle">{hospitalDetail.phoneNumber}</td>
              </tr>
              <tr>
                <td>Alamat</td>
                <td className="align-middle">{hospitalDetail.description}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
      <section className="user-queue-info_right">
        <h2>Informasi Antrian</h2>
        <hr />
        <table className="table table-hover">
          <tbody>
            <tr>
              <td>Nama</td>
              <td className="align-middle">{patientDetail.name}</td>
            </tr>
            <tr>
              <td>Usia</td>
              <td className="align-middle">{patientDetail.age}</td>
            </tr>
            <tr>
              <td>No. Telepon</td>
              <td className="align-middle">{patientDetail.phoneNumber}</td>
            </tr>
            <tr>
              <td>No. Antrian</td>
              <td className="align-middle user-queue-number">{patientDetail.queue}</td>
            </tr>
            <tr>
              <td>Gejala</td>
              <td className="align-middle">{patientDetail.symptom}</td>
            </tr>
          </tbody>
        </table>
        <button
          id="CancelQueueBtn"
          onClick={() => handleCancelQueue()}
          className="btn btn-danger"
          type="submit"
        >
          Batal Antri
        </button>
      </section>
    </main>
  );
};

export default QueuePage;
