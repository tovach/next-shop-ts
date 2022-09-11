import { FC } from 'react';
import { Container } from '@styles/globals';

type FooterProps = {};

export const Footer: FC<FooterProps> = () => (
  <footer className='bg-blue-400'>
    <Container>
      <div className='container mx-auto'>Footer</div>
    </Container>
  </footer>
);
