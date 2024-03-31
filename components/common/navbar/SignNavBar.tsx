import classNames from 'classnames/bind';

import style from './SignNavBar.module.scss';

const cx = classNames.bind(style);

const SignNavBar = ({ service }: { service: string }) => {
  return (
    <nav className={cx('nav')}>
      <span>바인더</span>
      <span>{service}</span>
    </nav>
  );
};

export default SignNavBar;
