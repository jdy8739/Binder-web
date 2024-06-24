import { NextRequest, NextResponse } from 'next/server';

const middleware = (request: NextRequest) => {
  const requestHeaders = new Headers(request.headers);

  requestHeaders.set('x-pathname', request.nextUrl.pathname);

  const url = new URL(request.url);

  const searchParams = Object.fromEntries(url.searchParams.entries());

  requestHeaders.set('search-params', JSON.stringify(searchParams));

  return NextResponse.next({
    request: {
      headers: requestHeaders,
    },
  });
};

// eslint-disable-next-line import/prefer-default-export
export { middleware };
