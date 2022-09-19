import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import { bindActionCreators } from 'redux';

import { AppDispatch, AppStoreState } from '@store';
import { addItem, decreaseItem, deleteItem, resetCart } from '@store/slices/cartSlice/cartSlice';
import {
  pushModalContent,
  resetModalContent,
  setModalClose,
  setModalOpen
} from '@store/slices/modalSlice/modalSlice';

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<AppStoreState> = useSelector;

export const useModalActions = () =>
  bindActionCreators(
    { pushModalContent, resetModalContent, setModalClose, setModalOpen },
    useAppDispatch()
  );

export const useCartActions = () =>
  bindActionCreators({ addItem, deleteItem, decreaseItem, resetCart }, useAppDispatch());
