'use client';

import { usePathname } from 'next/navigation';

import { URL_CONST, VALUE_CONST } from '/business/const/index';

import SignNavBar from './SignNavBar';
import NormalNavBar from './NormalNavBar';

const NavBar = () => {
  const pathname = usePathname();

  const service =
    // eslint-disable-next-line no-nested-ternary
    pathname === URL_CONST.AUTH.SIGN_IN ||
    pathname === URL_CONST.AUTH.FIND_PW ||
    pathname === URL_CONST.AUTH.RESET_PW
      ? '통합 로그인'
      : pathname === URL_CONST.AUTH.SIGN_UP
        ? '회원가입'
        : VALUE_CONST.STRING.BLANK;

  // eslint-disable-next-line react/jsx-no-useless-fragment
  return <>{service ? <SignNavBar service={service} /> : <NormalNavBar />}</>;
};

export default NavBar;
