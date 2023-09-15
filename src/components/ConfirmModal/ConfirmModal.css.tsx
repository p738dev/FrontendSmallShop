import styled from "styled-components";

export const ModalContainer = styled.div`
  width: 500px;
  height: 200px;
  background-color: #e2d6e7;
  color: black;
  position: absolute;
  top: 30%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid black;

  @media (min-width: 768px) and (max-width: 992px) {
    width: 400px;
    height: 150px;
  }

  @media (max-width: 768px) {
    width: 340px;
    height: 130px;
  }
`;

export const StyledAreaContentModal = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 20px;
`;

export const StyledTiltleModal = styled.p`
  color: #000;
  font-size: 18px;

  @media (max-width: 768px) {
    font-size: 16px;
  }
`;

export const StyledButtonsArea = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const StyledButton = styled.button`
  width: 100px;
  height: 40px;
  background-color: #0234;
  color: #000;
  border: none;
  border-radius: 3px;
  cursor: pointer;

  &:hover {
    transform: scale(0.9);
  }

  @media (max-width: 768px) {
    width: 80px;
    height: 30px;
  }
`;
