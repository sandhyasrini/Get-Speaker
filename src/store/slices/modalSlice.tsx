import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface ModalHeading {
  heading: string;
  modalAction: "Create" | "Edit" | "Randomize" ;
}


const initialState = {
  heading: "",
  modalAction: "Create",
};

export const modalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    changeHeading: (state, action: PayloadAction<ModalHeading>) => {
      state.heading = action.payload.heading;
      state.modalAction = action.payload.modalAction;
    },
  },
});

export default modalSlice.reducer;
export const { changeHeading } = modalSlice.actions;
