import styled from "styled-components";

export const StyledDescProductPage = styled.div`
  width: 100%;
  height: 350px;
`;

export const StyledAreaTitleDesc = styled.div`
  width: 90%;
  height: 100%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  row-gap: 30px;
`;

export const StyledHeader = styled.h3`
  color: #000;
  font-size: 20px;
  font-weight: 600;

  @media (min-width: 768px) and (max-width: 992px) {
    font-size: 18px;
  }

  @media (max-width: 768px) {
    font-size: 16px;
  }
`;

export const StyledTitle = styled.p`
  color: #222;
  font-size: 16px;
  font-weight: 400;

  @media (max-width: 768px) {
    font-size: 14px;
  }
`;
