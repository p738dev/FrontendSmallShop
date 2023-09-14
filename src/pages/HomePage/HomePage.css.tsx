import styled from "styled-components";

export const StyledSectionHome = styled.section`
  width: 100vw;
  height: auto;
`;

export const StyledImageAndDeliveryArea = styled.div`
  width: 80%;
  height: 80%;
  margin: 0 auto;
`;

export const StyledAreaImageHome = styled.div`
  width: 100%;
  height: 400px;
`;

export const StyledImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const StyledDeliverArea = styled.div`
  height: 200px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  column-gap: 10px;

  @media (min-width: 768px) and (max-width: 992px) {
    height: 250px;
    padding-top: 40px;
    flex-direction: column;
    row-gap: 20px;
  }

  @media (max-width: 768px) {
    height: 200px;
    padding-top: 40px;
    flex-direction: column;
    row-gap: 20px;
  }
`;

export const StyledCard = styled.div`
  width: 550px;
  height: 100px;
  background-color: lightgray;
  display: flex;
  align-items: center;
  column-gap: 40px;

  @media (min-width: 1024px) and (max-width: 1200px) {
    width: 400px;
    column-gap: 10px;
  }

  @media (min-width: 992px) and (max-width: 1024px) {
    width: 380px;
    column-gap: 20px;
  }

  @media (min-width: 768px) and (max-width: 992px) {
    width: 350px;
    height: 150px;
  }

  @media (max-width: 768px) {
    width: 300px;
    height: 100px;
    column-gap: 10px;
  }
`;

export const StyledCarIcon = styled.span`
  width: 70px;
  height: 70px;
  margin-left: 40px;
  font-size: 65px;

  @media (min-width: 992px) and (max-width: 1024px) {
    width: 50px;
    height: 50px;
    margin-left: 30px;
    font-size: 35px;
  }

  @media (min-width: 768px) and (max-width: 992px) {
    width: 40px;
    height: 40px;
    margin-left: 20px;
    font-size: 25px;
  }

  @media (max-width: 768px) {
    width: 30px;
    height: 30px;
    margin-left: 10px;
    font-size: 20px;
  }
`;

export const StyledDriveContent = styled.div`
  width: 300px;
  height: 70px;
  padding: 5px 0;
`;

export const StyledHeader = styled.h5`
  color: #000;
  font-size: 20px;

  @media (min-width: 1024px) and (max-width: 1200px) {
    font-size: 20px;
  }

  @media (min-width: 992px) and (max-width: 1024px) {
    font-size: 18px;
  }

  @media (min-width: 768px) and (max-width: 992px) {
    font-size: 18px;
  }

  @media (max-width: 768px) {
    font-size: 16px;
  }
`;

export const StyledParagraph = styled.p`
  color: gray;
  font-size: 16px;
  opacity: 0.9;

  @media (max-width: 768px) {
    font-size: 14px;
  }
`;

export const StyledPersonIcon = styled.span`
  width: 70px;
  height: 70px;
  margin-left: 40px;
  font-size: 65px;

  @media (min-width: 992px) and (max-width: 1024px) {
    width: 50px;
    height: 50px;
    margin-left: 30px;
    font-size: 45px;
  }

  @media (min-width: 768px) and (max-width: 992px) {
    width: 50px;
    height: 50px;
    margin-left: 30px;
    font-size: 35px;
  }

  @media (max-width: 768px) {
    width: 30px;
    height: 30px;
    margin-left: 10px;
    font-size: 20px;
  }
`;
