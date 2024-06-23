const URL_CONST = {
  SIGN_UP: '/signup',
  SIGN_IN: '/signin',
  FIND_PW: '/findpw',
  RESET_PW: '/resetpw',

  BOARD: {
    DEPT: '/board/dept',
    ARTS: '/board/arts',
    JOBS: '/board/jobs',
  },
} as const;

// eslint-disable-next-line import/prefer-default-export
export { URL_CONST };
