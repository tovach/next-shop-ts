import type { AppProps } from 'next/app';
import { Provider } from 'react-redux';

import { appStore } from '@store';

import '@styles/globals.css';

const MyApp = ({ Component, pageProps }: AppProps) => (
  <Provider store={appStore}>
    <Component {...pageProps} />
  </Provider>
);

export default MyApp;
