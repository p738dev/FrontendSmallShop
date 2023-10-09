import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Formik } from "formik";
import axios from "axios";
import { Category, ProductToAdd } from "../../../types/product";
import * as Yup from "yup";
import Cookies from "js-cookie";

import {
  StyledAddProductContainer,
  StyledAddProductHeader,
  StyledAreaBackButton,
  StyledAreaButtonAdd,
  StyledAreaErrorMessage,
  StyledAreaInput,
  StyledBackButton,
  StyledButtonAdd,
  StyledErrorMessage,
  StyledErrorMsg,
  StyledForm,
  StyledInput,
  StyledSelect,
  StyledTextAreaDesc,
} from "./AddProduct.css";

const validationSchema = () =>
  Yup.object().shape({
    title: Yup.string()
      .min(3, "Wprowadź minimum 3 litery.")
      .max(25, "Maksymalna ilość liter to 25.")
      .required("Pole nie może być puste."),
    price: Yup.number().required("Pole nie może być puste."),
    desc: Yup.string().max(150).required("Pole nie może być puste."),
    category: Yup.string().required("Pole nie może być puste."),
  });

const AddProduct = () => {
  const navigate = useNavigate();

  const [errorMsg, setErrorMsg] = useState("");

  const token = Cookies.get("token");

  const initialValues: ProductToAdd = {
    title: "",
    price: 0,
    desc: "",
    category: Category.Empty,
  };

  const addProduct = async (product: ProductToAdd) => {
    try {
      const res = await axios.post(
        "http://localhost:8000/api/products",
        product,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      if (res.data.is_success) {
        navigate("/admin/products");
      }
    } catch (error: any) {
      if (error.response.data.status === 401) {
        setErrorMsg(error.response.data.message);
      } else {
        setErrorMsg(error.response.data.message);
      }
    }
  };

  const formSubmit = async (values: ProductToAdd) => {
    const productToAdd = { ...values };
    await addProduct(productToAdd);
  };

  return (
    <>
      <StyledAreaBackButton>
        <Link to="/admin/products">
          <StyledBackButton>Powrót</StyledBackButton>
        </Link>
      </StyledAreaBackButton>
      <StyledAddProductContainer>
        <StyledAddProductHeader>Dodaj produkt</StyledAddProductHeader>
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
            <StyledForm onSubmit={handleSubmit}>
              <StyledAreaErrorMessage
                className={`${errorMsg ? "errorMsg" : ""}`}
              >
                <StyledErrorMessage>{errorMsg}</StyledErrorMessage>
              </StyledAreaErrorMessage>
              <StyledAreaInput>
                <StyledInput
                  type="text"
                  placeholder="Nazwa"
                  value={values.title}
                  name="title"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={`${
                    errors.title && touched.title ? "invalid" : ""
                  }`}
                />
                {errors.title && touched.title && (
                  <StyledErrorMsg>{errors.title}</StyledErrorMsg>
                )}
                <StyledInput
                  type="text"
                  placeholder="Cena"
                  name="price"
                  value={values.price}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={`${
                    errors.price && touched.price ? "invalid" : ""
                  }`}
                />
                {errors.price && touched.price && (
                  <StyledErrorMsg>{errors.price}</StyledErrorMsg>
                )}
                <StyledTextAreaDesc
                  name="desc"
                  rows={5}
                  value={values.desc}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  placeholder="Opis..."
                  className={`${errors.desc && touched.desc ? "invalid" : ""}`}
                ></StyledTextAreaDesc>
                {errors.desc && touched.desc && (
                  <StyledErrorMsg>{errors.desc}</StyledErrorMsg>
                )}
                <StyledSelect
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.category}
                  name="category"
                  className={`${
                    errors.category && touched.category ? "invalid" : ""
                  }`}
                >
                  <option>{Category.Empty}</option>
                  <option>{Category.Bargain}</option>
                  <option>{Category.Newest}</option>
                  <option>{Category.Regular}</option>
                  <option>{Category.Sale}</option>
                </StyledSelect>
                {errors.category && touched.category && (
                  <StyledErrorMsg>{errors.category}</StyledErrorMsg>
                )}
              </StyledAreaInput>
              <StyledAreaButtonAdd>
                <StyledButtonAdd type="submit">Dodaj</StyledButtonAdd>
              </StyledAreaButtonAdd>
            </StyledForm>
          )}
        </Formik>
      </StyledAddProductContainer>
    </>
  );
};

export default AddProduct;
