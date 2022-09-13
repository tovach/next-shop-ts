import Image from 'next/image';
import Link from 'next/link';
import { FC } from 'react';

import logoImage from '@public/assets/img/logo.svg';

type LogoProps = {};

export const Logo: FC<LogoProps> = () => (
  <Link href='/'>
    <a>
      <span className='flex items-center gap-2 font-montserrat font-bold uppercase'>
        <Image src={logoImage} width={40} height={40} />
        <h3>Next Shop</h3>
      </span>
    </a>
  </Link>
);
