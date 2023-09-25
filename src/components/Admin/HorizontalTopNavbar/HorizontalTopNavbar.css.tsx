import styled from "styled-components";
import { AiOutlineCaretDown } from "react-icons/ai";
import { BsPersonCircle } from "react-icons/bs";

export const StyledHorizontalHeader = styled.header`
  width: 100vw;
  height: 100px;
  background-color: #d2d2d2;
`;

export const StyledAreaContentTopNavbar = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-around;
`;

export const StyledHeaderTop = styled.h4`
  color: #000;
  font-size: 22px;
  font-weight: 600;
  letter-spacing: 2px;

  @media (min-width: 1024px) and (max-width: 1200px) {
    font-size: 20px;
  }

  @media (min-width: 992px) and (max-width: 1024px) {
    font-size: 19px;
  }

  @media (min-width: 768px) and (max-width: 992px) {
    font-size: 18px;
  }

  @media (max-width: 768px) {
    font-size: 16px;
  }
`;

export const StyledAreaLoginAdminPerson = styled.div`
  width: 350px;
  height: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  column-gap: 10px;

  @media (min-width: 992px) and (max-width: 1024px) {
    width: 320px;
  }

  @media (min-width: 768px) and (max-width: 992px) {
    width: 300px;
  }

  @media (max-width: 768px) {
    width: 120px;
  }
`;

export const StyledPersonIcon = styled(BsPersonCircle)`
  width: 30px;
  height: 30px;
  color: #444444;

  @media (min-width: 1024px) and (max-width: 1200px) {
    width: 28px;
    height: 28px;
  }

  @media (min-width: 992px) and (max-width: 1024px) {
    width: 25px;
    height: 25px;
  }

  @media (min-width: 768px) and (max-width: 992px) {
    width: 22px;
    height: 22px;
  }

  @media (max-width: 768px) {
    width: 20px;
    height: 20px;
  }
`;

export const StyledHeaderActualPanel = styled.h6`
  color: #000;
  font-size: 16px;
  font-weight: 600;

  @media (max-width: 768px) {
    font-size: 14px;
  }
`;

export const StyledNameLoginPerson = styled.p`
  color: #000;
  font-size: 16px;
  font-weight: 400;

  @media (max-width: 768px) {
    display: none;
  }
`;

export const StyledCareDownIcon = styled(AiOutlineCaretDown)`
  width: 25px;
  height: 25px;
  color: #000;
  cursor: pointer;

  @media (max-width: 768px) {
    width: 20px;
    height: 20px;
  }
`;

export const StyledCareNav = styled.nav`
  width: 40%;
  position: relative;

  @media (min-width: 992px) and (max-width: 1024px) {
    width: 35%;
  }

  @media (min-width: 768px) and (max-width: 992px) {
    width: 30%;
  }

  @media (max-width: 768px) {
    width: 100%;
  }
`;

export const StyledSiteCareNav = styled.div`
  width: 100%;
  height: 50px;
  background-color: #fff;
  position: absolute;
  top: 10px;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 10;

  @media (min-width: 992px) and (max-width: 1024px) {
    height: 45px;
  }

  @media (min-width: 768px) and (max-width: 992px) {
    height: 40px;
  }

  @media (max-width: 768px) {
    height: 32px;
  }
`;

export const StyledListCareNav = styled.ul`
  padding: 0;
  list-style: none;
`;

export const StyledListItemCareNav = styled.button`
  width: 100%;
  color: #000;
  background-color: transparent;
  font-size: 16px;
  border: none;
  cursor: pointer;

  &:hover {
    opacity: 0.7;
  }

  @media (min-width: 992px) and (max-width: 1024px) {
    font-size: 14px;
  }

  @media (min-width: 768px) and (max-width: 992px) {
    font-size: 12px;
  }

  @media (max-width: 768px) {
    font-size: 10px;
    letter-spacing: 1px;
  }
`;
