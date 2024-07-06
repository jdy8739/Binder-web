'use client';

import classNames from 'classnames/bind';

import ProfileAvatar from '/components/atoms/profile/ProfileAvatar';
import Button from '/components/atoms/button/Button';

import style from './PostAnswerPending.module.scss';

const cx = classNames.bind(style);

const PostAnswerPending = () => {
  const isLogin = true;

  return (
    <div className={cx('card', 'answer')}>
      <div className={cx('answer-left')}>
        {isLogin ? (
          <ProfileAvatar size="md" />
        ) : (
          <span className={cx('get-badges')}>
            게시글의 답변을 달고 뱃지를 휙득해보세요.
          </span>
        )}
      </div>
      <div>
        <Button width={160} height={50}>
          답변하기
        </Button>
      </div>
    </div>
  );
};

export default PostAnswerPending;
