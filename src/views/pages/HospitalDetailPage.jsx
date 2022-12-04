import React, { useEffect } from "react";
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import dummyImg from "../../public/images/rumah-sakit.png";
import { getOneHospital } from "../../scripts/hospitalListData";
import { getUserData } from "../../scripts/userData";
import "../../styles/pages/hospitalDetailPage.css";

const HospitalDetailPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [hospitalData, setHospitalData] = useState([]);

  useEffect(() => {
    const getHospitalData = async () => {
      setHospitalData(await getOneHospital(id));
    };

    getHospitalData();
  }, []);

  const authedUser = getUserData();
  const handleOnClickRegisterBtn = () => {
    if (authedUser === null) {
      navigate("/login");
      alert("Masuk terlebih dahulu untuk daftar!");
    } else {
      navigate(`/queue-registration/${id}`);
    }
  };

  return (
    <main id="hospitalDetailPage">
      <section className="hospital-detail-container">
        <div className="hospital-detail_left">
          <img src={dummyImg} alt="nama" />
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
                <td>Total Antrian</td>
                <td className="align-middle">{hospitalData.totalQueue}</td>
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
