import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store";
import { openConfirmModal } from "../../store/modalSlice";
import {
  minusProductQuantity,
  plusProductQuantity,
  removeProductFromCart,
} from "../../store/cartSlice";
import { Product } from "../../types/product";

import {
  StyledAddDiscButton,
  StyledAreaButtonRemoveAll,
  StyledAreaButtons,
  StyledAreaSmallButtons,
  StyledAreaSummary,
  StyledAreaTable,
  StyledAreaTitleEmptyCart,
  StyledBodyRow,
  StyledBodyRowTable,
  StyledBodyTable,
  StyledButton,
  StyledButtonOrder,
  StyledButtonRemoveAll,
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
  StyledLinkShop,
  StyledPriceSum,
  StyledQuantity,
  StyledRemoveButton,
  StyledSummaryCartContainer,
  StyledTable,
} from "./CartPage.css";

const CartPage = () => {
  const dispatch = useDispatch();

  const { cartProducts } = useSelector((state: RootState) => state.cart);

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
            {cartProducts.map((productCart: Product) => (
              <StyledBodyRowTable key={productCart.id}>
                <StyledBodyRow>{productCart.title}</StyledBodyRow>
                <StyledBodyRow>{productCart.price}</StyledBodyRow>
                <StyledBodyRow>
                  <StyledAreaSmallButtons>
                    <StyledButton
                      onClick={() =>
                        productCart.quantity > 1
                          ? dispatch(minusProductQuantity(productCart))
                          : dispatch(removeProductFromCart(productCart))
                      }
                    >
                      -
                    </StyledButton>
                    <StyledQuantity>{productCart.quantity}</StyledQuantity>
                    <StyledButton
                      onClick={() => dispatch(plusProductQuantity(productCart))}
                    >
                      +
                    </StyledButton>
                  </StyledAreaSmallButtons>
                </StyledBodyRow>
                <StyledBodyRow>-</StyledBodyRow>
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
      {cartProducts.length > 0 && (
        <StyledAreaButtonRemoveAll>
          <StyledButtonRemoveAll
            type="button"
            onClick={() => dispatch(openConfirmModal())}
          >
            Usuń wszystkie produkty
          </StyledButtonRemoveAll>
        </StyledAreaButtonRemoveAll>
      )}
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
        <StyledLinkShop to={"/shop"}>Kontynuuj zakupy</StyledLinkShop>
        <StyledButtonOrder>Zamówienie</StyledButtonOrder>
      </StyledAreaButtons>
    </StyledCartSection>
  );
};

export default CartPage;
