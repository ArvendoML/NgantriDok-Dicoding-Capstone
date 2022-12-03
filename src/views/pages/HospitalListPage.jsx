import React from "react";
import "../../styles/pages/hospitalListPage.css";
import HospitalItemCard from "../components/HospitalItemCard";

function HospitalListPage() {
  const test = [1, 2, 3, 4, 5, 6];

  return (
    <main id="hospitalListPage">
      <h1>Daftar Tempat Dokter Praktek Tersedia:</h1>
      <section className="hospital-list">
        {test.map((item) => (
          <HospitalItemCard key={item} />
        ))}
      </section>
    </main>
  );
}

export default HospitalListPage;
