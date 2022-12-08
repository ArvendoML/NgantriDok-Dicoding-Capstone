import React, { useEffect } from "react";
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getOneHospital } from "../../scripts/data/hospitalListData";
import {
  getHospitalPatientDetail,
  getHospitalPatientLength,
} from "../../scripts/data/patientListData";
import { getUserData } from "../../scripts/data/userData";
import "../../styles/pages/hospitalDetailPage.css";

const HospitalDetailPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [hospitalData, setHospitalData] = useState([]);
  const [patientLength, setPatientLength] = useState([]);

  useEffect(() => {
    const getHospitalData = async () => {
      setHospitalData(await getOneHospital(id));
      setPatientLength(await getHospitalPatientLength(id));
    };

    getHospitalData();
  }, []);

  const authedUser = getUserData();
  const handleOnClickRegisterBtn = () => {
    if (authedUser === null) {
      alert("Masuk terlebih dahulu untuk daftar!");
      navigate("/login");
    } else {
      const queue = getHospitalPatientDetail(authedUser.id);
      if (queue) {
        alert("Anda sudah mengantri! Batal antri terlebih dahulu untuk mengantri!");
      } else {
        navigate(`/queue-registration/${id}`);
      }
    }
  };

  return (
    <main id="hospitalDetailPage">
      <section className="hospital-detail-container">
        <div className="hospital-detail_left">
          <img src={hospitalData.image_url} alt="nama" />
        </div>
        <div className="hospital-detail_right">
          <h2>{hospitalData.name}</h2>
          <hr />
          <table className="table table-hover">
            <tbody>
              <tr>
                <td>Antrian Sekarang</td>
                <td className="align-middle">{hospitalData.currQueue}</td>
              </tr>
              <tr>
                <td>Total Antrian Tersisa</td>
                <td className="align-middle">{patientLength}</td>
              </tr>
              <tr>
                <td>No. Telepon</td>
                <td className="align-middle">{hospitalData.phoneNumber}</td>
              </tr>
              <tr>
                <td>Alamat</td>
                <td className="align-middle">{hospitalData.address}</td>
              </tr>
              <tr>
                <td>Deskripsi</td>
                <td className="align-middle">{hospitalData.description}</td>
              </tr>
            </tbody>
          </table>
          <button onClick={handleOnClickRegisterBtn} className="btn btn-success btn-daftar">
            Daftar
          </button>
        </div>
      </section>
    </main>
  );
};

export default HospitalDetailPage;
