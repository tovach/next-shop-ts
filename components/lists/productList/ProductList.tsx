import { FC } from 'react';

import { ProductCard } from '@components/cards';
import { Product } from '@types';

type ProductListProps = {
  items: Product[];
};

export const ProductList: FC<ProductListProps> = ({ items }) => (
  <ul className='flex flex-wrap gap-2 justify-end'>
    {items.map((el) => (
      <li key={el.id}>
        <ProductCard item={el} />
      </li>
    ))}
  </ul>
);
