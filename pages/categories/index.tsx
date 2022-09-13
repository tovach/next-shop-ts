import { NextPage } from 'next';
import Head from 'next/head';

import { PrimaryLayout } from '@components/layouts';

type CategoriesProps = {};

const Categories: NextPage<CategoriesProps> = () => (
  <PrimaryLayout>
    <Head>
      <title>Categoriespage</title>
    </Head>
  </PrimaryLayout>
);

export default Categories;
