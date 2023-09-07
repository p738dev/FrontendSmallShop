import React, { Dispatch, SetStateAction } from "react";
import { Link } from "react-router-dom";
import { MdAlternateEmail } from "react-icons/md";
import { BsTelephone } from "react-icons/bs";
import { BiLogoFacebook } from "react-icons/bi";
import { FaInstagram, FaBars } from "react-icons/fa";

import {
  StyledAreaEmailInfo,
  StyledAreaInfoContent,
  StyledAreaPhoneInfo,
  StyledAreaSocialIconInfo,
  StyledButtonLoginOrRegister,
  StyledEmailAndPhone,
  StyledIconButton,
  StyledIconInfo,
  StyledIconMobileMenu,
  StyledInfoClient,
  StyledMobileMenu,
  StyledSectionSmallNavbar,
} from "./SmallNavbar.css";

interface Props {
  isOpenMobileMenu: boolean;
  setIsOpenMobileMenu: Dispatch<SetStateAction<boolean>>;
}

const SmallNavbar = ({ isOpenMobileMenu, setIsOpenMobileMenu }: Props) => {
  const toggleBarsMobileMenu = () => {
    isOpenMobileMenu ? setIsOpenMobileMenu(false) : setIsOpenMobileMenu(true);
  };
  return (
    <StyledSectionSmallNavbar>
      <StyledAreaInfoContent>
        <StyledAreaEmailInfo>
          <StyledIconInfo>
            <MdAlternateEmail />
          </StyledIconInfo>
          <StyledEmailAndPhone>moder@new.com</StyledEmailAndPhone>
        </StyledAreaEmailInfo>
        <StyledAreaPhoneInfo>
          <StyledIconInfo>
            <BsTelephone />
          </StyledIconInfo>
          <StyledEmailAndPhone>125 647 865</StyledEmailAndPhone>
        </StyledAreaPhoneInfo>
        <StyledAreaSocialIconInfo>
          <StyledIconButton>
            <a href="https://www.facebook.com/">
              <BiLogoFacebook color="black" />
            </a>
          </StyledIconButton>
          <StyledIconButton>
            <a href="https://www.instagram.com/">
              <FaInstagram color="black" />
            </a>
          </StyledIconButton>
        </StyledAreaSocialIconInfo>
      </StyledAreaInfoContent>
      <StyledInfoClient>
        <Link to={"/login"}>
          <StyledButtonLoginOrRegister>Zaloguj się</StyledButtonLoginOrRegister>
        </Link>
        <Link to={"/register"}>
          <StyledButtonLoginOrRegister>
            Zarejestruj się
          </StyledButtonLoginOrRegister>
        </Link>
      </StyledInfoClient>
      <StyledMobileMenu>
        <StyledIconMobileMenu onClick={toggleBarsMobileMenu}>
          <FaBars />
        </StyledIconMobileMenu>
      </StyledMobileMenu>
    </StyledSectionSmallNavbar>
  );
};

export default SmallNavbar;
