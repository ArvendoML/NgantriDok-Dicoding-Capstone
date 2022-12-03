import React from "react";
import { BsCheckLg } from "react-icons/bs";
import "../../../styles/pages/owner/hospitalOwnerHomePage.css";
import dummyImg from "../../../public/images/rumah-sakit.png";

function HospitalOwnerHomePage() {
  return (
    <main id="ownerHospitalPage">
      <section className="owner-hospital-info">
        <img src={dummyImg} alt="Gambar Hospital" />
        <div className="owner-hospital-info_right">
          <h2>Hospital Name</h2>
          <table className="table table-hover table-bordered">
            <tbody>
              <tr>
                <td className="table-active">Alamat</td>
                <td className="align-middle">Jalan Dummy</td>
              </tr>
              <tr>
                <td className="table-active">No. Telepon</td>
                <td className="align-middle">123123123</td>
              </tr>
              <tr>
                <td className="table-active">Total Antrian</td>
                <td className="align-middle">5</td>
              </tr>
              <tr className="queue-now">
                <td className="table-active">Antrian Sekarang</td>
                <td className="align-middle">1</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
      <hr />
      <section className="hospital-patient-list">
        <h2>Daftar Pasien</h2>
        <table id="tablePatientList" className="table table-striped table-bordered table-hover">
          <thead className="table-active">
            <tr>
              <th scope="col">No. Antrian</th>
              <th scope="col">Nama Pasien</th>
              <th scope="col">No. Telepon</th>
              <th scope="col">Gejala</th>
              <th className="owner-table-col-action" scope="col">Aksi</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th className="align-middle" scope="row">1</th>
              <td className="align-middle">Dummy1</td>
              <td className="align-middle">123123</td>
              <td className="align-middle">Dummy Sickness</td>
              <td className="align-middle owner-table-col-action">
                <button type="button" className="btn btn-success btn-patient-finish">
                  <BsCheckLg />
                </button>
              </td>
            </tr>
            <tr>
              <th className="align-middle" scope="row">2</th>
              <td className="align-middle">Dummy2</td>
              <td className="align-middle">123123</td>
              <td className="align-middle">Dummy Sickness</td>
              <td className="align-middle owner-table-col-action">
                <button type="button" className="btn btn-success btn-patient-finish">
                  <BsCheckLg />
                </button>
              </td>
            </tr>
            <tr>
              <th className="align-middle" scope="row">3</th>
              <td className="align-middle">Dummy3</td>
              <td className="align-middle">123123</td>
              <td className="align-middle">Dummy Sickness</td>
              <td className="align-middle owner-table-col-action">
                <button type="button" className="btn btn-success btn-patient-finish">
                  <BsCheckLg />
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </section>
    </main>
  );
}

export default HospitalOwnerHomePage;
