import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const StyledHeader = styled.header`
  width: 80vw;
  height: 250px;
  margin: 0 auto;
  //margin-bottom: 40px;
  /* position: sticky;
  top: 0;
  z-index: 9999; */
`;

export const StyledContentHeader = styled.div`
  margin-bottom: 20px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  column-gap: 5px;
`;

export const StyledAreaLogo = styled.div`
  width: 320px;
  height: 120px;

  @media only screen and (max-width: 992px) {
    width: 220px;
    height: 80px;
  }

  @media only screen and (max-width: 768px) {
    width: 150px;
    height: 60px;
    display: none;
  }
`;

export const StyledLogoImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;
export const StyledAreaSearch = styled.div`
  width: 500px;
  height: 120px;
  display: flex;
  justify-content: center;
  align-items: center;

  @media only screen and (max-width: 992px) {
    width: 380px;
    height: 80px;
  }

  @media only screen and (max-width: 768px) {
    width: 280px;
    height: 60px;
  }
`;

export const StyledBasketArea = styled.div`
  width: 200px;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;

  @media only screen and (max-width: 992px) {
    width: 150px;
  }

  @media only screen and (max-width: 768px) {
    width: 100px;
  }
`;

export const StyledBasketIcon = styled.span`
  font-size: 35px;
  cursor: pointer;

  &:hover {
    transform: scale(1.1);
  }
`;

export const StyledNavMenu = styled.nav<{ isOpenMobileMenu: boolean }>`
  background-color: lightgray;
  box-shadow: 0px 5px 5px lightgray;

  @media only screen and (max-width: 768px) {
    width: 100vw;
    height: 100vh;
    position: fixed;
    top: 0;
    left: 0;
    display: ${({ isOpenMobileMenu }) =>
      !isOpenMobileMenu ? "none" : "block"};
    z-index: 9999;
  }
`;

export const StyledListMenu = styled.ul`
  width: 80%;
  height: 38px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  list-style: none;

  @media only screen and (max-width: 768px) {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    right: 0;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    row-gap: 20px;
    z-index: 999;
  }
`;

export const StyledNavLink = styled(NavLink)`
  color: #000;
  text-decoration: none;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;

  &:hover {
    opacity: 0.3;
  }
`;

export const StyledMobileMenu = styled.div`
  width: 80px;
  height: 80px;
  display: none;

  @media only screen and (max-width: 768px) {
    display: block;
    z-index: 99999;
  }
`;

export const StyledIconMobileMenu = styled.button`
  padding: 20px;
  background-color: transparent;
  color: #000;
  font-size: 28px;

  border: none;
  cursor: pointer;
`;
