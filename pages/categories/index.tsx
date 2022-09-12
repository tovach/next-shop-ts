import { NextPage } from 'next';
import Head from 'next/head';

import { PrimaryLayout } from '@components/layouts/primary';
import { Header } from '@containers/header';

type CategoriesProps = {};

const Categories: NextPage<CategoriesProps> = () => (
  <PrimaryLayout>
    <Head>
      <title>Categoriespage</title>
    </Head>
    <Header />
  </PrimaryLayout>
);

export default Categories;
