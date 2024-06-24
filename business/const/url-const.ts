const URL_CONST = {
  AUTH: {
    SIGN_UP: '/auth/signup',
    SIGN_IN: '/auth/signin',
    FIND_PW: '/auth/findpw',
    RESET_PW: '/auth/resetpw',
  },
  BOARD: {
    DEPT: '/board/dept',
    ARTS: '/board/arts',
    JOBS: '/board/jobs',
  },
} as const;

// eslint-disable-next-line import/prefer-default-export
export { URL_CONST };
