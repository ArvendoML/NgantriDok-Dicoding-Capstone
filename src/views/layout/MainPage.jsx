import React from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "../pages/HomePage";
import HospitalListPage from "../pages/HospitalListPage";
import QueuePage from "../pages/QueuePage";
import Header from "./Header";

function MainPage() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/list" element={<HospitalListPage />} />
        <Route path="/queue" element={<QueuePage />} />
      </Routes>
    </>
  );
}

export default MainPage;
