import { createSlice } from "@reduxjs/toolkit";

interface QuestionDialogState {
  isQuestionRemoveProduct: boolean;
}

const initialState: QuestionDialogState = {
  isQuestionRemoveProduct: false,
};

export const questionDialogSlice = createSlice({
  name: "questionDialog",
  initialState,
  reducers: {
    openQuestionRemoveDialog: (state) => {
      state.isQuestionRemoveProduct = true;
    },
    closeQuestionRemoveDialog: (state) => {
      state.isQuestionRemoveProduct = false;
    },
  },
});

export const { closeQuestionRemoveDialog, openQuestionRemoveDialog } =
  questionDialogSlice.actions;

export default questionDialogSlice.reducer;
