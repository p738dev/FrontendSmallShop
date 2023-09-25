import React, { useState } from "react";

import {
  StyledAreaContentTopNavbar,
  StyledAreaLoginAdminPerson,
  StyledCareDownIcon,
  StyledCareNav,
  StyledHeaderActualPanel,
  StyledHeaderTop,
  StyledHorizontalHeader,
  StyledListCareNav,
  StyledListItemCareNav,
  StyledNameLoginPerson,
  StyledPersonIcon,
  StyledSiteCareNav,
} from "./HorizontalTopNavbar.css";

const HorizontalTopNavbar = () => {
  const [isOpenCareDown, setIsOpenCareDawn] = useState<boolean>(false);

  return (
    <StyledHorizontalHeader>
      <StyledAreaContentTopNavbar>
        <StyledHeaderTop>Panel Admin</StyledHeaderTop>
        <StyledHeaderActualPanel>Shop</StyledHeaderActualPanel>
        <StyledAreaLoginAdminPerson>
          <StyledPersonIcon />
          <StyledNameLoginPerson>Jan Kowalski</StyledNameLoginPerson>
          <StyledCareDownIcon
            onClick={() => setIsOpenCareDawn(!isOpenCareDown)}
          />
          {isOpenCareDown && (
            <StyledCareNav>
              <StyledSiteCareNav>
                <StyledListCareNav>
                  <StyledListItemCareNav>Wyloguj się</StyledListItemCareNav>
                </StyledListCareNav>
              </StyledSiteCareNav>
            </StyledCareNav>
          )}
        </StyledAreaLoginAdminPerson>
      </StyledAreaContentTopNavbar>
    </StyledHorizontalHeader>
  );
};

export default HorizontalTopNavbar;
