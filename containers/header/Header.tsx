import Router from 'next/router';
import { FC } from 'react';

import { PrimaryButton } from '@components/buttons';
import { Logo } from '@components/common';
import { PrimaryNavigation } from '@components/navigations';

type HeaderProps = {};

export const Header: FC<HeaderProps> = () => {
  const categories = ['electronics', 'jewelery', "men's clothing", "women's clothing"];
  const handleClick = async () => {
    Router.push('/cart');
  };
  return (
    <header className='flex items-center gap-10 border-b border-misty py-5'>
      <Logo />
      <PrimaryNavigation categories={categories} linkPath='/categories/' />
      <PrimaryButton className='ml-auto' onClick={handleClick}>
        Shopping Cart
      </PrimaryButton>
    </header>
  );
};
