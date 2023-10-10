import React from "react";

import {
  StyledAreaDescDialog,
  StyledDialogContainer,
  StyledTitleDialog,
} from "./ConfirmDialog.css";

interface Props {
  title: string;
}

const ConfirmDialog = ({ title }: Props) => {
  return (
    <StyledDialogContainer>
      <StyledAreaDescDialog>
        <StyledTitleDialog>{title}</StyledTitleDialog>
      </StyledAreaDescDialog>
    </StyledDialogContainer>
  );
};

export default ConfirmDialog;
