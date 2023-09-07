import React from "react";
import { Formik } from "formik";
import * as Yup from "yup";
import { Roles } from "../../types/role";

import {
  StyledAreaButtnSignup,
  StyledAreaInput,
  StyledAreaInputs,
  StyledButtonSignup,
  StyledDescSite,
  StyledErrorMsg,
  StyledFormSignup,
  StyledHeaderRegister,
  StyledInputSignup,
  StyledSectionSignup,
  StyledSelect,
} from "./Register.css";

const validationSchema = () =>
  Yup.object().shape({
    name: Yup.string().required("Pole nie może być puste!"),
    email: Yup.string()
      .required("Pole nie może być puste!")
      .email("Email np.(example@example.example)."),
    password: Yup.string()
      .required("Pole nie może być puste!")
      .min(4, "Hasło musi posiadać minimum 4 znaki.")
      .max(8, "Hasło może mieć maksymalnie 8 znaków."),
    role_id: Yup.string().required("Pole nie może być puste!"),
  });

const Register = () => {
  const initialValues = {
    name: "",
    email: "",
    password: "",
    role_id: "",
  };

  const registerSubmit = () => {};

  return (
    <StyledSectionSignup>
      <StyledHeaderRegister>Rejestracja</StyledHeaderRegister>
      <StyledDescSite>
        Po zarejestrowaniu można dokonywać zakupów, a na podany adres e-mail
        będą wysłane potwierdzenia oraz zmiany statusów zamówień.
      </StyledDescSite>
      <Formik
        initialValues={initialValues}
        onSubmit={registerSubmit}
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
          <StyledFormSignup onSubmit={handleSubmit}>
            <StyledAreaInputs>
              <StyledAreaInput>
                <StyledInputSignup
                  type="text"
                  placeholder="Wprowadź swoje imię"
                  name="name"
                  value={values.name}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                {errors.name && touched.name && (
                  <StyledErrorMsg>{errors.name}</StyledErrorMsg>
                )}
              </StyledAreaInput>
              <StyledAreaInput>
                <StyledInputSignup
                  type="text"
                  placeholder="Wprowadź swój email"
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
                <StyledInputSignup
                  type="password"
                  placeholder="Wprowadź swoje hasło"
                  name="password"
                  value={values.password}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                {errors.password && touched.password && (
                  <StyledErrorMsg>{errors.password}</StyledErrorMsg>
                )}
              </StyledAreaInput>
              <StyledAreaInput>
                <StyledSelect
                  name="role_id"
                  value={values.role_id}
                  onChange={handleChange}
                  onBlur={handleBlur}
                >
                  <option>Wybierz</option>
                  <option value={1}>{Roles.Admin}</option>
                  <option value={2}>{Roles.User}</option>
                </StyledSelect>
                {errors.role_id && touched.role_id && (
                  <StyledErrorMsg>{errors.role_id}</StyledErrorMsg>
                )}
              </StyledAreaInput>
            </StyledAreaInputs>
            <StyledAreaButtnSignup>
              <StyledButtonSignup type="submit">Rejestracja</StyledButtonSignup>
            </StyledAreaButtnSignup>
          </StyledFormSignup>
        )}
      </Formik>
    </StyledSectionSignup>
  );
};

export default Register;
