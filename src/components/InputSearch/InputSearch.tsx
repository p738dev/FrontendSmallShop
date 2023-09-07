import React from "react";
import { StyledButtonSearch, StyledForm, StyledInput } from "./InputSearch.css";

interface Props {
  title: string;
  type: "button" | "submit" | "reset";
  button: string;
}

const InputSearch = ({ title, type, button }: Props) => {
  return (
    <StyledForm>
      <StyledInput
        type="text"
        placeholder={title}
      />
      <StyledButtonSearch type={type}>{button}</StyledButtonSearch>
    </StyledForm>
  );
};

export default InputSearch;
