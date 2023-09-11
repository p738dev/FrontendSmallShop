import React from "react";
import { Routes, Route } from "react-router-dom";
import GlobalStyle from "./globalStyles/globalStyles";
import Header from "./components/Header/Header";
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import Footer from "./components/Footer/Footer";
import ForgottenPassword from "./components/ForgottenPassword/ForgottenPassword";

const App = () => {
  return (
    <>
      <GlobalStyle />
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
        </Routes>
      </main>
      <Footer />
    </>
  );
};

export default App;
