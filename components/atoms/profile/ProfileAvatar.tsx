import { ReactNode } from 'react';

import classNames from 'classnames/bind';

import { ProfileBig, ProfileMedium, Profile } from '/assets/svg';

import style from './ProfileAvatar.module.scss';

const cx = classNames.bind(style);

type ProfileSize = 'lg' | 'md' | 'sm';

type Props = {
  className?: string;
  size?: ProfileSize;
  afterNickname?: string;
  showField?: boolean;
};

const PROFILE_SVG: Record<ProfileSize, ReactNode> = {
  lg: <ProfileBig />,
  md: <ProfileMedium />,
  sm: <Profile />,
} as const;

const ProfileAvatar = ({
  className,
  size = 'lg',
  afterNickname = '',
  showField = true,
}: Props) => {
  return (
    <div className={cx('profile-avatar-wrapper', className)}>
      <div className={cx('profile-pic')}>
        <div>{PROFILE_SVG[size]}</div>
        <div className={cx('status-ball', size)} />
      </div>
      <div className={cx('profile-info')}>
        <span>{`닉네임${afterNickname}`}</span>
        <span>뱃지 이름</span>
      </div>
      {showField && (
        <div className={cx('profile-field')}>
          <span>직무</span>
          <span>대학원생</span>
        </div>
      )}
    </div>
  );
};

export default ProfileAvatar;
