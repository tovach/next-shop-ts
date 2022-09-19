import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Product } from '@types';

type CartSliceType = {
  totalQty: number;
  totalAmount: number;
  items: Product[];
};

const initialState: CartSliceType = {
  totalQty: 0,
  totalAmount: 0,
  items: []
};

const calcQty = (arr: Product[]) =>
  Number(arr.reduce((acc, item) => acc + item.qty!, 0).toFixed(2));
const calcAmount = (arr: Product[]) =>
  Number(arr.reduce((acc, item) => acc + item.amount!, 0).toFixed(2));

const cartSlice = createSlice({
  name: 'cartSlice',
  initialState,
  reducers: {
    addItem: (state, action: PayloadAction<Product>) => {
      const payloadItem: Product = { ...action.payload, qty: 1, amount: action.payload.price };
      const existIndex = state.items.findIndex((item) => item.id === payloadItem.id);

      if (existIndex === -1) {
        state.items.push(payloadItem);
      } else {
        state.items[existIndex].qty! += 1;
        state.items[existIndex].amount! = Number(
          (state.items[existIndex].price * state.items[existIndex].qty!).toFixed(2)
        );
      }

      state.totalQty = calcQty(state.items);
      state.totalAmount = calcAmount(state.items);
    },
    deleteItem: (state, action: PayloadAction<Product>) => {
      state.items = state.items.filter((item) => item.id !== action.payload.id);
    },
    resetCart: () => initialState,
    decreaseItem: (state, action: PayloadAction<Product>) => {
      const existIndex = state.items.findIndex((item) => item.id === action.payload.id);
      if (existIndex !== -1 && state.items[existIndex].qty! > 1) {
        state.items[existIndex].qty! -= 1;
        state.items[existIndex].amount! = Number(
          (state.items[existIndex].price * state.items[existIndex].qty!).toFixed(2)
        );
      } else return state;
      state.totalQty = calcQty(state.items);
      state.totalAmount = calcAmount(state.items);
    }
  }
});

export default cartSlice.reducer;
export const { addItem, deleteItem, decreaseItem, resetCart } = cartSlice.actions;
