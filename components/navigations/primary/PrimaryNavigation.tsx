import Link from 'next/link';
import { FC } from 'react';

import { Categories } from '@types';

type PrimaryNavigationProps = {
  categories: Categories;
  linkPath: string;
};

export const PrimaryNavigation: FC<PrimaryNavigationProps> = ({ categories, linkPath }) => (
  <nav>
    <ul className='flex gap-5'>
      {categories.map((el, index) => (
        <li key={index}>
          <Link href={`${linkPath}${el}`}>
            <a className='decoration-blue underline-offset-8 hover:underline'>{el.toUpperCase()}</a>
          </Link>
        </li>
      ))}
    </ul>
  </nav>
);
