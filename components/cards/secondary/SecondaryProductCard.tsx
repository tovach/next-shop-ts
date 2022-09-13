import Image from 'next/image';
import { FC } from 'react';

import { PrimaryButton } from '@components/buttons';
import { PrimaryRating } from '@components/ratings';
import { Product } from '@types';

type SecondaryProductCardProps = {
  item: Product;
  onButtonClick: (item: Product) => void;
  buttonTitle: string;
};

export const SecondaryProductCard: FC<SecondaryProductCardProps> = ({
  item,
  onButtonClick,
  buttonTitle
}) => (
  <article className='flex w-full max-w-[720px] justify-between gap-10 rounded p-2'>
    <div className='flex flex-col items-center justify-center gap-5'>
      <PrimaryRating count={item.rating.count} rate={item.rating.rate} />
      <Image src={item.image} width={110} height={120} />
      <h5 className='font-bold'>{item.price} $</h5>
    </div>
    <div className='flex min-h-full max-w-md flex-col content-start'>
      <h3 className='mb-2 font-bold'>{item.title}</h3>
      <p>{item.description}</p>
      <PrimaryButton className='mt-auto self-end' onClick={() => onButtonClick(item)}>
        {buttonTitle}
      </PrimaryButton>
    </div>
  </article>
);
