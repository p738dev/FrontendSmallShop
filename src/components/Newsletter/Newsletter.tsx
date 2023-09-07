import React from "react";
import InputSearch from "../InputSearch/InputSearch";

import {
  StyledAreaContentNewsletter,
  StyledHeaderNewsletter,
  StyledSectionNewsletter,
  StyledTitle,
} from "./Newsletter.css";

const Newsletter = () => {
  return (
    <StyledSectionNewsletter>
      <StyledAreaContentNewsletter>
        <StyledHeaderNewsletter>
          Zapisz się do Newslettera
        </StyledHeaderNewsletter>
        <StyledTitle>
          I odbierz darmowy kupon na 20zł za pierwsze zakupy.
        </StyledTitle>
        <InputSearch
          title="Wprowadź swój e-mail"
          type="submit"
          button="Zapisz się"
        />
      </StyledAreaContentNewsletter>
    </StyledSectionNewsletter>
  );
};

export default Newsletter;
