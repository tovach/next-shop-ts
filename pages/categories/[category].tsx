import { NextPage } from 'next';
import Head from 'next/head';
import { useRouter } from 'next/router';

import { PrimaryLayout } from '@components/layouts/primary';
import { Header } from '@containers/header';

type CategoryProps = {};

const Category: NextPage<CategoryProps> = () => {
  const router = useRouter();
  const { category } = router.query;

  return (
    <PrimaryLayout>
      <Head>
        <title>{category} page</title>
      </Head>
      <Header />
    </PrimaryLayout>
  );
};

export default Category;
