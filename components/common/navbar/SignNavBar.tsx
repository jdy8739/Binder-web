import Link from 'next/link';
import classNames from 'classnames/bind';

import style from './SignNavBar.module.scss';

const cx = classNames.bind(style);

const SignNavBar = ({ service }: { service: string }) => {
  return (
    <nav className={cx('nav')}>
      <span>
        <Link href="/">바인더</Link>
      </span>
      <span>{service}</span>
    </nav>
  );
};

export default SignNavBar;
