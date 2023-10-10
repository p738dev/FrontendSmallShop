import styled from "styled-components";

export const StyledSectionSignup = styled.section`
  width: 80vw;
  height: 70vh;
  margin: 0 auto;
  padding-top: 10px;
`;

export const StyledHeaderRegister = styled.h1`
  padding-bottom: 20px;
  font-size: 25px;

  @media only screen and (max-width: 768px) {
    font-size: 22px;
  }
`;

export const StyledDescSite = styled.p`
  margin-left: 40px;
  font-size: 16px;
`;

export const StyledFormSignup = styled.form`
  width: 90%;
  height: 380px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: 1px solid red;

  @media (max-width: 768px) {
    height: 340px;
  }
`;

export const StyledAreaInputs = styled.div`
  width: 80%;
  height: 80%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  row-gap: 15px;
`;

export const StyledAreaInput = styled.div`
  width: 80%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
export const StyledInputSignup = styled.input`
  width: 100%;
  height: 40px;
  padding: 0 10px;
`;

export const StyledSelect = styled.select`
  width: 100%;
  height: 40px;
  padding: 0 10px;
  cursor: pointer;
`;

export const StyledAreaButtnSignup = styled.div``;

export const StyledButtonSignup = styled.button`
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
  text-align: center;
  color: red;
  font-size: 14px;
`;

export const StyledAreaErrorMessage = styled.div`
  width: 50%;
  height: 50px;
  margin-top: 20px;
  padding: 10px 0;
  background-color: red;
  display: none;

  &.errorMsg {
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

export const StyledErrorMessage = styled.p`
  color: #000;
  font-size: 16px;
  font-weight: 500;
`;
