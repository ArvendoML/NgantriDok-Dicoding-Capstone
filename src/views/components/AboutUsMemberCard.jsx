import React from "react";
import avatar from "../../public/images/avatar.png";

const AboutUsMemberCard = ({ name }) => {
  return (
    <div className="member-container">
      <div className="member-card">
        <img src={avatar} alt={`avatar ${name}`} />
        <h5 className="card-title text-align-center">{name}</h5>
      </div>
    </div>
  );
};

export default AboutUsMemberCard;
