import { configureStore } from '@reduxjs/toolkit';

import modalSlice from './slices/modalSlice/modalSlice';

export const appStore = configureStore({ reducer: { modalSlice } });
export type AppStoreState = ReturnType<typeof appStore.getState>;
export type AppDispatch = typeof appStore.dispatch;
