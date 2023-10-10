import React from "react";
import { useDispatch } from "react-redux";
import { closeQuestionRemoveDialog } from "../../store/questionDialogSlice";
import { openConfirmDialog } from "../../store/confirmDialogSlice";

import {
  StyledAreaDescDialog,
  StyledButton,
  StyledButtonsArea,
  StyledDialogContainer,
  StyledTitleDialog,
} from "./QuestionDialog.css";

const QuestionDialog = () => {
  const dispatch = useDispatch();

  const removeProduct = () => {
    dispatch(closeQuestionRemoveDialog());
    dispatch(openConfirmDialog());
  };

  return (
    <StyledDialogContainer>
      <StyledAreaDescDialog>
        <StyledTitleDialog>Czy usunąć produkt?</StyledTitleDialog>
      </StyledAreaDescDialog>
      <StyledButtonsArea>
        <StyledButton onClick={() => removeProduct()}>Tak</StyledButton>
        <StyledButton onClick={() => dispatch(closeQuestionRemoveDialog())}>
          Nie
        </StyledButton>
      </StyledButtonsArea>
    </StyledDialogContainer>
  );
};

export default QuestionDialog;
