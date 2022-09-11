import Head from 'next/head';
import { NextPageWithLayout } from 'pages/page';
import { ReactElement } from 'react';

import { PrimaryButton } from '@components/buttons';
import { PrimaryLayout } from '@components/layouts/primary';
import { Container } from '@styles/globals';

const Home: NextPageWithLayout = () => (
  <>
    <Head>
      <title>Homepage</title>
    </Head>
    <Container>
      <h3>Dynamic content</h3>
      <PrimaryButton>Hello</PrimaryButton>
    </Container>
  </>
);

Home.getLayout = function getLayout(page: ReactElement) {
  return <PrimaryLayout>{page}</PrimaryLayout>;
};

export default Home;
