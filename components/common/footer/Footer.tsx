import useServerSidePathname from '/business/hooks/useServerSidePathname';

import { URL_CONST } from '/business/const/index';

import SignFooter from './SignFooter';
import NormalFooter from './NormalFooter';

const Footer = () => {
  const { lastPathnameString } = useServerSidePathname();

  return (
    // eslint-disable-next-line react/jsx-no-useless-fragment
    <>
      {lastPathnameString === URL_CONST.SIGN_IN ||
      lastPathnameString === URL_CONST.SIGN_UP ||
      lastPathnameString === URL_CONST.FIND_PW ||
      lastPathnameString === URL_CONST.RESET_PW ? (
        <SignFooter />
      ) : (
        <NormalFooter />
      )}
    </>
  );
};

export default Footer;
