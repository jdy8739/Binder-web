'use client';

import { usePathname } from 'next/navigation';

import { DOMAIN } from '/business/const';

import SignFooter from './SignFooter';
import NormalFooter from './NormalFooter';

const Footer = () => {
  const pathname = usePathname();

  return (
    // eslint-disable-next-line react/jsx-no-useless-fragment
    <>
      {pathname === DOMAIN.SIGN_IN || pathname === DOMAIN.SIGN_UP ? (
        <SignFooter />
      ) : (
        <NormalFooter />
      )}
    </>
  );
};

export default Footer;