import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios, { AxiosResponse } from "axios";
import * as Yup from "yup";
import { Formik } from "formik";
import Cookies from "js-cookie";
import { MdErrorOutline } from "react-icons/md";
import { Category, ProductToEdit } from "../../../types/product";

import {
  StyledAreaButtonAdd,
  StyledAreaErrorMessage,
  StyledAreaInput,
  StyledAreaSelect,
  StyledButtonAdd,
  StyledContentInput,
  StyledEditProductContainer,
  StyledErrorMessage,
  StyledErrorMsg,
  StyledForm,
  StyledIconInsideInput,
  StyledInput,
  StyledTextAreaDesc,
} from "./EditProduct.css";

const validationSchema = () =>
  Yup.object().shape({
    title: Yup.string()
      .min(3, "Wprowadź minimum 3 litery.")
      .max(25, "Maksymalna ilość liter to 25."),
    price: Yup.number(),
    desc: Yup.string().max(150),
    category: Yup.string(),
  });

const EditProduct = () => {
  const { id } = useParams();
  const token = Cookies.get("token");

  const [initial, setInitial] = useState<ProductToEdit>({});
  const [errorMsg, setErrorMsg] = useState("");

  const { title, price, desc, category } = initial;

  const initialValues: ProductToEdit = {
    title: initial.title,
    price: initial.price,
    desc: initial.desc,
    category: Category.Empty,
  };

  const loadProduct = async () => {
    const res = await axios.get(`http://localhost:8000/api/products/${id}`);
    setInitial(res.data);
  };

  useEffect(() => {
    loadProduct();
  }, []);

  const storeProduct = async (values: ProductToEdit) => {
    try {
      const res: AxiosResponse<{ success: boolean }> = await axios.put<{
        success: boolean;
      }>(`http://localhost:8000/api/product_update/${id}`, values, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
    } catch (error: any) {
      if (error.response.data.status === 401) {
        setErrorMsg(error.response.data.message);
      } else {
        setErrorMsg(error.response.data.message);
      }
    }
  };

  return (
    <StyledEditProductContainer>
      <Formik
        initialValues={initialValues}
        onSubmit={(values) => storeProduct(values)}
        validationSchema={validationSchema}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleSubmit,
          handleBlur,
        }) => (
          <StyledForm onSubmit={handleSubmit}>
            <StyledAreaErrorMessage className={`${errorMsg ? "errorMsg" : ""}`}>
              <StyledErrorMessage>{errorMsg}</StyledErrorMessage>
            </StyledAreaErrorMessage>
            <StyledAreaInput>
              <StyledContentInput>
                <StyledInput
                  type="text"
                  placeholder="Nazwa"
                  value={values.title || title}
                  name="title"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={`${
                    errors.title && touched.title ? "invalid" : ""
                  }`}
                />
                <StyledIconInsideInput
                  className={`${
                    errors.title && touched.title ? "invalid" : ""
                  }`}
                >
                  <MdErrorOutline />
                </StyledIconInsideInput>
              </StyledContentInput>
              {errors.title && touched.title && (
                <StyledErrorMsg>{errors.title}</StyledErrorMsg>
              )}
            </StyledAreaInput>
            <StyledAreaInput>
              <StyledContentInput>
                <StyledInput
                  type="number"
                  placeholder="Cena"
                  name="price"
                  value={values.price || price}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={`${
                    errors.price && touched.price ? "invalid" : ""
                  }`}
                />
                <StyledIconInsideInput
                  className={`${
                    errors.price && touched.price ? "invalid" : ""
                  }`}
                >
                  <MdErrorOutline />
                </StyledIconInsideInput>
                {errors.price && touched.price && (
                  <StyledErrorMsg>{errors.price}</StyledErrorMsg>
                )}
              </StyledContentInput>
            </StyledAreaInput>
            <StyledAreaInput>
              <StyledContentInput>
                <StyledTextAreaDesc
                  name="desc"
                  rows={5}
                  value={values.desc || desc}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={`${errors.desc && touched.desc ? "invalid" : ""}`}
                  placeholder="Opis..."
                ></StyledTextAreaDesc>
                <StyledIconInsideInput
                  className={`${errors.desc && touched.desc ? "invalid" : ""}`}
                >
                  <MdErrorOutline />
                </StyledIconInsideInput>
                {errors.desc && touched.desc && (
                  <StyledErrorMsg>{errors.desc}</StyledErrorMsg>
                )}
              </StyledContentInput>
            </StyledAreaInput>
            <StyledAreaInput>
              <StyledContentInput>
                <StyledAreaSelect
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.category || category}
                  name="category"
                  className={`${
                    errors.category && touched.category ? "invalid" : ""
                  }`}
                >
                  <option></option>
                  <option>{Category.Bargain}</option>
                  <option>{Category.Newest}</option>
                  <option>{Category.Regular}</option>
                  <option>{Category.Sale}</option>
                </StyledAreaSelect>
                <StyledIconInsideInput
                  className={`${
                    errors.category && touched.category ? "invalid" : ""
                  }`}
                >
                  <MdErrorOutline />
                </StyledIconInsideInput>
                {errors.category && touched.category && (
                  <StyledErrorMsg>{errors.category}</StyledErrorMsg>
                )}
              </StyledContentInput>
            </StyledAreaInput>
            <StyledAreaButtonAdd>
              <StyledButtonAdd type="submit">Edytuj</StyledButtonAdd>
            </StyledAreaButtonAdd>
          </StyledForm>
        )}
      </Formik>
    </StyledEditProductContainer>
  );
};

export default EditProduct;
