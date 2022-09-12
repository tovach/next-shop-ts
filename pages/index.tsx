import { GetStaticProps, NextPage } from 'next';
import Head from 'next/head';
import { ENDPOINTS } from 'utils/constants/api';

import { PrimaryLayout } from '@components/layouts/primary';
import { Header } from '@containers/header';
import { Categories } from '@types';
import { fetcher } from '@utils/helpers';

type HomeProps = {
  categories: Categories | Error['message'] | undefined;
};

const Home: NextPage<HomeProps> = () => (
  <PrimaryLayout>
    <Head>
      <title>Homepage</title>
    </Head>
    <Header />
  </PrimaryLayout>
);

export const getStaticProps: GetStaticProps<HomeProps> = async () => {
  const categories = await fetcher<Categories>(ENDPOINTS.categories);
  return { props: { categories } };
};

export default Home;
