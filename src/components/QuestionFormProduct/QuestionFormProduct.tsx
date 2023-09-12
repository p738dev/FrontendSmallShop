import React from "react";

import {
  StyledAreaInput,
  StyledForm,
  StyledInput,
  StyledLabel,
  StyledQuestionArea,
  StyledTextarea,
} from "./QuestionFormProduct.css";

const QuestionFormProduct = () => {
  return (
    <StyledQuestionArea>
      <StyledForm>
        <StyledAreaInput>
          <StyledLabel>Podpis</StyledLabel>
          <StyledInput type="text" />
        </StyledAreaInput>
        <StyledAreaInput>
          <StyledLabel>E-mail</StyledLabel>
          <StyledInput type="text" />
        </StyledAreaInput>
        <StyledAreaInput>
          <StyledLabel>Zadaj pytanie</StyledLabel>
          <StyledTextarea
            name="ques"
            rows={5}
          ></StyledTextarea>
        </StyledAreaInput>
      </StyledForm>
    </StyledQuestionArea>
  );
};

export default QuestionFormProduct;
