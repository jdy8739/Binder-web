import Link from 'next/link';
import classNames from 'classnames/bind';

import SearchInput from '/components/atoms/SearchInput';

import style from './NormalNavBar.module.scss';

const cx = classNames.bind(style);

const NormalNavBar = () => {
  return (
    <header className={cx('wrapper')}>
      <div>
        <div className={cx('left')}>
          <span className={cx('logo')}>
            <div>바인더</div>
            <div className={cx('logo-border')}>
              <div />
              <div />
            </div>
            <small>
              <div>
                <span>Bio</span>
                <span>-Industrial community</span>
              </div>
            </small>
          </span>
          <SearchInput className={cx('search-input')} />
        </div>
        <span className={cx('right')}>
          <ul>
            <li>
              <Link href="/#" className={cx('sign-link')}>
                로그인
              </Link>
            </li>
            <li>
              <Link href="/#" className={cx('sign-link')}>
                회원가입
              </Link>
            </li>
          </ul>
        </span>
      </div>
      <nav>
        <ul>
          <li>
            <Link href="/#" className={cx('nav-link')}>
              필드별
            </Link>
          </li>
          <li>
            <Link href="/#" className={cx('nav-link')}>
              직무 게시판
            </Link>
          </li>
          <li>
            <Link href="/#" className={cx('nav-link')}>
              학술 게시판
            </Link>
          </li>
          <li>
            <Link href="/#" className={cx('nav-link')}>
              취업이직 게시판
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default NormalNavBar;
