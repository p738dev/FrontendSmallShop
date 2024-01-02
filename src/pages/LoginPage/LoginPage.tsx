import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import axios, { AxiosResponse } from "axios";
import { Formik } from "formik";
import * as Yup from "yup";
import Cookies from "js-cookie";
import { FormLoginValues } from "../../types/forms";

import {
  StyledAreaRememberLogin,
  StyledButtonLogin,
  StyledErrorMsg,
  StyledFormLogin,
  StyledHeaderLogin,
  StyledInputLogin,
  StyledSectionLogin,
  StyledLabel,
  StyledInputCheckbox,
  StyledAreaInputs,
  StyledAreaInput,
  StyledForgotPassword,
  StyledAreaErrorMessage,
  StyledErrorMessage,
} from "./LoginPage.css";

const validationSchema = () =>
  Yup.object().shape({
    email: Yup.string()
      .required("Pole nie może być puste!")
      .email("Email musi być formatu (example@example.example)."),
    password: Yup.string()
      .required("Pole nie może być puste!")
      .min(3, "Hasło musi posiadać minimum 4 znaki.")
      .max(8, "Hasło może mieć maksymalnie 8 znaków."),
  });

const LoginPage = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const [errorMsg, setErrorMsg] = useState("");

  const initialValues: FormLoginValues = {
    email: "",
    password: "",
  };

  const loginToken = Cookies.get("token");

  const formSubmit = async (values: FormLoginValues) => {
    try {
      const res: AxiosResponse<{
        is_success: boolean;
        token: string;
        message: string;
        role_name: string;
        name: string;
      }> = await axios.post<{
        is_success: boolean;
        token: string;
        message: string;
        role_name: string;
        name: string;
      }>("http://www.api.piotrgruca.pl/api/login", values, {
        headers: {
          Authorization: `Bearer ${loginToken}`,
        },
      });
      const role = res.data.role_name;
      const token = res.data.token;
      const name = res.data.name;
      Cookies.set("token", token, { expires: 1 });
      Cookies.set("role", role, { expires: 1 });
      Cookies.set("name", name, { expires: 1 });

      if (token && role === "admin" && location.pathname.includes("login")) {
        navigate("/admin");
      }
      if (token && role === "user" && location.pathname.includes("login")) {
        navigate("/login");
      }
    } catch (err: any) {
      if (err.response.data.status === 401) {
        setErrorMsg(err.response.data.message);
      } else if (err.response.data.status === 400) {
        setErrorMsg(err.response.data.message);
      } else {
        setErrorMsg(err.response.data.message);
      }
    }
  };

  return (
    <StyledSectionLogin>
      <StyledHeaderLogin>Logowanie</StyledHeaderLogin>
      <StyledAreaErrorMessage className={`${errorMsg ? "errorMsg" : ""}`}>
        <StyledErrorMessage>{errorMsg}</StyledErrorMessage>
      </StyledAreaErrorMessage>
      <Formik
        initialValues={initialValues}
        onSubmit={formSubmit}
        validationSchema={validationSchema}
      >
        {({
          values,
          errors,
          touched,
          handleSubmit,
          handleBlur,
          handleChange,
        }) => (
          <StyledFormLogin onSubmit={handleSubmit}>
            <StyledAreaInputs>
              <StyledAreaInput>
                <StyledInputLogin
                  type="text"
                  placeholder="Email"
                  name="email"
                  value={values.email}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                {errors.email && touched.email && (
                  <StyledErrorMsg>{errors.email}</StyledErrorMsg>
                )}
              </StyledAreaInput>
              <StyledAreaInput>
                <StyledInputLogin
                  type="password"
                  placeholder="Hasło"
                  name="password"
                  value={values.password}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                {errors.password && touched.password && (
                  <StyledErrorMsg>{errors.password}</StyledErrorMsg>
                )}
              </StyledAreaInput>
            </StyledAreaInputs>

            <StyledAreaRememberLogin>
              <StyledLabel>
                <StyledInputCheckbox type="checkbox" />
                Zapamiętaj
              </StyledLabel>
              <Link to={"/passrecorver"}>
                <StyledForgotPassword>Zapomniane hasło ?</StyledForgotPassword>
              </Link>
            </StyledAreaRememberLogin>
            <StyledButtonLogin type="submit">Zaloguj</StyledButtonLogin>
          </StyledFormLogin>
        )}
      </Formik>
    </StyledSectionLogin>
  );
};

export default LoginPage;
