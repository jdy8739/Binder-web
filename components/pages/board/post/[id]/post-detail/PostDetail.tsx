'use client';

import classNames from 'classnames/bind';

import PostContent from './post-content/PostContent';
import PostAnswerPending from './post-answer-pending/PostAnswerPending';

import style from './PostDetail.module.scss';

const cx = classNames.bind(style);

const PostDetail = () => {
  return (
    <div className={cx('container')}>
      <article>
        <PostContent />
        <PostAnswerPending />
      </article>
    </div>
  );
};

export default PostDetail;
