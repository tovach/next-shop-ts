import { NextPage } from 'next';
import Head from 'next/head';

import { PrimaryLayout } from '@components/layouts';
import { CartContent } from '@features/cart';

type CartProps = {};

const Cart: NextPage<CartProps> = () => (
  <>
    <Head>
      <title>Next shop | Shopping cart</title>
    </Head>
    <PrimaryLayout>
      <h3 className='m-2 text-2xl font-bold'>Cart</h3>
      <CartContent />
    </PrimaryLayout>
  </>
);

export default Cart;
