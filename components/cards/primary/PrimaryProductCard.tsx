import Image from 'next/image';
import { FC } from 'react';

import { PrimaryButton } from '@components/buttons';
import { PrimaryRating } from '@components/ratings';
import { Product } from '@types';

type PrimaryProductCardProps = {
  item: Product;
  onCardClick: (item: Product) => void;
  onButtonClick: (item: Product) => void;
  buttonTitle: string;
};

export const PrimaryProductCard: FC<PrimaryProductCardProps> = ({
  item,
  onCardClick,
  onButtonClick,
  buttonTitle
}) => (
  <article
    className='flex h-[380px] w-[250px] cursor-pointer flex-col items-center gap-10 rounded border-2 border-jasmine p-2  duration-300 hover:scale-105 hover:shadow-2xl'
    onClick={() => onCardClick(item)}
    aria-hidden
  >
    <PrimaryRating count={item.rating.count} rate={item.rating.rate} />
    <Image src={item.image} width={110} height={120} />
    <h3 className='mt-auto text-center font-bold'>{item.title}</h3>
    <div className='mt-auto flex w-full items-center justify-between'>
      <h5 className='font-bold'>{item.price} $</h5>
      <PrimaryButton
        onClick={(e) => {
          e.stopPropagation();
          onButtonClick(item);
        }}
      >
        {buttonTitle}
      </PrimaryButton>
    </div>
  </article>
);
