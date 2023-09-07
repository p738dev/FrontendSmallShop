import styled from "styled-components";

export const StyledFooter = styled.footer`
  width: 100vw;
  height: 280px;
  padding: 10px 0;
  background-color: #c0c0c0;
  display: flex;
  justify-content: center;
`;

export const StyledAreaContentFooter = styled.div`
  width: 80%;
  height: 80%;
  display: flex;
  justify-content: space-between;
  column-gap: 50px;
`;

export const StyledContactFooter = styled.div`
  width: 30%;
  display: flex;
  gap: 10px;
  flex-direction: column;
`;

export const StyledLogoInFooter = styled.div`
  width: 250px;
  height: 100px;

  @media (min-width: 992px) and (max-width: 1024px) {
    width: 200px;
  }

  @media (min-width: 768px) and (max-width: 992px) {
    width: 180px;
  }

  @media (max-width: 768px) {
    width: 130px;
  }
`;

export const StyledImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const StyledInfo = styled.div`
  width: 220px;
  display: flex;

  @media (max-width: 768px) {
    width: 150px;
  }
`;

export const StyledIcon = styled.span`
  font-size: 16px;

  @media (min-width: 768px) and (max-width: 992px) {
    font-size: 14px;
  }

  @media (max-width: 768px) {
    font-size: 12px;
  }
`;

export const StyledTitle = styled.p`
  font-size: 16px;

  @media (min-width: 768px) and (max-width: 992px) {
    font-size: 14px;
  }

  @media (max-width: 768px) {
    font-size: 12px;
  }
`;

export const StyledInfoFooter = styled.div`
  width: 30%;
  display: flex;
  flex-direction: column;
`;

export const StyledHeaderInfo = styled.h4`
  padding-bottom: 20px;
`;

export const StyledListInfo = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  row-gap: 10px;
`;

export const StyledNav = styled.a`
  color: #000;
  font-size: 16px;
  cursor: pointer;

  @media (min-width: 768px) and (max-width: 992px) {
    font-size: 14px;
  }

  @media (max-width: 768px) {
    font-size: 12px;
  }
`;

export const StyledAboutUs = styled.div`
  width: 30%;
  height: 80%;
`;
