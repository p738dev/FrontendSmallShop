import React from "react";
import { StyledButtonSearch, StyledForm, StyledInput } from "./InputSearch.css";

interface Props {
  title: string;
}

const InputSearch = ({ title }: Props) => {
  return (
    <StyledForm>
      <StyledInput
        type="text"
        placeholder={title}
      />
      <StyledButtonSearch type="button">Szukaj</StyledButtonSearch>
    </StyledForm>
  );
};

export default InputSearch;
