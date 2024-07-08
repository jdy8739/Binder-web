'use client';

import classNames from 'classnames/bind';
import { useState } from 'react';

import PostContent from './post-content/PostContent';
import PostAnswering from './post-answering/PostAnswering';
import PostAnswerPending from './post-answer-pending/PostAnswerPending';
import PostAnswer from './post-answer/PostAnswer';

import style from './PostDetail.module.scss';

const cx = classNames.bind(style);

const PostDetail = () => {
  const [answering, setAnswering] = useState(false);

  return (
    <div className={cx('container')}>
      <article>
        <PostContent />
        {answering ? (
          <PostAnswering />
        ) : (
          // <PostAnswerPending toggleAnswering={() => setAnswering(!answering)} />
          <PostAnswer />
        )}
      </article>
    </div>
  );
};

export default PostDetail;
