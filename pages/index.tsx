import Head from 'next/head';
import { NextPageWithLayout } from 'pages/page';
import { ReactElement } from 'react';

import { PrimaryLayout } from '@components/layouts/primary';
import { PrimaryButton } from '@components/buttons';

const Home: NextPageWithLayout = () => (
  <>
    <Head>
      <title>Homepage</title>
    </Head>
    <div>
      <h3>Dynamic content</h3>
      <PrimaryButton>Hello</PrimaryButton>
    </div>
  </>
);

Home.getLayout = function getLayout(page: ReactElement) {
  return <PrimaryLayout>{page}</PrimaryLayout>;
};

export default Home;
