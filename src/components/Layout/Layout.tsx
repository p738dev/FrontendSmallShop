import React from "react";
import { Route, Routes } from "react-router-dom";
import Header from "../Header/Header";
import Home from "../../pages/Home/Home";
import Login from "../../pages/Login/Login";
import Register from "../../pages/Register/Register";
import ForgottenPassword from "../ForgottenPassword/ForgottenPassword";
import CartPage from "../../pages/CartPage/CartPage";
import Shop from "../../pages/Shop/Shop";
import ProductPage from "../../pages/ProductPage/ProductPage";
import Footer from "../Footer/Footer";

const Layout = () => {
  return (
    <>
      <Header />
      <main>
        <Routes>
          <Route
            path="/"
            element={<Home />}
          />
          <Route
            path="/login"
            element={<Login />}
          />
          <Route
            path="/register"
            element={<Register />}
          />
          <Route
            path="/passrecorver"
            element={<ForgottenPassword />}
          />
          <Route
            path="/cart"
            element={<CartPage />}
          />
          <Route
            path="/shop"
            element={<Shop />}
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
