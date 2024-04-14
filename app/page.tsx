import classNames from 'classnames/bind';

import Slide from '/components/atoms/slide/Slide';

import style from './main.module.scss';
import LinkNavigator from '/components/atoms/link-navigator/LinkNavigator';

const cx = classNames.bind(style);

const MainContents = () => {
  return (
    <section className={cx('upper')}>
      <Slide className={cx('upper-left')} />
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
  return <section />;
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
