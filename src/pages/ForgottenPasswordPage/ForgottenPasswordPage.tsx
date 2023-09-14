import React from "react";

import {
  StyledAreaTitleForgot,
  StyledButton,
  StyledForm,
  StyledHeaderForgot,
  StyledInput,
  StyledLabel,
  StyledSectionForgot,
  StyledTitleForgotPass,
} from "./ForgottenPasswordPage.css";

const ForgottenPasswordPage = () => {
  return (
    <StyledSectionForgot>
      <StyledHeaderForgot>Zapomniane hasło</StyledHeaderForgot>
      <StyledAreaTitleForgot>
        <StyledTitleForgotPass>
          Aby zmienić zapomniane hasło, proszę podać swój adres e-mail jaki
          został podany przy rejestracji oraz wpisać nowe hasło. Na podany adres
          e-mail zostanie wysłana wiadomość zawierająca link aktywujący nowe
          hasło.
        </StyledTitleForgotPass>
      </StyledAreaTitleForgot>
      <StyledForm>
        <StyledLabel>
          E-mail
          <StyledInput type="text" />
        </StyledLabel>
        <StyledLabel>
          Nowe hasło
          <StyledInput type="password" />
        </StyledLabel>
        <StyledButton type="submit">Wyślij</StyledButton>
      </StyledForm>
    </StyledSectionForgot>
  );
};

export default ForgottenPasswordPage;
