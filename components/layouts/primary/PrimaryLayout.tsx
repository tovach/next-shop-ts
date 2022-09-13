import { FC, ReactNode } from 'react';

import { Footer } from '@containers/footer';
import { Header } from '@containers/header';
import { PrimaryModal } from '@features/modals';

type PrimaryLayoutProps = {
  children: ReactNode;
};

export const PrimaryLayout: FC<PrimaryLayoutProps> = ({ children }) => (
  <div className='container mx-auto flex h-screen flex-col'>
    <Header />
    <main>{children}</main>
    <Footer className='mt-auto' />
    <PrimaryModal />
  </div>
);
