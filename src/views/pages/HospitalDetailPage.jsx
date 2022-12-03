import React from "react";
import { Link } from "react-router-dom";
import dummyImg from "../../public/images/rumah-sakit.png";
import "../../styles/pages/hospitalDetailPage.css";

function HospitalDetailPage() {
  return (
    <main id="hospitalDetailPage">
      <section className="hospital-detail-container">
        <div className="hospital-detail_left">
          <img src={dummyImg} alt="nama" />
        </div>
        <div className="hospital-detail_right">
          <h2>Rumah Sakit Dummy</h2>
          <hr />
          <table className="table table-hover">
            <tbody>
              <tr>
                <td>Antrian Sekarang</td>
                <td className="align-middle">1</td>
              </tr>
              <tr>
                <td>No. Telepon</td>
                <td className="align-middle">987654321</td>
              </tr>
              <tr>
                <td>Alamat</td>
                <td className="align-middle">
                  Jalan Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta, eligendi!
                </td>
              </tr>
              <tr>
                <td>Spesialisasi</td>
                <td className="align-middle">
                  <ol>
                    <li>Umum</li>
                    <li>Kulit</li>
                    <li>Mata</li>
                  </ol>
                </td>
              </tr>
            </tbody>
          </table>
          <Link to="/queue-registration/1" className="btn btn-success btn-daftar">
            Daftar
          </Link>
        </div>
      </section>
    </main>
  );
}

export default HospitalDetailPage;
