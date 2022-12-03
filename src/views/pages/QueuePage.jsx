import React from "react";
import "../../styles/pages/queuePage.css";
import dummyImg from "../../public/images/rumah-sakit.png";

function QueuePage() {
  return (
    <main id="queuePage" className="container">
      <section className="user-queue-info_left">
        <div className="user-queue-info_left_header">
          <img src={dummyImg} alt="rumah sakit" />
          <div className="user-queue-info_left_header_currQue">
            <p>No. Antrian Sekarang:</p>
            <p>1</p>
          </div>
        </div>
        <div className="user-queue-info_left_body">
          <table className="table table-hover">
            <tbody>
              <tr>
                <td>Nama</td>
                <td className="align-middle">
                  <strong>Rumah Sakit Dummy</strong>
                </td>
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
              <td className="align-middle">Dummy</td>
            </tr>
            <tr>
              <td>Usia</td>
              <td className="align-middle">20</td>
            </tr>
            <tr>
              <td>No. Telepon</td>
              <td className="align-middle">123456789</td>
            </tr>
            <tr>
              <td>No. Antrian</td>
              <td className="align-middle user-queue-number">1</td>
            </tr>
            <tr>
              <td>Gejala</td>
              <td className="align-middle">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis, deleniti!
              </td>
            </tr>
          </tbody>
        </table>
        <button id="CancelQueueBtn" className="btn btn-danger" type="submit">
          Batal Antri
        </button>
      </section>
    </main>
  );
}

export default QueuePage;
