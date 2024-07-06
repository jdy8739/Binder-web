import classNames from 'classnames/bind';

import PostDetail from '/components/pages/board/post/[id]/post-detail/PostDetail';
import PopularPosts from '/components/pages/board/post/[id]/popular-posts/PopularPosts';

import style from './PostID.module.scss';

const cx = classNames.bind(style);

const Page = () => {
  return (
    <main className={cx('container')}>
      <PostDetail />
      <PopularPosts />
    </main>
  );
};

export default Page;
