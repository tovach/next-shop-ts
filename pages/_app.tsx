import type { AppProps } from 'next/app';
import { NextPageWithLayout } from 'pages/page';
import { Normalize } from 'styled-normalize';

import { Fonts, GlobalStyles } from '@styles/globals';

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

const MyApp = ({ Component, pageProps }: AppPropsWithLayout) => {
  const getLayout = Component.getLayout ?? ((page) => page);
  return getLayout(
    <>
      <Normalize />
      <Fonts />
      <GlobalStyles />
      <Component {...pageProps} />
    </>
  );
};

export default MyApp;
