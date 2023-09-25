import React, { useState } from "react";

import {
  StyledListNav,
  StyledListVerticalNav,
  StyledMobileBar,
  StyledNavVertical,
  StyledVerticalHeader,
} from "./VerticalLeftNavbar.css";

const VerticalLeftNavbar = () => {
  const [isOpenMobileMenu, setIsOpenMobileMenu] = useState<boolean>(false);

  return (
    <StyledVerticalHeader>
      <StyledNavVertical className={isOpenMobileMenu ? "mobile" : ""}>
        <StyledListVerticalNav className={isOpenMobileMenu ? "mobile" : ""}>
          <StyledListNav to={"/admin"}>Strona główna</StyledListNav>
          <StyledListNav to={"products"}>Produkty</StyledListNav>
          <StyledListNav to={"users"}>Użytkownicy</StyledListNav>
          <StyledListNav to={""}>Zamówienia</StyledListNav>
          <StyledListNav to={""}>Rabaty</StyledListNav>
        </StyledListVerticalNav>
      </StyledNavVertical>

      <StyledMobileBar onClick={() => setIsOpenMobileMenu(!isOpenMobileMenu)} />
    </StyledVerticalHeader>
  );
};

export default VerticalLeftNavbar;
