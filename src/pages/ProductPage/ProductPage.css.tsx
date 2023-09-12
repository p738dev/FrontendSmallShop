import styled from "styled-components";

export const StyledSectionProductPage = styled.section`
  width: 80%;
  margin: 0 auto;
  margin-bottom: 50px;
  display: flex;
  justify-content: center;
  column-gap: 100px;

  @media only screen and (max-width: 992px) {
    column-gap: 70px;
  }

  @media only screen and (max-width: 768px) {
    flex-direction: column;
  }
`;

export const StyledLeftSideProduct = styled.div`
  width: 30%;
  height: 400px;
  margin: 20px 0;
  border: 1px solid black;
  overflow: hidden;

  @media only screen and (max-width: 992px) {
    height: 350px;
  }

  @media only screen and (max-width: 768px) {
    height: 200px;
    width: 100%;
  }
`;

export const StyledRightSideProduct = styled.div`
  width: 50%;
  height: 50%;

  @media only screen and (max-width: 768px) {
    margin: 0 auto;
  }
`;

export const StyledTitleProduct = styled.h2`
  padding: 10px 0 30px 10px;
  font-size: 25px;
  font-style: italic;

  @media only screen and (max-width: 992px) {
    padding-bottom: 20px;
    font-size: 20px;
  }
`;

export const StyledAreaDescriptionProduct = styled.div`
  width: 80%;
  margin: 0 auto;
  padding-bottom: 20px;

  @media only screen and (max-width: 768px) {
    width: 100%;
    font-size: 16px;
    line-height: 18px;
  }
`;

export const StyledDescriptionProduct = styled.p`
  text-align: center;
  font-size: 18px;
  line-height: 20px;

  @media only screen and (max-width: 992px) {
    font-size: 16px;
    line-height: 18px;
  }
`;

export const StyledPriceProdukt = styled.h4`
  padding: 20px 0 40px 20px;
  font-size: 22px;

  @media only screen and (max-width: 992px) {
    font-size: 18px;
  }
`;

export const StyledAreaButtonAddCart = styled.div`
  display: flex;
  justify-content: center;

  @media only screen and (max-width: 768px) {
    margin-bottom: 20px;
  }
`;

export const StyledButtonAdd = styled.button`
  width: 150px;
  height: 50px;
  color: #fff;
  background-color: #008080;
  border-radius: 12px;
  border: none;
  font-size: 16px;
  cursor: pointer;

  &:hover {
    color: white;
    transform: scale(0.9);
  }

  @media only screen and (max-width: 768px) {
    width: 130px;
    font-size: 14px;
  }
`;

export const StyledDescribeProductSection = styled.section`
  width: 80vw;
  margin: 0 auto;
  margin-bottom: 50px;
`;

export const StyledListDesc = styled.ul`
  height: 50px;
  list-style: none;
  display: flex;
  align-items: center;
  justify-content: center;
  column-gap: 20px;
`;

export const StyledLi = styled.li`
  color: black;
  text-transform: capitalize;
  font-size: 20px;
  letter-spacing: 1px;
  cursor: pointer;

  &.active {
    color: blue;
  }

  @media (max-width: 768px) {
    font-size: 16px;
  }
`;
