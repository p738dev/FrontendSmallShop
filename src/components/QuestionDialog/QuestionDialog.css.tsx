import styled from "styled-components";

export const StyledDialogContainer = styled.div`
  width: 400px;
  height: 120px;
  background-color: #d5dbdb;
  position: absolute;
  top: 5%;
  right: 3%;
  box-shadow: 30px 20px 10px #bfc9ca;
  overflow: hidden;
`;

export const StyledAreaDescDialog = styled.div`
  padding: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const StyledTitleDialog = styled.p`
  text-align: center;
  color: #222;
  font-size: 18px;
`;

export const StyledButtonsArea = styled.div`
  width: 200px;
  height: 30px;
  margin: 0 auto;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

export const StyledButton = styled.button`
  width: 70px;
  height: 35px;
  color: #ef1313;
  font-size: 16px;
  border: none;
  cursor: pointer;

  &:hover {
    transform: scale(1.1);
  }
`;
