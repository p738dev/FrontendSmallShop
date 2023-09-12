import React, { useEffect, useState } from "react";
import axios, { AxiosResponse } from "axios";
import { useParams } from "react-router-dom";
import { Product } from "../../types/product";
import DescProductPage from "../../components/DescProductPage/DescProductPage";
import QuestionFormProduct from "../../components/QuestionFormProduct/QuestionFormProduct";

import {
  StyledAreaButtonAddCart,
  StyledAreaDescriptionProduct,
  StyledButtonAdd,
  StyledDescribeProductSection,
  StyledDescriptionProduct,
  StyledLeftSideProduct,
  StyledLi,
  StyledListDesc,
  StyledPriceProdukt,
  StyledRightSideProduct,
  StyledSectionProductPage,
  StyledTitleProduct,
} from "./ProductPage.css";

const ProductPage = () => {
  const { id } = useParams();
  const [productDetails, setProductDetails] = useState<Product | null>(null);
  const [current, setCurrent] = useState("desc");

  const fetchProductDetails = async () => {
    const response: AxiosResponse = await axios.get<Product>(
      `http://localhost:8000/api/products/${id}`
    );
    setProductDetails(response.data);
  };

  useEffect(() => {
    fetchProductDetails();
  }, []);

  return (
    <>
      {productDetails && (
        <StyledSectionProductPage>
          <StyledLeftSideProduct>
            <img
              src=""
              alt={productDetails.title}
            />
          </StyledLeftSideProduct>
          <StyledRightSideProduct>
            <StyledTitleProduct>
              <StyledTitleProduct>{productDetails.title}</StyledTitleProduct>
            </StyledTitleProduct>
            <StyledAreaDescriptionProduct>
              <StyledDescriptionProduct>
                {productDetails.desc}
              </StyledDescriptionProduct>
            </StyledAreaDescriptionProduct>
            <StyledPriceProdukt>
              Cena: {productDetails.price}$
            </StyledPriceProdukt>
            <StyledAreaButtonAddCart>
              <StyledButtonAdd>Do koszyka</StyledButtonAdd>
            </StyledAreaButtonAddCart>
          </StyledRightSideProduct>
        </StyledSectionProductPage>
      )}

      <StyledDescribeProductSection>
        <StyledListDesc>
          <StyledLi onClick={() => setCurrent("desc")}>opis</StyledLi>
          <StyledLi onClick={() => setCurrent("question")}>
            zadaj pytanie
          </StyledLi>
        </StyledListDesc>
        {current === "desc" && productDetails && <DescProductPage />}
        {current === "question" && productDetails && <QuestionFormProduct />}
      </StyledDescribeProductSection>
    </>
  );
};

export default ProductPage;
