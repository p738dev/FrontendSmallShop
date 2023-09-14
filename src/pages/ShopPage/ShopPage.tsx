import React, { useEffect, useState } from "react";
import { Product } from "../../types/product";
import axios from "axios";

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
} from "./ShopPage.css";

const ShopPage = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [page, setPage] = useState<number>(1);
  const [lastPage, setLastPage] = useState<number>(1);

  const getAllProducts = async () => {
    try {
      const response = await axios.get(
        `http://localhost:8000/api/products?page=${page}`
      );
      setProducts([...products, ...response.data.data]);
      setLastPage(response.data.last_page);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getAllProducts();
  }, [page]);

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
        {lastPage !== page ? (
          <StyledAreaButtonLoad>
            <StyledButton onClick={() => setPage(page + 1)}>
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
