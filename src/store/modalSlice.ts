import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { MODAL_TYPES } from "../types/modal";

interface ModalState {
  isOpen: boolean;
  modalType: MODAL_TYPES | null;
  modalProps: any;
}

const initialState: ModalState = {
  isOpen: false,
  modalType: null,
  modalProps: {},
};

const modalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    openModal: (
      state,
      action: PayloadAction<{ type: MODAL_TYPES; props?: any }>
    ) => {
      state.isOpen = true;
      state.modalType = action.payload.type;
      state.modalProps = action.payload.props || {};
    },
    closeModal: (state) => {
      state.isOpen = false;
      state.modalType = null;
      state.modalProps = {};
    },
  },
});

export const { openModal, closeModal } = modalSlice.actions;
export default modalSlice.reducer;
