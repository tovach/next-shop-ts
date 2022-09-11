import { FC, ReactNode } from 'react';

import { Footer } from '@containers/footer';
import { Header } from '@containers/header';

type PrimaryLayoutProps = {
  children: ReactNode;
};

export const PrimaryLayout: FC<PrimaryLayoutProps> = ({ children }) => (
  <>
    <Header />
    <main>{children}</main>
    <Footer />
  </>
);
