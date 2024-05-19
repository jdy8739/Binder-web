import classNames from 'classnames/bind';

import { ProfileBig } from '/assets/svg';

import style from './ProfileBar.module.scss';

const cx = classNames.bind(style);

const ProfileBar = () => {
  return (
    <figure>
      <div className={cx('field-detail-top-profile')}>
        <div className={cx('profile')}>
          <div>
            <div className={cx('profile-pic')}>
              <ProfileBig />
            </div>
            <div className={cx('status-ball')} />
          </div>
          <div>
            <span>닉네임</span>
            <span>뱃지 이름</span>
          </div>
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
