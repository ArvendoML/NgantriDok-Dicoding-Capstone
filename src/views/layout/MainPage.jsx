import React from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "../pages/HomePage";
import HospitalListPage from "../pages/HospitalListPage";
import QueuePage from "../pages/QueuePage";
import Footer from "./Footer";
import Header from "./Header";
import "../../styles/layout/main.css";

function MainPage() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/list" element={<HospitalListPage />} />
        <Route path="/queue" element={<QueuePage />} />
        <Route path="/about-us" element={<HomePage />} />
      </Routes>
      <Footer />
    </>
  );
}

export default MainPage;
