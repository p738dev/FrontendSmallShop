import styled from "styled-components";

export const StyledQuestionArea = styled.div`
  width: 90%;
  height: 300px;
  margin: 0 auto;
`;

export const StyledForm = styled.form`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 20px;
`;

export const StyledAreaInput = styled.div`
  width: 90%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  column-gap: 20px;

  @media (min-width: 768px) and (max-width: 992px) {
    width: 80%;
    column-gap: 10px;
  }
`;

export const StyledLabel = styled.label`
  font-size: 16px;
  font-weight: 600;

  @media (min-width: 768px) and (max-width: 992px) {
    font-size: 15px;
  }

  @media (max-width: 768px) {
    font-size: 14px;
  }
`;

export const StyledInput = styled.input`
  width: 90%;
  height: 30px;

  @media (min-width: 768px) and (max-width: 992px) {
    width: 80%;
  }

  @media (max-width: 768px) {
    width: 70%;
  }
`;

export const StyledTextarea = styled.textarea`
  width: 85%;

  @media (max-width: 768px) {
    width: 70%;
  }
`;
