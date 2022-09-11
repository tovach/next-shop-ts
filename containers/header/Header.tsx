import { FC } from 'react';

import { Container } from '@styles/globals';

type HeaderProps = {};

export const Header: FC<HeaderProps> = () => (
  <header className='bg-amber-600'>
    <Container>
      <div className='container mx-auto'>Header</div>
    </Container>
  </header>
);
