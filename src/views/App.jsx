import React, { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { getUserData } from "../scripts/data/userData";
import MainPage from "./layout/MainPage";
import LoginPage from "./pages/LoginPage";
import HospitalRegisterPage from "./pages/owner/HospitalRegisterPage";
import RegisterPage from "./pages/RegisterPage";

function App() {
  const [authedUser, setAuthedUser] = useState(getUserData() || null);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<LoginPage setAuthedUser={setAuthedUser} />} />
        <Route path="/register/user" element={<RegisterPage />} />
        <Route path="/register/hospital" element={<HospitalRegisterPage />} />
        <Route
          path="*"
          element={<MainPage authedUser={authedUser} setAuthedUser={setAuthedUser} />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
