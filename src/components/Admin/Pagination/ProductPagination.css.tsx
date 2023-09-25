import styled from "styled-components";

export const StyledAreaPagination = styled.div`
  width: 100%;
  height: 50px;
  padding-bottom: 5px;
  display: flex;
  justify-content: center;
`;

export const StyledAreaNav = styled.nav`
  width: 50%;
  height: 100%;
`;

export const StyledAreaList = styled.ul`
  height: 100%;
  list-style: none;
  display: flex;
  align-items: center;
  justify-content: space-around;
`;

export const StyledButtonPage = styled.button`
  width: 35px;
  height: 25px;
  background-color: lightblue;
  color: black;
  cursor: pointer;

  &:hover {
    opacity: 0.7;
  }

  &:active {
    scale: 0.9;
  }
`;
