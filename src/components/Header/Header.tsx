import React, { useState } from "react";
import { Link } from "react-router-dom";
import { TiShoppingCart } from "react-icons/ti";
import SmallNavbar from "../SmallNavbar/SmallNavbar";
import InputSearch from "../InputSearch/InputSearch";

import {
  StyledAreaLogo,
  StyledAreaSearch,
  StyledBasketArea,
  StyledBasketIcon,
  StyledContentHeader,
  StyledHeader,
  StyledLogoImage,
  StyledNavLink,
  StyledNavMenu,
  StyledListMenu,
} from "./Header.css";

const Header = () => {
  const logo = require("../../images/logoo.jpg");

  const [isOpenMobileMenu, setIsOpenMobileMenu] = useState<boolean>(false);

  return (
    <StyledHeader>
      <SmallNavbar
        isOpenMobileMenu={isOpenMobileMenu}
        setIsOpenMobileMenu={setIsOpenMobileMenu}
      />
      <StyledContentHeader>
        <Link to={"/"}>
          <StyledAreaLogo>
            <StyledLogoImage
              src={logo}
              alt="logo shop"
            />
          </StyledAreaLogo>
        </Link>
        <StyledAreaSearch>
          <InputSearch
            title="Szukaj w sklepie..."
            type="button"
            button="Wyszukaj"
          />
        </StyledAreaSearch>
        <StyledBasketArea>
          <StyledBasketIcon>
            <TiShoppingCart />
          </StyledBasketIcon>
        </StyledBasketArea>
      </StyledContentHeader>
      <StyledNavMenu isOpenMobileMenu={isOpenMobileMenu}>
        <StyledListMenu>
          <StyledNavLink to={"/"}>Strona główna</StyledNavLink>
          <StyledNavLink to={""}>Sklep</StyledNavLink>
          <StyledNavLink to={""}>Blog</StyledNavLink>
          <StyledNavLink to={""}>Kontakt</StyledNavLink>
        </StyledListMenu>
      </StyledNavMenu>
    </StyledHeader>
  );
};

export default Header;
