import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "./index";

interface ConfirmDialogState {
  isConfirmDialogOpen: boolean;
  idElementToRemove: string | null;
  title: string;
}

const initialState: ConfirmDialogState = {
  isConfirmDialogOpen: false,
  idElementToRemove: null,
  title: "",
};

export const confirmDialogSlice = createSlice({
  name: "confirmDialog",
  initialState,
  reducers: {
    openConfirmDialog: (state) => {
      state.isConfirmDialogOpen = true;
    },
    closeConfirmDialog: (state) => {
      state.isConfirmDialogOpen = false;
    },
    setIdToRemove: (state, action: PayloadAction<string>) => {
      state.idElementToRemove = action.payload;
    },
  },
});

export const { openConfirmDialog, closeConfirmDialog, setIdToRemove } =
  confirmDialogSlice.actions;

export const selectDialog = (state: RootState) => state.confirmDialog;

export default confirmDialogSlice.reducer;
