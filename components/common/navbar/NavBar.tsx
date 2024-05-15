import useServerSideUrl from '/business/hooks/useServerSideUrl';

import { URL_CONST, VALUE_CONST } from '/business/const/index';

import SignNavBar from './SignNavBar';
import NormalNavBar from './NormalNavBar';

const NavBar = () => {
  const { lastPathnameString } = useServerSideUrl();

  const service =
    // eslint-disable-next-line no-nested-ternary
    lastPathnameString === URL_CONST.SIGN_IN ||
    lastPathnameString === URL_CONST.FIND_PW ||
    lastPathnameString === URL_CONST.RESET_PW
      ? '통합 로그인'
      : lastPathnameString === URL_CONST.SIGN_UP
        ? '회원가입'
        : VALUE_CONST.STRING.BLANK;

  // eslint-disable-next-line react/jsx-no-useless-fragment
  return <>{service ? <SignNavBar service={service} /> : <NormalNavBar />}</>;
};

export default NavBar;
