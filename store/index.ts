import { configureStore } from '@reduxjs/toolkit';

import cartSlice from './slices/cartSlice/cartSlice';
import modalSlice from './slices/modalSlice/modalSlice';

export const appStore = configureStore({ reducer: { modalSlice, cartSlice } });
export type AppStoreState = ReturnType<typeof appStore.getState>;
export type AppDispatch = typeof appStore.dispatch;
