import classNames from 'classnames/bind';

import PostSlide from '/components/mocules/post-slide/PostSlide';

import style from './PopularPosts.module.scss';

const cx = classNames.bind(style);

const PopularPosts = () => {
  return (
    <section className={cx('container')}>
      <PostSlide className={cx('post-slide-container')} />
    </section>
  );
};

export default PopularPosts;
