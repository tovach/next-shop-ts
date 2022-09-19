import Image from 'next/image';
import { FC } from 'react';

import { PrimaryButton } from '@components/buttons';
import { SecondaryProductCard } from '@components/cards';
import { useAppSelector, useCartActions } from '@hooks/store';
import minusIcon from '@public/assets/img/minus.svg';
import plusIcon from '@public/assets/img/plus.svg';

type CartContentProps = {
  children?: never;
};

export const CartContent: FC<CartContentProps> = () => {
  const { totalQty, items, totalAmount } = useAppSelector((state) => state.cartSlice);
  const { addItem, decreaseItem, deleteItem, resetCart } = useCartActions();

  if (items.length === 0) {
    return <h3>Cart empty</h3>;
  }
  return (
    <div>
      <ul className='flex flex-col gap-2'>
        {items.map((item) => (
          <li
            key={item.id}
            className='flex items-center justify-between border-b border-mindaro pb-2'
          >
            <SecondaryProductCard item={item} buttonTitle='Remove' onButtonClick={deleteItem} />
            <div className='flex flex-col items-center gap-5'>
              <span className='text-xl font-bold'>{item.qty}</span>
              <div className='flex gap-5'>
                <PrimaryButton className='flex' onClick={() => addItem(item)}>
                  <Image src={plusIcon} width={20} height={20} />
                </PrimaryButton>
                <PrimaryButton className='flex' onClick={() => decreaseItem(item)}>
                  <Image src={minusIcon} width={20} height={20} />
                </PrimaryButton>
              </div>
              <span className='text-xl'>{item.amount} $</span>
            </div>
          </li>
        ))}
      </ul>
      <div className='mt-5 flex items-center justify-between'>
        <div>
          <p className='text-xl'>
            Total items:<span className='text-xl font-bold'> {totalQty}</span>
          </p>
          <p className='text-xl'>
            Total amount:<span className='text-xl font-bold'> {totalAmount}</span> $
          </p>
        </div>
        <div>
          <PrimaryButton onClick={resetCart}>Reset cart</PrimaryButton>
        </div>
      </div>
    </div>
  );
};
