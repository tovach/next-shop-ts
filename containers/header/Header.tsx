import { FC } from 'react';

import { Logo } from '@components/common';
import { PrimaryNavigation } from '@components/navigations/primary/PrimaryNavigation';

type HeaderProps = {};

export const Header: FC<HeaderProps> = () => {
  const categories = ['electronics', 'jewelery', "men's clothing", "women's clothing"];
  return (
    <header className='flex items-center gap-10 py-10'>
      <Logo />
      <PrimaryNavigation categories={categories} linkPath='/categories/' />
    </header>
  );
};
