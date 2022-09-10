import Head from 'next/head';
import { NextPageWithLayout } from 'pages/page';
import { ReactElement } from 'react';

import { PrimaryLayout } from '@components/layouts/primary';
import { Aside } from '@containers/aside';

const Catalog: NextPageWithLayout = () => (
  <>
    <Head>
      <title>Catalog page</title>
    </Head>
    <div>
      <h3>Dynamic content</h3>
    </div>
  </>
);

Catalog.getLayout = function getLayout(page: ReactElement) {
  return (
    <PrimaryLayout>
      <Aside />
      {page}
    </PrimaryLayout>
  );
};

export default Catalog;
