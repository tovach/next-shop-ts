import { FC } from 'react';

import { SecondaryProductCard } from '@components/cards';
import { useAppSelector } from '@hooks/store';

type CartContentProps = {
  children?: never;
};

export const CartContent: FC<CartContentProps> = () => {
  const { amount, items, qty } = useAppSelector((state) => state.cartSlice);
  if (items.length === 0) {
    return <h3>Cart empty</h3>;
  }
  return (
    <ul>
      {items.map((item) => (
        <li key={item.id}>
          <SecondaryProductCard item={item} buttonTitle='Checkout' onButtonClick={() => {}} />
        </li>
      ))}
    </ul>
  );
};
