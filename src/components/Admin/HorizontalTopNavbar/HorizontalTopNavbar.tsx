import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
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
                  <Link to={"/login"}>
                    <StyledListItemCareNav onClick={() => dispatch(logOut())}>
                      Wyloguj się
                    </StyledListItemCareNav>
                  </Link>
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
