import { headers } from 'next/headers';

const useServerSideSearchParams = () => {
  const headersList = headers();

  const headerSearchParams = headersList.get('search-params') || '';

  const searchParams: Record<string, string> = JSON.parse(headerSearchParams);

  return {
    searchParams,
  };
};

export default useServerSideSearchParams;
