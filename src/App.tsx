import React from "react";
import { Routes, Route } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "./store";
import GlobalStyle from "./globalStyles/globalStyles";
import ConfirmModal from "./components/ConfirmModal/ConfirmModal";
import Layout from "./components/Layout/Layout";
import AdminPage from "./pages/adminPages/AdminPage/AdminPage";

const App = () => {
  const { isConfirmModalOpen } = useSelector(
    (state: RootState) => state.confirmModal
  );

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
          path="/admin"
          element={<AdminPage />}
        />
      </Routes>
    </>
  );
};

export default App;
