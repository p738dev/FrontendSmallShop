import React from "react";

import {
  StyledAreaContentNewsletter,
  StyledHeaderNewsletter,
  StyledSectionNewsletter,
  StyledTitle,
} from "./Newsletter.css";
import InputSearch from "../InputSearch/InputSearch";

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
        {/* <StyledForm>
          <input
            type="text"
            placeholder="Wpisz swój e-mail"
          />
          <button>Zapisz się</button>
        </StyledForm> */}
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
