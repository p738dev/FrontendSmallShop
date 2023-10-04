import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { AiOutlineBars } from "react-icons/ai";

export const StyledVerticalHeader = styled.header`
  width: 300px;
  height: 100vh;
  background-color: #d2d2d2;
  position: relative;

  @media (min-width: 992px) and (max-width: 1024px) {
    width: 200px;
  }

  @media (max-width: 992px) {
    width: 300px;
    background-color: transparent;
  }
`;

export const StyledNavVertical = styled.nav`
  @media (min-width: 993px) {
    width: 100%;
    height: 80%;
    display: flex;
    justify-content: center;
  }

  @media (max-width: 992px) {
    display: none;

    &.mobile {
      width: 100%;
      height: 80%;
      background-color: #d2d2d2;
      display: block;
      position: absolute;
      top: 0;
      left: 0;
      z-index: 10;
    }
  }
`;

export const StyledListVerticalNav = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  justify-content: space-around;

  @media (max-width: 992px) {
    &.mobile {
      width: 100%;
      height: 100%;
      align-items: center;
    }
  }
`;

export const StyledListNav = styled(NavLink)`
  color: #000;
  text-decoration: none;
  font-size: 16px;
  font-weight: 600;

  &:hover {
    transform: scale(1.1);
  }

  &:focus {
    color: #66aceb;
  }

  @media (min-width: 992px) and (max-width: 1024px) {
    font-size: 15px;
  }

  @media (max-width: 992px) {
    font-size: 14px;
  }
`;

export const StyledMobileBar = styled(AiOutlineBars)`
  display: none;

  @media (max-width: 992px) {
    display: block;
    width: 30px;
    height: 30px;
    margin: 10px;
    position: absolute;
    top: 5px;
    left: 5px;
    cursor: pointer;
    z-index: 100;
  }
`;
