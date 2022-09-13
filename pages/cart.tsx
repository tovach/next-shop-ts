import { NextPage } from 'next';
import Head from 'next/head';

import { PrimaryLayout } from '@components/layouts';

type CartProps = {};

const Cart: NextPage<CartProps> = () => (
  <>
    <Head>
      <title>Next shop | Homepage</title>
    </Head>
    <PrimaryLayout>
      <h3 className='mb-2 text-2xl font-bold'>Cart</h3>
    </PrimaryLayout>
  </>
);

export default Cart;
