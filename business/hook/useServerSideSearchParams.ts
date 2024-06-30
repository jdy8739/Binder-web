import { headers } from 'next/headers';

const useServerSideSearchParams = <T extends Record<string, string>>() => {
  const headersList = headers();

  const headerSearchParams = headersList.get('search-params') || '';

  const searchParams: T = JSON.parse(headerSearchParams);

  return {
    searchParams,
  };
};

export default useServerSideSearchParams;
