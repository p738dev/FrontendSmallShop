import styled from "styled-components";

const newsletterImage = require("../../images/newsletter.jpg");

export const StyledSectionNewsletter = styled.section`
  width: 100vw;
  height: 40vh;
  margin-top: 20px;
  margin-bottom: 50px;
  background-image: url(${newsletterImage});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const StyledAreaContentNewsletter = styled.div`
  width: 60%;
  height: 200px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  row-gap: 40px;
`;

export const StyledHeaderNewsletter = styled.h2`
  color: #fff;
  font-size: 32px;
  font-weight: 600;
  letter-spacing: 2px;

  @media (min-width: 768px) and (max-width: 992px) {
    font-size: 28px;
  }

  @media (max-width: 768px) {
    font-size: 22px;
  }
`;

export const StyledTitle = styled.p`
  color: #fff;
  font-size: 18px;
  font-weight: 400;
  letter-spacing: 1px;

  @media (max-width: 768px) {
    font-size: 16px;
  }
`;

export const StyledFormNewsletter = styled.form`
  width: 400px;
`;
