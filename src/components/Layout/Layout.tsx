import React from "react";
import { Route, Routes } from "react-router-dom";
import Header from "../Header/Header";
import CartPage from "../../pages/CartPage/CartPage";
import ProductPage from "../../pages/ProductPage/ProductPage";
import Footer from "../Footer/Footer";
import HomePage from "../../pages/HomePage/HomePage";
import LoginPage from "../../pages/LoginPage/LoginPage";
import RegisterPage from "../../pages/RegisterPage/RegisterPage";
import ForgottenPasswordPage from "../../pages/ForgottenPasswordPage/ForgottenPasswordPage";
import ShopPage from "../../pages/ShopPage/ShopPage";

const Layout = () => {
  return (
    <>
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
            path="/cart"
            element={<CartPage />}
          />
          <Route
            path="/shop"
            element={<ShopPage />}
          />
          <Route
            path="product/:id"
            element={<ProductPage />}
          />
        </Routes>
      </main>
      <Footer />
    </>
  );
};

export default Layout;
