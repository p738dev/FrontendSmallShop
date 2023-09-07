import styled from "styled-components";

export const StyledSectionLogin = styled.section`
  width: 80vw;
  height: 300px;
  margin: 0 auto;
  padding-top: 10px;
`;

export const StyledFormLogin = styled.form`
  width: 80%;
  height: 200px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media only screen and (max-width: 768px) {
    height: 250px;
  }
`;

export const StyledHeaderLogin = styled.h1`
  padding-bottom: 20px;
  font-size: 25px;

  @media only screen and (max-width: 768px) {
    font-size: 22px;
  }
`;

export const StyledAreaInputs = styled.div`
  width: 100%;
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  column-gap: 15px;

  @media only screen and (max-width: 768px) {
    height: 100px;
    display: flex;
    flex-direction: column;
    row-gap: 10px;
  }
`;

export const StyledAreaInput = styled.div`
  width: 50%;

  @media only screen and (max-width: 768px) {
    width: 80%;
  }
`;

export const StyledInputLogin = styled.input`
  width: 100%;
  height: 50%;
  padding: 10px;

  @media only screen and (max-width: 768px) {
    height: 70%;
    padding: 0 10px;
  }
`;

export const StyledAreaRememberLogin = styled.div`
  width: 100%;
  margin-bottom: 50px;
  display: flex;
  justify-content: space-between;

  @media only screen and (max-width: 768px) {
    width: 80%;
    margin-top: 10px;
  }
`;

export const StyledLabel = styled.label`
  display: flex;
  column-gap: 5px;
`;

export const StyledInputCheckbox = styled.input`
  font-size: 16px;
`;

export const StyledForgotPassword = styled.p`
  color: #008080;
  text-decoration: none;
  font-size: 16px;
  cursor: pointer;
`;

export const StyledButtonLogin = styled.button`
  width: 100px;
  height: 50px;
  color: #fff;
  background-color: #008080;
  font-size: 16px;
  font-weight: 600;
  border: none;
  cursor: pointer;

  &:hover {
    opacity: 0.4;
  }
`;

export const StyledErrorMsg = styled.p`
  color: red;
  font-size: 14px;
`;
