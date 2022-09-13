import { GetStaticProps, NextPage } from 'next';
import Head from 'next/head';
import { ENDPOINTS } from 'utils/constants/api';

import { PrimaryLayout } from '@components/layouts';
import { ProductList } from '@components/lists';
import { Product } from '@types';
import { fetcher } from '@utils/helpers';

type HomeProps = {
  products: Product[] | Error['message'] | undefined;
};

const Home: NextPage<HomeProps> = ({ products }) => {
  console.log();
  return (
    <>
      <Head>
        <title>Homepage</title>
      </Head>
      <PrimaryLayout>
        {products instanceof Array ? (
          <ProductList items={products} />
        ) : (
          products !== undefined && <h3>{products}</h3>
        )}
      </PrimaryLayout>
    </>
  );
};

export const getStaticProps: GetStaticProps<HomeProps> = async () => {
  const products = await fetcher<Product[]>(ENDPOINTS.products);
  return { props: { products } };
};

export default Home;
