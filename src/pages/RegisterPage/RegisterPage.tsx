import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { Formik } from "formik";
import * as Yup from "yup";
import { Roles } from "../../types/role";

import {
  StyledAreaButtnSignup,
  StyledAreaErrorMessage,
  StyledAreaInput,
  StyledAreaInputs,
  StyledButtonSignup,
  StyledDescSite,
  StyledErrorMessage,
  StyledErrorMsg,
  StyledFormSignup,
  StyledHeaderRegister,
  StyledInputSignup,
  StyledSectionSignup,
  StyledSelect,
} from "./RegisterPage.css";
import { FormRegisterValues } from "../../types/forms";

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

const RegisterPage = () => {
  const navigate = useNavigate();

  const [errorMsg, setErrorMsg] = useState("");

  const initialValues: FormRegisterValues = {
    name: "",
    email: "",
    password: "",
    role_id: "",
  };

  const registerSubmit = async (values: FormRegisterValues) => {
    try {
      const res = await axios.post(
        "http://localhost:8000/api/users/store",
        values
      );
      if (res.data.is_success) {
        navigate("/login");
      }
    } catch (err: any) {
      if (err.response.data.status === 400) {
        setErrorMsg(err.response.data.message);
      } else {
        setErrorMsg(err.response.data.message);
      }
    }
  };

  return (
    <StyledSectionSignup>
      <StyledHeaderRegister>Rejestracja</StyledHeaderRegister>
      <StyledAreaErrorMessage className={`${errorMsg ? "errorMsg" : ""}`}>
        <StyledErrorMessage>{errorMsg}</StyledErrorMessage>
      </StyledAreaErrorMessage>
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

export default RegisterPage;
