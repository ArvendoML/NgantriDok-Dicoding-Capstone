import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainPage from "./layout/MainPage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="*" element={<MainPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register/user" element={<RegisterPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
