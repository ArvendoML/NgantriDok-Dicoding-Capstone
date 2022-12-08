import React, { useState } from "react";
import "../../../styles/pages/owner/hospitalOwnerHomePage.css";
import { getUserHospitalData } from "../../../scripts/data/userData";
import OwnerPagePatientList from "../../components/OwnerPagePatientList";
import {
  deleteHospitalPatient,
  getHospitalPatientList,
} from "../../../scripts/data/patientListData";

const HospitalOwnerHomePage = () => {
  const hospitalData = getUserHospitalData() || [];
  const [patientListData, setPatientListData] = useState(
    getHospitalPatientList(hospitalData.id) || []
  );

  const handleDeletePatient = (user_id, hospital_id) => {
    const patientList = deleteHospitalPatient(user_id, hospital_id);
    setPatientListData(patientList);
  };

  return (
    <main id="ownerHospitalPage">
      <section id="hospitalInfo" className="owner-hospital-info">
        <div className="owner-hospital-info_left">
          <img src={hospitalData.image_url} alt="Gambar Hospital" />
        </div>
        <div className="owner-hospital-info_right">
          <h2>{hospitalData.name}</h2>
          <table className="table table-hover table-bordered">
            <tbody>
              <tr>
                <td className="table-active">Alamat</td>
                <td className="align-middle">{hospitalData.address}</td>
              </tr>
              <tr>
                <td className="table-active">No. Telepon</td>
                <td className="align-middle">{hospitalData.phoneNumber}</td>
              </tr>
              <tr>
                <td className="table-active">Deskripsi</td>
                <td className="align-middle">{hospitalData.description}</td>
              </tr>
              <tr>
                <td className="table-active">Total Antrian Tersisa</td>
                <td className="align-middle">{patientListData.length}</td>
              </tr>
              <tr className="queue-now">
                <td className="table-active">Antrian Sekarang</td>
                <td className="align-middle">{hospitalData.currQueue}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <hr />

      <section id="hospitalPatientList" className="hospital-patient-list">
        <h2>Daftar Pasien</h2>
        <table id="tablePatientList" className="table table-striped table-bordered table-hover">
          <thead className="table-active">
            <tr>
              <th scope="col" style={{ width: "10%" }} className="align-middle">
                No. Antrian
              </th>
              <th scope="col" style={{ width: "20%" }} className="align-middle">
                Nama Pasien
              </th>
              <th scope="col" style={{ width: "5%" }} className="align-middle col-age">
                Umur
              </th>
              <th scope="col" style={{ width: "15%" }} className="align-middle">
                No. Telepon
              </th>
              <th scope="col" style={{ width: "45%" }} className="align-middle">
                Gejala
              </th>
              <th scope="col" className="align-middle">
                Aksi
              </th>
            </tr>
          </thead>
          <tbody>
            {patientListData.length === 0 ? (
              <tr>
                <td colSpan={6}>Tidak ada Pasien Terdaftar!</td>
              </tr>
            ) : (
              patientListData.map((patient) => (
                <OwnerPagePatientList
                  key={patient.id}
                  {...patient}
                  handleDeletePatient={handleDeletePatient}
                />
              ))
            )}
          </tbody>
        </table>
      </section>
    </main>
  );
};

export default HospitalOwnerHomePage;
