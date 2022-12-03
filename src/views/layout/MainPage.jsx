import React from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "../pages/HomePage";
import HospitalListPage from "../pages/HospitalListPage";
import QueuePage from "../pages/QueuePage";
import Footer from "./Footer";
import Header from "./Header";
import "../../styles/layout/main.css";
import HospitalDetailPage from "../pages/HospitalDetailPage";
import HospitalQueueRegistration from "../pages/HospitalQueueRegistration";
import HospitalOwnerHomePage from "../pages/owner/HospitalOwnerHomePage";

function MainPage() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/owner" element={<HospitalOwnerHomePage />} />
        <Route path="/list" element={<HospitalListPage />} />
        <Route path="/queue" element={<QueuePage />} />
        <Route path="/about-us" element={<HomePage />} />
        <Route path="/detail/:id" element={<HospitalDetailPage />} />
        <Route path="/queue-registration/:id" element={<HospitalQueueRegistration />} />
      </Routes>
      <Footer />
    </>
  );
}

export default MainPage;
