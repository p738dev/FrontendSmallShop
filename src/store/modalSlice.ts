import { createSlice } from "@reduxjs/toolkit";

interface ConfirmModalState {
  isConfirmModalOpen: boolean;
}

const initialState: ConfirmModalState = {
  isConfirmModalOpen: false,
};

export const confirmModalSlice = createSlice({
  name: "confirmModal",
  initialState,
  reducers: {
    openConfirmModal: (state) => {
      state.isConfirmModalOpen = true;
    },
    closeConfirmModal: (state) => {
      state.isConfirmModalOpen = false;
    },
  },
});

export const { openConfirmModal, closeConfirmModal } =
  confirmModalSlice.actions;

export default confirmModalSlice.reducer;
