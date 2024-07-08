'use client';

import classNames from 'classnames/bind';

import style from './PostAnswer.module.scss';
import ProfileAvatar from '/components/atoms/profile/ProfileAvatar';

const cx = classNames.bind(style);

const PostAnswer = () => {
  return (
    <div className={cx('card', 'answer')}>
      <div className={cx('profile-card')}>
        <ProfileAvatar size="lg" />
      </div>
    </div>
  );
};

export default PostAnswer;
