import classNames from 'classnames/bind';

import MainContents from '/components/pages/main/main-contents/MainContents';
import PopularPosts from '/components/pages/main/popular-posts/PopularPosts';

import style from './Main.module.scss';

const cx = classNames.bind(style);

const Page = () => {
  return (
    <main className={cx('main-wrapper')}>
      <MainContents />
      <PopularPosts />
    </main>
  );
};

export default Page;
