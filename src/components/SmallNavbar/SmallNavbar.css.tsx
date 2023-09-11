import styled from "styled-components";

export const StyledContainerSmallNavbar = styled.div`
  height: 50px;
  margin-bottom: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: none;
  border-bottom: 1px solid black;

  @media (max-width: 768px) {
    border: none;
  }
`;

export const StyledAreaInfoContent = styled.div`
  width: 380px;
  display: flex;
  justify-content: space-between;
  column-gap: 15px;

  @media (min-width: 467px) and (max-width: 768px) {
    width: 220px;
    column-gap: 10px;
  }

  @media only screen and (max-width: 466px) {
    width: 180px;
    display: block;
    row-gap: 12px;
  }
`;

export const StyledAreaEmailInfo = styled.div`
  display: flex;
  column-gap: 5px;
`;

export const StyledAreaPhoneInfo = styled.div`
  display: flex;
  column-gap: 5px;
`;

export const StyledAreaSocialIconInfo = styled.div`
  display: flex;
  column-gap: 10px;

  @media only screen and (max-width: 768px) {
    display: none;
  }
`;

export const StyledIconInfo = styled.span`
  color: black;
  font-size: 20px;

  @media only screen and (max-width: 768px) {
    display: none;
  }
`;

export const StyledIconButton = styled.button`
  background-color: transparent;
  color: black;
  font-size: 18px;
  border: none;
  cursor: pointer;

  &:hover {
    transform: scale(1.1);
  }
`;

export const StyledEmailAndPhone = styled.p`
  color: black;
  font-size: 16px;
`;

export const StyledInfoClient = styled.div`
  width: 200px;
  height: 30px;
  display: flex;
  justify-content: space-around;
  align-items: center;

  @media (max-width: 768px) {
    margin: 0 20px;
  }
`;

export const StyledButtonLoginOrRegister = styled.button`
  width: 90px;
  height: 30px;
  background-color: transparent;
  color: black;
  font-size: 12px;
  font-weight: 600;
  border: none;
  cursor: pointer;

  &:hover {
    transform: scale(1.1);
  }
`;

export const StyledMobileMenu = styled.div`
  width: 80px;
  height: 80px;
  display: none;

  @media only screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: 25px;
    right: 0;
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
