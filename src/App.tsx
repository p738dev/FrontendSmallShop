import React from "react";
import { Routes, Route } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "./store";
import GlobalStyle from "./globalStyles/globalStyles";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import HomePage from "./pages/HomePage/HomePage";
import LoginPage from "./pages/LoginPage/LoginPage";
import RegisterPage from "./pages/RegisterPage/RegisterPage";
import ShopPage from "./pages/ShopPage/ShopPage";
import ForgottenPasswordPage from "./pages/ForgottenPasswordPage/ForgottenPasswordPage";
import CartPage from "./pages/CartPage/CartPage";
import ConfirmModal from "./components/ConfirmModal/ConfirmModal";

const App = () => {
  const { isConfirmModalOpen } = useSelector(
    (state: RootState) => state.confirmModal
  );

  return (
    <>
      {isConfirmModalOpen && <ConfirmModal />}
      <GlobalStyle />
      <Header />
      <main>
        <Routes>
          <Route
            path="/"
            element={<HomePage />}
          />
          <Route
            path="/login"
            element={<LoginPage />}
          />
          <Route
            path="/register"
            element={<RegisterPage />}
          />
          <Route
            path="/cart"
            element={<CartPage />}
          />
          <Route
            path="/passrecorver"
            element={<ForgottenPasswordPage />}
          />
          <Route
            path="/shop"
            element={<ShopPage />}
          />
        </Routes>
      </main>
      <Footer />
    </>
  );
};

export default App;
