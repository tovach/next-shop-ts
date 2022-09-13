import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Product } from '@types';

type CartSliceType = {
  qty: number;
  amount: number;
  items: Product[];
};

const initialState: CartSliceType = {
  qty: 0,
  amount: 0,
  items: []
};

const cartSlice = createSlice({
  name: 'cartSlice',
  initialState,
  reducers: {
    addItem: (state, action: PayloadAction<Product>) => {
      state.items.push(action.payload);
    },
    deleteItem: (state, action: PayloadAction<Product>) => {
      state.items = state.items.filter((el) => el.id !== action.payload.id);
    }
  }
});

export default cartSlice.reducer;
export const { addItem, deleteItem } = cartSlice.actions;
