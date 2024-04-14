import classNames from 'classnames/bind';

import Carousel from '../components/atoms/carousel/Carousel';
import LinkNavigator from '/components/atoms/link-navigator/LinkNavigator';

import style from './main.module.scss';

const cx = classNames.bind(style);

const MainContents = () => {
  return (
    <section className={cx('upper')}>
      <Carousel className={cx('upper-left')} />
      <div className={cx('upper-right')}>
        <div
          style={{
            height: '536px',
            background: 'black',
            borderRadius: '8px',
            marginBottom: '16px',
          }}
        />
        <LinkNavigator title="공지사항" subTitle="공지사항" />
      </div>
    </section>
  );
};

const PopularPosts = () => {
  return (
    <section className={cx('lower')}>
      <div />
      <div />
    </section>
  );
};

const Page = () => {
  return (
    <main className={cx('main')}>
      <MainContents />
      <PopularPosts />
    </main>
  );
};

export default Page;
