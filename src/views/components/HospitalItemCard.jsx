import React from "react";
import { Link } from "react-router-dom";

const HospitalItemCard = ({ id, name, image_url, currQueue, city, address }) => {
  return (
    <div className="hospital-item-card">
      <div className="card text-white">
        <img className="card-img" src={image_url} alt="Hospital Name" />
        <div className="card-img-overlay">
          <Link to={`/detail/${id}`}>
            <h5 className="card-title">{name}</h5>
          </Link>
          <table>
            <tbody>
              <tr>
                <td className="card-text">Kota</td>
                <td className="card-text">{city}</td>
              </tr>
              <tr>
                <td className="card-text">Alamat</td>
                <td className="card-text">{address}</td>
              </tr>
              <tr>
                <td className="card-text">Antrian</td>
                <td className="card-text">{currQueue}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default HospitalItemCard;
