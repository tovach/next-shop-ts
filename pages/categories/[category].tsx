import { GetServerSideProps, NextPage } from 'next';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { ENDPOINTS } from 'utils/constants/api';

import { PrimaryProductCard } from '@components/cards';
import { PrimaryLayout } from '@components/layouts';
import { ProductList } from '@components/lists';
import { useAppSelector, useCartActions, useModalActions } from '@hooks/store';
import { Product } from '@types';
import { fetcher } from '@utils/helpers';

type CategoryProps = {
  items: Product[] | Error['message'] | undefined;
};

const Category: NextPage<CategoryProps> = ({ items }) => {
  const router = useRouter();
  const { category } = router.query;
  const { pushModalContent, setModalOpen } = useModalActions();
  const { addItem } = useCartActions();

  const { items: data } = useAppSelector((state) => state.cartSlice);
  const isExist = (item: Product, arr: Product[]) => arr.some((el) => el.id === item.id);

  const onCardClick = (item: Product) => {
    pushModalContent(item);
    setModalOpen();
  };

  const onItemAdd = (item: Product) => {
    addItem(item);
  };

  const renderItem = (item: Product) => (
    <PrimaryProductCard
      item={item}
      onCardClick={onCardClick}
      onButtonClick={onItemAdd}
      buttonTitle={isExist(item, data) ? 'One more' : 'Add to card'}
    />
  );

  return (
    <>
      <Head>
        <title>Next shop | {category}</title>
      </Head>
      <PrimaryLayout>
        <h3 className='m-2 text-2xl font-bold capitalize'>{category}</h3>
        {items instanceof Array ? (
          <ProductList items={items} renderItem={renderItem} />
        ) : (
          items !== undefined && <h3>{items}</h3>
        )}
      </PrimaryLayout>
    </>
  );
};

export const getServerSideProps: GetServerSideProps<CategoryProps> = async ({ resolvedUrl }) => {
  const category = resolvedUrl.split('/')[2];
  const items = await fetcher<Product[]>(`${ENDPOINTS.products}/category/${category}`);
  return { props: { items } };
};

export default Category;
