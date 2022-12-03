import React from "react";
import { Link } from "react-router-dom";
import dummyImg from "../../public/images/rumah-sakit.png";

function HospitalItemCard() {
  return (
    <div className="hospital-item-card">
      <div className="card text-white">
        <img className="card-img" src={dummyImg} alt="Hospital Name" />
        <div className="card-img-overlay">
          <Link to="/detail/1">
            <h5 className="card-title">Hospital Name</h5>
          </Link>
          <table>
            <tbody>
              <tr>
                <td className="card-text">Kota</td>
                <td className="card-text">Dummy City</td>
              </tr>
              <tr>
                <td className="card-text">Alamat</td>
                <td className="card-text">
                  Jalan Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias, non.
                </td>
              </tr>
              <tr>
                <td className="card-text">Antrian</td>
                <td className="card-text">1</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default HospitalItemCard;
