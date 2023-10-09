import styled from "styled-components";

export const StyledAreaNewProduct = styled.div`
  margin-bottom: 10px;
  display: flex;
  justify-content: flex-end;

  @media (max-width: 768px) {
    justify-content: center;
  }
`;

export const StyledAddProductButton = styled.button`
  padding: 10px 20px;
  background-color: #ddd;
  color: #000;
  cursor: pointer;

  &:hover {
    transform: scale(0.95);
  }
`;

export const StyledProductsTable = styled.table`
  width: 100%;
  height: 100%;
  margin-bottom: 10px;
  border-collapse: collapse;

  @media (max-width: 768px) {
    display: block;
  }
`;

export const StyledHederTable = styled.th`
  padding: 10px;
  border: 2px solid #ddd;

  @media (max-width: 768px) {
    display: block;
  }
`;

export const StyledRowBodyTable = styled.tr`
  text-align: center;
  text-transform: capitalize;

  @media (max-width: 768px) {
    display: block;
  }
`;

export const StyledBodyTable = styled.td`
  padding: 10px;
  border: 1px solid #ddd;

  @media (max-width: 768px) {
    display: block;
  }
`;

export const StyledAreaPageButton = styled.div`
  padding: 30px 0;
  display: flex;
  justify-content: center;
`;

export const StyledAreaButton = styled.div`
  width: 160px;
  display: flex;
  justify-content: space-between;
`;

export const StyledButton = styled.button`
  padding: 10px 30px;
  cursor: pointer;
`;

export const StyledOptions = styled.div`
  display: flex;
  column-gap: 5px;
`;

export const StyledOptionButtonEdit = styled.button`
  padding: 5px;
  background-color: black;
  color: white;
  cursor: pointer;
`;

export const StyledOptionButtonDelete = styled.button`
  padding: 5px;
  background-color: red;
  color: white;
  cursor: pointer;
`;

export const StyledLoadingContainer = styled.div`
  width: 100%;
  height: 60vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const StyledSearchArea = styled.div`
  display: flex;
  justify-content: flex-start;
  column-gap: 10px;

  @media (max-width: 769px) {
    justify-content: center;
  }
`;

export const StyledSearchInput = styled.input`
  width: 200px;
  height: 30px;
  margin-right: 10px;

  @media (max-width: 768px) {
    width: 180px;
  }
`;

export const StyledSearchButton = styled.button`
  width: 100px;
  height: 30px;
  background-color: #ddd;
  font-size: 14px;
  border: none;
  cursor: pointer;

  @media (min-width: 768px) and (max-width: 992px) {
    width: 80px;
  }
`;

export const StyledSortArea = styled.div`
  margin-bottom: 10px;
  display: flex;
  justify-content: flex-start;
  column-gap: 10px;

  @media (max-width: 769px) {
    justify-content: center;
  }
`;

export const StyledSortSelect = styled.select`
  width: 200px;
  height: 30px;

  @media (max-width: 768px) {
    width: 180px;
  }
`;
