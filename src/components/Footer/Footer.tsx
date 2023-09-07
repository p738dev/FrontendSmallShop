import React from "react";
import { GrLocation } from "react-icons/gr";
import { AiOutlinePhone } from "react-icons/ai";
import { MdOutlineAlternateEmail } from "react-icons/md";

import {
  StyledAboutUs,
  StyledAreaContentFooter,
  StyledContactFooter,
  StyledFooter,
  StyledHeaderInfo,
  StyledIcon,
  StyledImage,
  StyledInfo,
  StyledInfoFooter,
  StyledListInfo,
  StyledLogoInFooter,
  StyledNav,
  StyledTitle,
} from "./Footer.css";

const Footer = () => {
  const logo = require("../../images/logoo.jpg");

  return (
    <StyledFooter>
      <StyledAreaContentFooter>
        <StyledContactFooter>
          <StyledLogoInFooter>
            <StyledImage
              src={logo}
              alt="logo"
            />
          </StyledLogoInFooter>
          <StyledInfo>
            <StyledIcon>
              <GrLocation />
            </StyledIcon>
            <StyledTitle>
              Shop Center, Twój sklep, Wolska 22, 33-443 Pszczyna.
            </StyledTitle>
          </StyledInfo>

          <StyledInfo>
            <StyledIcon>
              <AiOutlinePhone />
            </StyledIcon>
            <StyledTitle>125 - 647 - 865</StyledTitle>
          </StyledInfo>
          <StyledInfo>
            <StyledIcon>
              <MdOutlineAlternateEmail />
            </StyledIcon>
            <StyledTitle>moder@new.com</StyledTitle>
          </StyledInfo>
        </StyledContactFooter>
        <StyledInfoFooter>
          <StyledHeaderInfo>Informacje</StyledHeaderInfo>
          <StyledListInfo>
            <li>
              <StyledNav>Dostawa</StyledNav>
            </li>
            <li>
              <StyledNav>Zwroty i reklamacje</StyledNav>
            </li>
            <li>
              <StyledNav>Regulamin</StyledNav>
            </li>
            <li>
              <StyledNav>Polityka prywatności</StyledNav>
            </li>
            <li>
              <StyledNav>Sposoby płatności</StyledNav>
            </li>
            <li>
              <StyledNav>Kontakt</StyledNav>
            </li>
          </StyledListInfo>
        </StyledInfoFooter>
        <StyledAboutUs>
          <StyledHeaderInfo>O nas</StyledHeaderInfo>
          <p>
            <StyledNav>O nas</StyledNav>
          </p>
        </StyledAboutUs>
      </StyledAreaContentFooter>
    </StyledFooter>
  );
};

export default Footer;
