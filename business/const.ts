const CONST = {
  STRING: {
    BLANK: '',
    ZERO: '0',
  },
  NUMBER: {
    ZERO: 0,
  },
} as const;

const DOMAIN = {
  SIGN_UP: '/signup',
  SIGN_IN: '/signin',
  FIND_PW: '/findpw',
  RESET_PW: '/resetpw',
};

export { CONST, DOMAIN };
