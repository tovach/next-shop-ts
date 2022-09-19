import { FC } from 'react';

import { SecondaryProductCard } from '@components/cards';
import { useAppSelector, useCartActions, useModalActions } from '@hooks/store';
import { Product } from '@types';

type PrimaryModalProps = {
  children?: never;
};

export const PrimaryModal: FC<PrimaryModalProps> = () => {
  const { resetModalContent, setModalClose } = useModalActions();
  const { content, isOpen } = useAppSelector((state) => state.modalSlice);
  const { addItem } = useCartActions();
  const { items } = useAppSelector((state) => state.cartSlice);

  const isExist = (item: Product, arr: Product[]) => arr.some((el) => el.id === item.id);

  const onClose = () => {
    setModalClose();
    resetModalContent();
  };
  if (!isOpen) {
    return null;
  }
  return (
    <div className='scrollbar-hide fixed top-0 right-0 bottom-0 left-0 flex items-center justify-center bg-gray/40 backdrop-blur'>
      <div className='relative flex items-center justify-center rounded bg-white p-10 shadow-2xl'>
        <SecondaryProductCard
          buttonTitle={isExist(content, items) ? 'One more' : 'Add to card'}
          item={content}
          onButtonClick={addItem}
        />
        <button
          onClick={onClose}
          type='button'
          className='text-gray-400 hover:text-gray-900 absolute -top-10  right-0 ml-auto inline-flex items-center rounded bg-red-600 p-1.5 text-sm duration-100 hover:bg-gray'
          data-modal-toggle='crypto-modal'
        >
          <svg
            aria-hidden='true'
            className='h-5 w-5'
            fill='currentColor'
            viewBox='0 0 20 20'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              fillRule='evenodd'
              d='M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z'
              clipRule='evenodd'
            />
          </svg>
          <span className='sr-only'>Close modal</span>
        </button>
      </div>
    </div>
  );
};
