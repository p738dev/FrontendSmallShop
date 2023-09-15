import React from "react";
import { useDispatch } from "react-redux";
import { closeConfirmModal } from "../../store/modalSlice";
import { clearCart } from "../../store/cartSlice";

import {
  ModalContainer,
  StyledAreaContentModal,
  StyledButton,
  StyledButtonsArea,
  StyledTiltleModal,
} from "./ConfirmModal.css";

const ConfirmModal = () => {
  const dispatch = useDispatch();

  return (
    <ModalContainer>
      <StyledAreaContentModal>
        <StyledTiltleModal>
          Czy chcesz usunąć produkty z koszyka?
        </StyledTiltleModal>
        <StyledButtonsArea>
          <StyledButton
            onClick={() => {
              dispatch(clearCart());
              dispatch(closeConfirmModal());
            }}
          >
            Tak
          </StyledButton>
          <StyledButton onClick={() => dispatch(closeConfirmModal())}>
            Nie
          </StyledButton>
        </StyledButtonsArea>
      </StyledAreaContentModal>
    </ModalContainer>
  );
};

export default ConfirmModal;
