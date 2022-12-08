import React from "react";
import AboutUsMemberCard from "../components/AboutUsMemberCard";
import "../../styles/pages/aboutUsPage.css";

const AboutUsPage = () => {
  const groupMember = [
    "Arvendo Manuel Lextian",
    "Muhammad Fauzan Asyraf",
    "Muhammad Yusda Faisal Ardhi",
    "Dzikrina Ghaibi Cahayani",
  ];

  return (
    <main id="aboutUsPage">
      <section>
        <h2>Dicoding Capstone C22-240 Group Member</h2>
        <div className="aboutUs-member-list">
          {groupMember.map((member) => (
            <AboutUsMemberCard key={member} name={`${member}`} />
          ))}
        </div>
      </section>
    </main>
  );
};

export default AboutUsPage;
