import React from "react";
import dummyImg from "../../public/images/rumah-sakit.png";

function HospitalItemCard() {
  return (
    <div className="hospital-item-card">
      <div className="card text-white">
        <img className="card-img" src={dummyImg} alt="Hospital Name" />
        <div className="card-img-overlay">
          <h5 className="card-title">Hospital Name</h5>
          <table>
            <tbody>
              <tr>
                <td className="card-text">No.Telepon</td>
                <td className="card-text">123</td>
              </tr>
              <tr>
                <td className="card-text">Lokasi</td>
                <td className="card-text">Dummy</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default HospitalItemCard;
