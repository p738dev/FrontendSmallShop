import React from "react";

import {
  StyledAreaTitleDesc,
  StyledDescProductPage,
  StyledHeader,
  StyledTitle,
} from "./DescribeProductPage.css";

const DescProductPage = () => {
  return (
    <StyledDescProductPage>
      <StyledAreaTitleDesc>
        <StyledHeader>Piękno ma znaczenie</StyledHeader>
        <StyledTitle>
          Produkt zaprojektowany przez najlepszych specjalistów.
        </StyledTitle>
        <StyledHeader>Jakość i wykonanie</StyledHeader>
        <StyledTitle>
          Produkt wykonany z najlepszej jakości materiałów dostępnych na
          światowym rynku. Produkowana w polsce. Gwarantuje to trwałość i
          elegancję przez wiele lat użytkowania tego produktu.
        </StyledTitle>
        <StyledHeader>Trendy ciągle w modzie</StyledHeader>
        <StyledTitle>
          Podążaj za trendami. Warto podążać za trendami.
        </StyledTitle>
      </StyledAreaTitleDesc>
    </StyledDescProductPage>
  );
};

export default DescProductPage;
