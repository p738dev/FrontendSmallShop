import styled from "styled-components";

export const StyledSectionForgot = styled.section`
  width: 80vw;
  height: 80vh;
  margin: 0 auto;
`;

export const StyledHeaderForgot = styled.h2`
  padding-top: 30px;
  margin-bottom: 50px;
  text-align: center;
  font-size: 28px;
  font-weight: 400;
`;

export const StyledAreaTitleForgot = styled.div`
  width: 860px;
  height: 70px;
  margin: 0 auto;
  margin-bottom: 20px;

  @media (min-width: 992px) and (max-width: 1200px) {
    width: 650px;
  }

  @media (min-width: 768px) and (max-width: 992px) {
    width: 450px;
    height: auto;
  }

  @media only screen and (max-width: 768px) {
    width: 350px;
    height: auto;
  }
`;

export const StyledTitleForgotPass = styled.p`
  text-align: center;
  padding: 10px;
  font-size: 16px;
  font-weight: 600;
`;

export const StyledForm = styled.form`
  width: 400px;
  height: 200px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  row-gap: 20px;

  @media only screen and (max-width: 768px) {
    width: 300px;
  }
`;

export const StyledLabel = styled.label`
  display: flex;
  flex-direction: column;
`;

export const StyledInput = styled.input`
  width: 100%;
  height: 40px;
`;

export const StyledButton = styled.button`
  width: 100px;
  height: 50px;
  margin: 0 auto;
  font-size: 16px;
  background-color: #008080;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  cursor: pointer;

  &:hover {
    opacity: 0.7;
  }
`;
