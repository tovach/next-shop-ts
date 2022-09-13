import { FC, ReactNode } from 'react';

import { Product } from '@types';

type ProductListProps = {
  items: Product[];
  renderItem: (item: Product) => ReactNode;
};

export const ProductList: FC<ProductListProps> = ({ items, renderItem }) => (
  <ul className='flex flex-wrap justify-center gap-2'>
    {items.map((el) => (
      <li key={el.id}>{renderItem(el)}</li>
    ))}
  </ul>
);
