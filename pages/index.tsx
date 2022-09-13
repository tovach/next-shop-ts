import { GetStaticProps, NextPage } from 'next';
import Head from 'next/head';

import { ProductCard } from '@components/cards';
import { PrimaryLayout } from '@components/layouts';
import { ProductList } from '@components/lists';
import { PrimaryModal } from '@features/modals';
import { useModalActions } from '@hooks/store';
import { Product } from '@types';
import { ENDPOINTS } from '@utils/constants/api';
import { fetcher } from '@utils/helpers';

type HomeProps = {
  products: Product[] | Error['message'] | undefined;
};

const Home: NextPage<HomeProps> = ({ products }) => {
  const { pushModalContent, setModalOpen } = useModalActions();
  const onCardClick = (item: Product) => {
    pushModalContent(item);
    setModalOpen();
  };

  const renderItem = (item: Product) => <ProductCard item={item} onClick={onCardClick} />;

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
        <PrimaryModal />
      </PrimaryLayout>
    </>
  );
};

export const getStaticProps: GetStaticProps<HomeProps> = async () => {
  const products = await fetcher<Product[]>(ENDPOINTS.products);
  return { props: { products } };
};

export default Home;
