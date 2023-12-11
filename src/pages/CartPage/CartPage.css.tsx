import { Link } from "react-router-dom";
import styled from "styled-components";

export const StyledCartSection = styled.section`
  width: 80vw;
  height: 100%;
  margin: 0 auto;
`;

export const StyledHeaderCart = styled.h3`
  padding: 20px;
  color: #000;
  font-size: 28px;
  letter-spacing: 1px;

  @media (max-width: 768px) {
    font-size: 25px;
  }
`;

export const StyledAreaTable = styled.div`
  width: 90%;
  height: auto;
`;

export const StyledTable = styled.table`
  width: 100%;
  height: auto;
  margin-bottom: 20px;
  border: none;
  border-bottom: 1px solid gray;
`;

export const StyledHeaderTable = styled.thead`
  height: 50px;
`;

export const StyledHeaderRowTable = styled.tr`
  color: #222;
  border: none;
`;

export const StyledHeaderRow = styled.th`
  padding: 10px 0;
  font-size: 18px;

  @media (max-width: 768px) {
    font-size: 16px;
  }
`;

export const StyledBodyTable = styled.tbody`
  height: auto;
  border: 1px solid red;
`;

export const StyledBodyRowTable = styled.tr`
  text-align: center;
`;

export const StyledBodyRow = styled.td`
  padding: 20px 0;
  color: #000;
  font-size: 16px;

  @media (max-width: 768px) {
    font-size: 14px;
  }
`;

export const StyledAreaButtonRemoveAll = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-bottom: 10px;
`;

export const StyledButtonRemoveAll = styled.button`
  width: 200px;
  height: 50px;
  background-color: #aa1710;
  color: #fff;
  font-size: 14px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  cursor: pointer;

  @media (max-width: 768px) {
    width: 150px;
    height: 50px;
    font-size: 12px;
  }
`;

export const StyledAreaTitleEmptyCart = styled.div`
  width: 50%;
  height: 100px;
  margin: 0 auto;
  margin-bottom: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const StyledHeaderEmptyCart = styled.h5`
  color: #000;
  font-size: 20px;
  font-weight: 600;
`;

export const StyledSummaryCartContainer = styled.div`
  width: 80%;
  height: 200px;
  margin: 0 auto;
  display: flex;
  justify-content: space-around;
  align-items: center;

  @media (max-width: 768px) {
    margin-bottom: 15px;
    flex-direction: column;
  }
`;

export const StyledDiscountArea = styled.div`
  padding: 20px 0;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const StyledHeaderDisc = styled.h6`
  font-size: 16px;
  font-weight: 600;

  @media (max-width: 768px) {
    font-size: 14px;
  }
`;

export const StyledAddDiscButton = styled.button`
  width: 80px;
  height: 30px;
  margin: 0 auto;
  background-color: #338aff;
  color: #fff;
  font-size: 14px;
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  &:hover {
    opacity: 0.8;
  }
`;

export const StyledInput = styled.input`
  width: 100%;
  height: 30px;
  padding-left: 10px;
`;

export const StyledAreaSummary = styled.div`
  padding: 20px 0;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const StyledHeaderSum = styled.h6`
  font-size: 16px;
  font-weight: 600;

  @media (max-width: 768px) {
    font-size: 14px;
  }
`;

export const StyledPriceSum = styled.p`
  font-size: 16px;
  font-weight: 400;
`;

export const StyledAreaButtons = styled.div`
  width: 100%;
  height: 80px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 768px) {
    height: 60px;
    margin-bottom: 20px;
    flex-direction: column;
    row-gap: 5px;
  }
`;

export const StyledLinkShop = styled(Link)`
  width: 200px;
  height: 50px;
  background-color: #338aff;
  color: #fff;
  font-size: 16px;
  text-decoration: none;
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  &:hover {
    opacity: 0.8;
  }
`;

export const StyledButtonOrder = styled.button`
  width: 200px;
  height: 50px;
  background-color: #338aff;
  color: #fff;
  font-size: 16px;
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  &:hover {
    opacity: 0.8;
  }
`;

export const StyledRemoveButton = styled.button`
  padding: 5px;
  background-color: red;
  color: white;
  cursor: pointer;
`;

export const StyledAreaSmallButtons = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  column-gap: 5px;
`;

export const StyledButton = styled.button`
  width: 35px;
  height: 30px;
  font-size: 14px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  @media (max-width: 768px) {
    width: 25px;
    height: 20px;
  }
`;

export const StyledQuantity = styled.p`
  color: #000;
  font-size: 16px;
`;
