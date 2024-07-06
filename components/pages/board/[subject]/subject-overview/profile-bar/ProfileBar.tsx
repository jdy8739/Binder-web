import classNames from 'classnames/bind';

import ProfileAvatar from '/components/atoms/profile/ProfileAvatar';

import style from './ProfileBar.module.scss';

const cx = classNames.bind(style);

const ProfileBar = () => {
  return (
    <figure>
      <div className={cx('subject-top-profile')}>
        <div className={cx('profile')}>
          <ProfileAvatar />
          <div>
            <span>직무</span>
            <span>대학원생</span>
          </div>
        </div>
        <div className={cx('tags')}>
          <span>#태그</span>
          <span>#태그</span>
        </div>
      </div>
    </figure>
  );
};

export default ProfileBar;
