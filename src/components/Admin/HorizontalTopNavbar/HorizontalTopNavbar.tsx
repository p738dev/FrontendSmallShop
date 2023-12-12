import React, { useState } from "react";
import { useDispatch } from "react-redux";
import Cookies from "js-cookie";
import { AppDispatch } from "../../../store";
import { logOut } from "../../../store/logoutSlice";

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
  const dispatch = useDispatch<AppDispatch>();

  const [isOpenCareDown, setIsOpenCareDawn] = useState<boolean>(false);

  const name = Cookies.get("name");

  return (
    <StyledHorizontalHeader>
      <StyledAreaContentTopNavbar>
        <StyledHeaderTop>Panel Admin</StyledHeaderTop>
        <StyledHeaderActualPanel>Shop</StyledHeaderActualPanel>
        <StyledAreaLoginAdminPerson>
          <StyledPersonIcon />
          <StyledNameLoginPerson>{name}</StyledNameLoginPerson>
          <StyledCareDownIcon
            onClick={() => setIsOpenCareDawn(!isOpenCareDown)}
          />
          {isOpenCareDown && (
            <StyledCareNav>
              <StyledSiteCareNav>
                <StyledListCareNav>
                  <StyledListItemCareNav onClick={() => dispatch(logOut())}>
                    Wyloguj się
                  </StyledListItemCareNav>
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
