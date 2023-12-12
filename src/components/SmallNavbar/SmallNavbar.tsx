import React, { Dispatch, SetStateAction } from "react";
import { Link } from "react-router-dom";
import Cookies from "js-cookie";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../store";
import { logOut } from "../../store/logoutSlice";
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
  StyledButtonLogout,
  StyledContainerSmallNavbar,
  StyledEmailAndPhone,
  StyledIconButton,
  StyledIconInfo,
  StyledIconMobileMenu,
  StyledInfoClient,
  StyledMobileMenu,
} from "./SmallNavbar.css";

interface Props {
  isOpenMobileMenu: boolean;
  setIsOpenMobileMenu: Dispatch<SetStateAction<boolean>>;
}

const SmallNavbar = ({ isOpenMobileMenu, setIsOpenMobileMenu }: Props) => {
  const dispatch = useDispatch<AppDispatch>();

  const toggleBarsMobileMenu = () => {
    isOpenMobileMenu ? setIsOpenMobileMenu(false) : setIsOpenMobileMenu(true);
  };

  const token = Cookies.get("token");

  return (
    <StyledContainerSmallNavbar>
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
          {token ? (
            <StyledButtonLogout onClick={() => dispatch(logOut())}>
              Wyloguj się
            </StyledButtonLogout>
          ) : (
            <StyledButtonLoginOrRegister>
              Zaloguj się
            </StyledButtonLoginOrRegister>
          )}
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
    </StyledContainerSmallNavbar>
  );
};

export default SmallNavbar;
