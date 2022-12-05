import React from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import HomePage from "../pages/HomePage";
import HospitalListPage from "../pages/HospitalListPage";
import QueuePage from "../pages/QueuePage";
import Footer from "./Footer";
import Header from "./Header";
import "../../styles/layout/main.css";
import HospitalDetailPage from "../pages/HospitalDetailPage";
import HospitalQueueRegistration from "../pages/HospitalQueueRegistration";
import HospitalOwnerHomePage from "../pages/owner/HospitalOwnerHomePage";
import PageNotFound from "../pages/PageNotFound";
import HeaderOwner from "./owner/HeaderOwner";
import { logout } from "../../scripts/auth";

const MainPage = ({ authedUser, setAuthedUser }) => {
  const navigate = useNavigate();

  const handleOnClickLogout = () => {
    logout();
    setAuthedUser(null);
    navigate("/login");
  };

  let header = <Header authedUser={authedUser} handleOnClickLogout={handleOnClickLogout} />;
  if (authedUser.role === "owner") {
    header = <HeaderOwner authedUser={authedUser} handleOnClickLogout={handleOnClickLogout} />;
  }

  return (
    <>
      {header}
      <Routes>
        <Route path="*" element={<PageNotFound />} />
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
};

MainPage.PropType = {
  authedUser: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    email: PropTypes.string,
    password: PropTypes.string,
  }),
};

export default MainPage;
