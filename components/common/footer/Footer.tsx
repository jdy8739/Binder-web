'use client';

import { usePathname } from 'next/navigation';

import { URL_CONST } from '/business/const/index';

import SignFooter from './SignFooter';
import NormalFooter from './NormalFooter';

const Footer = () => {
  const pathname = usePathname();

  return (
    // eslint-disable-next-line react/jsx-no-useless-fragment
    <>
      {pathname === URL_CONST.SIGN_IN ||
      pathname === URL_CONST.SIGN_UP ||
      pathname === URL_CONST.FIND_PW ||
      pathname === URL_CONST.RESET_PW ? (
        <SignFooter />
      ) : (
        <NormalFooter />
      )}
    </>
  );
};

export default Footer;
