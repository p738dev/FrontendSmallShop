import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store";
import { removeProductFromCart } from "../../store/cartSlice";
import { Product } from "../../types/product";

import {
  StyledAddDiscButton,
  StyledAreaButtons,
  StyledAreaSummary,
  StyledAreaTable,
  StyledAreaTitleEmptyCart,
  StyledBodyRow,
  StyledBodyRowTable,
  StyledBodyTable,
  StyledButtonOrder,
  StyledButtonShop,
  StyledCartSection,
  StyledDiscountArea,
  StyledHeaderCart,
  StyledHeaderDisc,
  StyledHeaderEmptyCart,
  StyledHeaderRow,
  StyledHeaderRowTable,
  StyledHeaderSum,
  StyledHeaderTable,
  StyledInput,
  StyledPriceSum,
  StyledRemoveButton,
  StyledSummaryCartContainer,
  StyledTable,
} from "./CartPage.css";

const CartPage = () => {
  const dispatch = useDispatch();

  const { cartProducts } = useSelector((state: RootState) => state.cart);
  console.log(cartProducts);

  return (
    <StyledCartSection>
      <StyledHeaderCart>Koszyk</StyledHeaderCart>
      <StyledAreaTable>
        <StyledTable>
          <StyledHeaderTable>
            <StyledHeaderRowTable>
              <StyledHeaderRow>Produkt</StyledHeaderRow>
              <StyledHeaderRow>Cena</StyledHeaderRow>
              <StyledHeaderRow>Ilość</StyledHeaderRow>
              <StyledHeaderRow>Suma</StyledHeaderRow>
              <StyledHeaderRow>Usuń</StyledHeaderRow>
            </StyledHeaderRowTable>
          </StyledHeaderTable>
          <StyledBodyTable>
            {cartProducts.map((productCart: Product, index) => (
              <StyledBodyRowTable key={index}>
                <StyledBodyRow>{productCart.title}</StyledBodyRow>
                <StyledBodyRow>{productCart.price}</StyledBodyRow>
                <StyledBodyRow>ss</StyledBodyRow>
                <StyledBodyRow>ss</StyledBodyRow>
                <StyledBodyRow>
                  <StyledRemoveButton
                    onClick={() => dispatch(removeProductFromCart(productCart))}
                  >
                    Usuń
                  </StyledRemoveButton>
                </StyledBodyRow>
              </StyledBodyRowTable>
            ))}
          </StyledBodyTable>
        </StyledTable>
      </StyledAreaTable>
      {cartProducts.length === 0 && (
        <StyledAreaTitleEmptyCart>
          <StyledHeaderEmptyCart>Koszyk jest pusty.</StyledHeaderEmptyCart>
        </StyledAreaTitleEmptyCart>
      )}
      <StyledSummaryCartContainer>
        <StyledDiscountArea>
          <StyledHeaderDisc>Mam kupon rabatowy:</StyledHeaderDisc>
          <StyledInput
            type="text"
            placeholder="Wpisz kod"
          />
          <StyledAddDiscButton type="button">Dodaj</StyledAddDiscButton>
        </StyledDiscountArea>
        <StyledAreaSummary>
          <StyledHeaderSum>Podsumowanie:</StyledHeaderSum>
          <StyledPriceSum>Cena produktów:</StyledPriceSum>
          <StyledPriceSum>Suma:</StyledPriceSum>
        </StyledAreaSummary>
      </StyledSummaryCartContainer>
      <StyledAreaButtons>
        <StyledButtonShop>Kontynuuj zakupy</StyledButtonShop>
        <StyledButtonOrder>Zamówienie</StyledButtonOrder>
      </StyledAreaButtons>
    </StyledCartSection>
  );
};

export default CartPage;
