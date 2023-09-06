import React, { useState } from "react";
import { Link } from "react-router-dom";
import { TiShoppingCart } from "react-icons/ti";
import { FaBars } from "react-icons/fa";
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
  StyledMobileMenu,
  StyledIconMobileMenu,
} from "./Header.css";

const Header = () => {
  const logo = require("../../images/logoo.jpg");

  const [isOpenMobileMenu, setIsOpenMobileMenu] = useState<boolean>(false);

  const toggleBarsMobileMenu = () => {
    isOpenMobileMenu ? setIsOpenMobileMenu(false) : setIsOpenMobileMenu(true);
  };

  return (
    <StyledHeader>
      <SmallNavbar />
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
          <InputSearch title="Szukaj w sklepie..." />
        </StyledAreaSearch>
        <StyledBasketArea>
          <StyledBasketIcon>
            <TiShoppingCart />
          </StyledBasketIcon>
        </StyledBasketArea>
        <StyledMobileMenu>
          <StyledIconMobileMenu onClick={toggleBarsMobileMenu}>
            <FaBars />
          </StyledIconMobileMenu>
        </StyledMobileMenu>
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
