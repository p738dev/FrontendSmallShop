import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Product } from "../../types/product";
import { AppDispatch, RootState } from "../../store";
import { getShopProducts } from "../../store/shopSlice";

import {
  StyledShopContainer,
  StyledShopSection,
  StyledAreaCartBottom,
  StyledAreaDescProduct,
  StyledCardAreaProducts,
  StyledCart,
  StyledDescProduct,
  StyledTitleProductInCart,
  StyledValuePrice,
  StyledValueCategory,
  StyledAreaButtonLoad,
  StyledButton,
  StyledAddToCartButton,
  StyledViewProduct,
  StyledLoadingContainer,
} from "./ShopPage.css";

const ShopPage = () => {
  const dispatch = useDispatch<AppDispatch>();

  const { products, page, isLoading, last_page } = useSelector(
    (state: RootState) => state.shop
  );

  const [currentPage, setCurrentPage] = useState<number>(1);

  useEffect(() => {
    dispatch(getShopProducts({ page: currentPage }));
  }, [currentPage]);

  if (isLoading) {
    return (
      <StyledLoadingContainer>
        <h3>Loading...</h3>
      </StyledLoadingContainer>
    );
  }
  return (
    <StyledShopSection>
      <StyledShopContainer>
        <StyledCardAreaProducts>
          {products.map((product: Product) => (
            <StyledCart key={product.id}>
              <StyledTitleProductInCart>
                {product.title}
              </StyledTitleProductInCart>
              <StyledAreaDescProduct>
                <StyledDescProduct>{product.desc}</StyledDescProduct>
              </StyledAreaDescProduct>
              <StyledAreaCartBottom>
                <p>
                  Cena:
                  <StyledValuePrice> {product.price}$</StyledValuePrice>
                </p>
                <p>
                  Kategoria:
                  <StyledValueCategory>{product.category}</StyledValueCategory>
                </p>
              </StyledAreaCartBottom>
              <StyledAddToCartButton type="button">
                Dodaj do koszyka
              </StyledAddToCartButton>
              <StyledViewProduct
                type="button"
                to={`/product/${product.id}`}
              >
                Zobacz produkt
              </StyledViewProduct>
            </StyledCart>
          ))}
        </StyledCardAreaProducts>
        {last_page !== currentPage ? (
          <StyledAreaButtonLoad>
            <StyledButton onClick={() => setCurrentPage(currentPage + 1)}>
              Więcej
            </StyledButton>
          </StyledAreaButtonLoad>
        ) : (
          ""
        )}
      </StyledShopContainer>
    </StyledShopSection>
  );
};

export default ShopPage;
