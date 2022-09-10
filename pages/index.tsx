import Head from 'next/head';
import { NextPageWithLayout } from 'pages/page';
import { ReactElement } from 'react';

import { PrimaryLayout } from '@components/layouts/primary';

const Home: NextPageWithLayout = () => (
  <>
    <Head>
      <title>Homepage</title>
    </Head>
    <div>
      <h3>Dynamic content</h3>
    </div>
  </>
);

Home.getLayout = function getLayout(page: ReactElement) {
  return <PrimaryLayout>{page}</PrimaryLayout>;
};

export default Home;
