import { headers } from 'next/headers';

const useServerSidePathname = () => {
  const headersList = headers();

  const headerPathname = headersList.get('x-pathname') || '';

  const pathnameStringArray = headerPathname.split('/');

  const lastPathnameString = [...pathnameStringArray].pop();

  return {
    headerPathname,
    pathnameStringArray,
    lastPathnameString,
  };
};

export default useServerSidePathname;
