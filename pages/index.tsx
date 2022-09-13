import { GetStaticProps, NextPage } from 'next';
import Head from 'next/head';

import { PrimaryProductCard } from '@components/cards';
import { PrimaryLayout } from '@components/layouts';
import { ProductList } from '@components/lists';
import { useCartActions, useModalActions } from '@hooks/store';
import { Product } from '@types';
import { ENDPOINTS } from '@utils/constants/api';
import { fetcher } from '@utils/helpers';

type HomeProps = {
  products: Product[] | Error['message'] | undefined;
};

const Home: NextPage<HomeProps> = ({ products }) => {
  const { pushModalContent, setModalOpen } = useModalActions();
  const { addItem } = useCartActions();

  const onCardClick = (item: Product) => {
    pushModalContent(item);
    setModalOpen();
  };

  const onItemAdd = (item: Product) => {
    addItem(item);
  };

  const renderItem = (item: Product) => (
    <PrimaryProductCard item={item} onCardClick={onCardClick} onItemAdd={onItemAdd} />
  );

  return (
    <>
      <Head>
        <title>Next shop | Homepage</title>
      </Head>
      <PrimaryLayout>
        <h3 className='m-2 text-2xl font-bold'>All products</h3>
        {products instanceof Array ? (
          <ProductList items={products} renderItem={renderItem} />
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
