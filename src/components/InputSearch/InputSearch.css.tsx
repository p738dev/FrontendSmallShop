import styled from "styled-components";

export const StyledForm = styled.form`
  position: relative;
`;

export const StyledInput = styled.input`
  width: 400px;
  height: 40px;
  padding: 10px;
  font-size: 14px;
  overflow: hidden;

  @media only screen and (max-width: 992px) {
    width: 350px;
  }

  @media only screen and (max-width: 768px) {
    width: 250px;
  }
`;

export const StyledButtonSearch = styled.button`
  width: 100px;
  height: 40px;
  background-color: #008080;
  color: #fff;
  font-size: 14px;
  font-weight: 600;
  position: absolute;
  top: 0;
  right: 0;
  border: none;
  cursor: pointer;
  overflow: hidden;

  @media only screen and (max-width: 768px) {
    font-size: 12px;
  }
`;
