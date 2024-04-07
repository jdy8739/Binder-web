'use client';

import { usePathname } from 'next/navigation';

import { CONST, DOMAIN } from '/business/const';

import SignNavBar from './SignNavBar';
import NormalNavBar from './NormalNavBar';

const NavBar = () => {
  const pathname = usePathname();

  const service =
    // eslint-disable-next-line no-nested-ternary
    pathname === DOMAIN.SIGN_IN ||
    pathname === DOMAIN.FIND_PW ||
    pathname === DOMAIN.RESET_PW
      ? '통합 로그인'
      : pathname === DOMAIN.SIGN_UP
        ? '회원가입'
        : CONST.STRING.BLANK;

  // eslint-disable-next-line react/jsx-no-useless-fragment
  return <>{service ? <SignNavBar service={service} /> : <NormalNavBar />}</>;
};

export default NavBar;
