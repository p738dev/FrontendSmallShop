import styled from "styled-components";

export const StyledAreaBackButton = styled.div`
  display: flex;
  justify-content: flex-end;
`;

export const StyledBackButton = styled.button`
  padding: 5px 10px;
  background-color: #000;
  color: #fff;
  cursor: pointer;

  &:hover {
    transform: scale(0.9);
  }
`;

export const StyledAddProductContainer = styled.div`
  width: 100%;
  height: 100%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: 20px;

  @media (min-width: 768px) and (max-width: 992px) {
    width: 90%;
  }
`;

export const StyledAddProductHeader = styled.h1`
  color: #222;
  text-align: center;
  text-transform: capitalize;
  font-size: 32px;
  font-weight: 600;
  letter-spacing: 2px;

  @media (min-width: 768px) and (max-width: 992px) {
    font-size: 25px;
  }
`;

export const StyledForm = styled.form`
  width: 80%;
  height: 70%;
  margin: 0 auto;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const StyledAreaInput = styled.div`
  width: 60%;
  padding-top: 20px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const StyledInput = styled.input`
  width: 100%;
  height: 40px;
  padding-left: 20px;
  font-size: 16px;
  border-radius: 10px;
  box-shadow: inset 1px 9px 8px -9px rgba(66, 68, 90, 1);
  cursor: pointer;

  &.invalid {
    border: 2px solid red;
  }
`;

export const StyledTextAreaDesc = styled.textarea`
  width: 100%;
  padding-left: 20px;
  font-size: 16px;
  border: 1px solid lightgray;
  border-radius: 10px;
  box-shadow: inset 1px 9px 8px -9px rgba(66, 68, 90, 1);

  &.invalid {
    border: 2px solid red;
  }
`;

export const StyledSelect = styled.select`
  width: 100%;
  height: 40px;
  padding-left: 20px;
  font-size: 16px;
  border-radius: 10px;
  box-shadow: inset 1px 9px 8px -9px rgba(66, 68, 90, 1);
  opacity: 0.8;
  cursor: pointer;

  &.invalid {
    border: 2px solid red;
  }
`;

export const StyledContentInput = styled.div`
  position: relative;
`;

export const StyledAreaButtonAdd = styled.div`
  margin-top: 20px;
  display: flex;
  justify-content: center;
`;

export const StyledButtonAdd = styled.button`
  padding: 10px 25px;
  background-color: lightgrey;
  color: black;
  border-radius: 20px;
  cursor: pointer;
`;

export const StyledErrorMessage = styled.p`
  color: #000;
  font-size: 16px;
  font-weight: 500;
`;

export const StyledAreaErrorMessage = styled.div`
  width: 100%;
  height: 40px;
  background-color: red;

  display: none;

  &.errorMsg {
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

export const StyledErrorMsg = styled.p`
  color: red;
`;
