import React from "react";
import { Routes, Route } from "react-router-dom";
import GlobalStyle from "./globalStyles/globalStyles";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import HomePage from "./pages/HomePage/HomePage";
import LoginPage from "./pages/LoginPage/LoginPage";
import RegisterPage from "./pages/RegisterPage/RegisterPage";
import ShopPage from "./pages/ShopPage/ShopPage";
import ForgottenPasswordPage from "./pages/ForgottenPasswordPage/ForgottenPasswordPage";

const App = () => {
  return (
    <>
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
