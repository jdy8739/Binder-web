import Link from 'next/link';

import classNames from 'classnames/bind';

import Slide from '/components/atoms/slide/Slide';
import PostThumbnail from '../post-thumbnail/PostThumbnail';

import style from './PostSlide.module.scss';

const cx = classNames.bind(style);

const PostSlide = () => {
  return (
    <div className={cx('container')}>
      <div className={cx('posts-head')}>
        <span>최신글</span>
        <Link href="/#">더보기</Link>
      </div>
      <Slide
        className={cx('posts-body')}
        elementList={[1, 2, 3, 4, 5, 6, 7, 8].map((el) => (
          <PostThumbnail key={el} index={el} />
        ))}
      />
    </div>
  );
};

export default PostSlide;
