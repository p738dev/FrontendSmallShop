import React from "react";
import { Link } from "react-router-dom";
import { Formik } from "formik";
import * as Yup from "yup";
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
} from "./Login.css";

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

const Login = () => {
  const initialValues: FormLoginValues = {
    email: "",
    password: "",
  };

  const formSubmit = () => {};

  return (
    <StyledSectionLogin>
      <StyledHeaderLogin>Zaloguj się</StyledHeaderLogin>
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

export default Login;
