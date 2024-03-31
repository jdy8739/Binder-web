import classNames from 'classnames/bind';

import styles from './SignFooter.module.scss';

const cx = classNames.bind(styles);

const SignFooter = () => {
  return (
    <footer className={cx('footer')}>&copy; BINDER. All Rights Reserved</footer>
  );
};

export default SignFooter;
