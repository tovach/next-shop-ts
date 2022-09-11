import type { AppProps } from 'next/app';
import { NextPageWithLayout } from 'pages/page';
import { Fonts } from 'styles/fonts';
import { GlobalStyles } from 'styles/globals';

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

const MyApp = ({ Component, pageProps }: AppPropsWithLayout) => {
  const getLayout = Component.getLayout ?? ((page) => page);
  return getLayout(
    <>
      <Fonts />
      <GlobalStyles />
      <Component {...pageProps} />
    </>
  );
};

export default MyApp;
