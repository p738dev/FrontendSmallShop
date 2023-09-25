import React, { useEffect } from "react";
import { Routes, Route, useNavigate, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import Cookies from "js-cookie";
import { RootState } from "./store";
import GlobalStyle from "./globalStyles/globalStyles";
import ConfirmModal from "./components/ConfirmModal/ConfirmModal";
import Layout from "./components/Layout/Layout";
import AdminPage from "./pages/AdminPage/AdminPage";

const App = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const { isConfirmModalOpen } = useSelector(
    (state: RootState) => state.confirmModal
  );

  const token = Cookies.get("token");
  const role = Cookies.get("role");

  useEffect(() => {
    if (token && role === "admin" && location.pathname.includes("login")) {
      navigate("/admin");
    }
    if (token && role === "user" && location.pathname.includes("login")) {
      navigate("/");
    }
  }, [location, token, role]);

  return (
    <>
      {isConfirmModalOpen && <ConfirmModal />}
      <GlobalStyle />
      <Routes>
        <Route
          path="/*"
          element={<Layout />}
        />
        <Route
          path="/admin/*"
          element={<AdminPage />}
        />
      </Routes>
    </>
  );
};

export default App;
