import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { getAllHospitalList } from "../../scripts/data/hospitalListData";
import "../../styles/pages/hospitalListPage.css";
import HospitalItemCard from "../components/HospitalItemCard";

const HospitalListPage = () => {
  const [hospitalList, setHospitalList] = useState([]);

  useEffect(() => {
    const getHospitalList = async () => {
      setHospitalList(await getAllHospitalList());
    };

    getHospitalList();
  }, []);

  return (
    <main id="hospitalListPage">
      <h1>Daftar Tempat Dokter Praktek Tersedia:</h1>
      <section className="hospital-list">
        {[]
          .concat(hospitalList)
          .sort((a, b) => (a.itemM > b.itemM ? 1 : -1))
          .map((item, i) => (
            <HospitalItemCard key={i} {...item} />
          ))}
      </section>
    </main>
  );
};

export default HospitalListPage;
