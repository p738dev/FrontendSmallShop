import { Link } from "react-router-dom";
import styled from "styled-components";

export const StyledShopSection = styled.section`
  width: 100vw;
  margin-top: 30px;
`;

export const StyledShopContainer = styled.div`
  width: 80vw;
  margin: 0 auto;
  margin-bottom: 50px;
`;

export const StyledCardAreaProducts = styled.div`
  width: 100%;
  height: 100%;
  margin-bottom: 50px;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 30px;
  justify-items: center;
  align-items: center;

  @media (min-width: 1200px) and (max-width: 1400px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (min-width: 1024px) and (max-width: 1200px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (min-width: 992px) and (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: 769px) and (max-width: 992px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 768px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

export const StyledCart = styled.div`
  width: 250px;
  height: 350px;
  display: flex;
  flex-direction: column;
  row-gap: 10px;
  border: 1px solid #000;
  overflow: hidden;
`;

export const StyledTitleProductInCart = styled.h5`
  padding: 10px 0;
  text-align: center;
  font-size: 16px;
`;

export const StyledAreaDescProduct = styled.div`
  width: 150px;
  height: 150px;
  margin: 0 auto;
  margin-bottom: 10px;
`;

export const StyledDescProduct = styled.p`
  font-size: 15px;
`;

export const StyledAreaCartBottom = styled.div`
  display: flex;
  justify-content: space-around;
`;

export const StyledValuePrice = styled.span`
  font-size: 16px;
  font-weight: 900;
`;

export const StyledValueCategory = styled.span`
  text-transform: capitalize;
  font-weight: 900;
`;

export const StyledAreaButtonLoad = styled.div`
  display: flex;
  justify-content: center;
`;

export const StyledButton = styled.button`
  width: 200px;
  height: 50px;
  background-color: #222;
  color: #fff;
  border: none;
  border-radius: 10px;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;

  &:hover {
    opacity: 0.7;
    transform: scale(0.98);
  }
`;

export const StyledAddToCartButton = styled.button`
  padding: 18px;
  background-color: #333;
  color: #fff;
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  overflow: hidden;

  &:hover {
    opacity: 0.6;
  }
`;

export const StyledViewProduct = styled(Link)`
  padding: 18px;
  background-color: #556b2f;
  color: #fff;
  border: none;
  text-decoration: none;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  overflow: hidden;

  &:hover {
    opacity: 0.6;
  }
`;

export const StyledLoadingContainer = styled.div`
  width: 100%;
  height: 60vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;
