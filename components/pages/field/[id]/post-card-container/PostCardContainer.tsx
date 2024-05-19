import classNames from 'classnames/bind';

import { Bookmark, PostCheck, PostThumb, SpeechBallon } from '/assets/svg';

import style from './PostCardContainer.module.scss';

const cx = classNames.bind(style);

const PostCard = () => {
  return (
    <div className={cx('post-card')}>
      <div className={cx('post-card-title')}>
        <span>게시글 제목</span>
      </div>
      <div className={cx('post-card-content')}>
        <span>게시글 작성공간입니다.</span>
      </div>
      <div className={cx('post-card-footer')}>
        <div className={cx('footer-left')}>
          <span className={cx('icon-button')}>
            <button type="button">
              <PostThumb />
              <span>공감하기</span>
            </button>
          </span>
          <span className={cx('icon-button')}>
            <button type="button">
              <SpeechBallon />
              <span>댓글</span>
            </button>
          </span>
          <span className={cx('icon-button')}>
            <button type="button">
              <PostCheck />
              <span>조회 989</span>
            </button>
          </span>
        </div>
        <div className={cx('footer-right')}>
          <div>
            <span>aaa님</span> <span>2024.04.20 작성</span>
          </div>
          <div>
            <button type="button">
              <Bookmark />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

const PostCardContainer = () => {
  return (
    <figure>
      <div className={cx('pc-container')}>
        {Array.from({ length: 8 }, (_, index) => (
          <PostCard key={index} />
        ))}
      </div>
    </figure>
  );
};

export default PostCardContainer;
