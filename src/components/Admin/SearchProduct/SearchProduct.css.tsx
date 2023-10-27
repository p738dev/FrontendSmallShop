import styled from "styled-components";

export const StyledSearchArea = styled.div`
  margin-bottom: 10px;
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
