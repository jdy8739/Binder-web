'use client';

import { usePathname } from 'next/navigation';

import SignFooter from './SignFooter';
import NormalFooter from './NormalFooter';

const Footer = () => {
  const pathname = usePathname();

  return (
    // eslint-disable-next-line react/jsx-no-useless-fragment
    <>
      {pathname === '/signin' || pathname === 'signup' ? (
        <SignFooter />
      ) : (
        <NormalFooter />
      )}
    </>
  );
};

export default Footer;
