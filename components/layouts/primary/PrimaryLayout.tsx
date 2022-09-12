import { FC, ReactNode } from 'react';

type PrimaryLayoutProps = {
  children: ReactNode;
};

export const PrimaryLayout: FC<PrimaryLayoutProps> = ({ children }) => (
  <div className='container mx-auto'>
    <main>{children}</main>
  </div>
);
