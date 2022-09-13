import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Product } from '@types';

type ModalSliceState = {
  isOpen: boolean;
  content: Product;
};

const initialState: ModalSliceState = {
  isOpen: false,
  content: {} as Product
};

const modalSlice = createSlice({
  name: 'modalSlice',
  initialState,
  reducers: {
    setModalOpen: (state) => {
      state.isOpen = true;
    },
    setModalClose: (state) => {
      state.isOpen = false;
    },
    pushModalContent: (state, action: PayloadAction<Product>) => {
      state.content = action.payload;
    },
    resetModalContent: () => initialState
  }
});

export default modalSlice.reducer;
export const { pushModalContent, resetModalContent, setModalClose, setModalOpen } =
  modalSlice.actions;
