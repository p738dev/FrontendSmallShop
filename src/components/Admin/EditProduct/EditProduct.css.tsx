import styled from "styled-components";

export const StyledEditProductContainer = styled.div`
  width: 90%;
  height: 100%;
  margin: 0 auto;
  display: flex;
  align-items: center;
`;

export const StyledForm = styled.form`
  width: 60%;
  height: 70%;
  margin: 0 auto;
  background-color: lightgray;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const StyledAreaInput = styled.div`
  width: 60%;
  padding-top: 20px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  //gap: 30px;
`;

export const StyledContentInput = styled.div`
  position: relative;
`;

export const StyledInput = styled.input`
  width: 100%;
  height: 40px;
  padding-left: 20px;
  font-size: 16px;
  border: none;
  border-radius: 10px;
  cursor: pointer;

  &.invalid {
    border: 2px solid red;
  }
`;

export const StyledIconInsideInput = styled.i`
  color: red;
  font-size: 20px;
  position: absolute;
  top: 22%;
  right: 8%;
  display: none;

  &.invalid {
    display: block;
  }
`;

export const StyledTextAreaDesc = styled.textarea`
  width: 100%;

  &.invalid {
    border: 2px solid red;
  }
`;

export const StyledAreaSelect = styled.select`
  width: 100%;
  height: 40px;

  &.invalid {
    border: 2px solid red;
  }
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

export const StyledErrorMsg = styled.p`
  color: red;
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

export const StyledErrorMessage = styled.p`
  color: #000;
  font-size: 16px;
  font-weight: 500;
`;
