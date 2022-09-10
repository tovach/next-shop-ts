import { FC } from 'react';

type HeaderProps = {};

export const Header: FC<HeaderProps> = () => (
  <header className='bg-amber-600'>
    <div className='container mx-auto'>Header</div>
  </header>
);
