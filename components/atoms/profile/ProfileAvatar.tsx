import { ReactNode } from 'react';

import classNames from 'classnames/bind';

import { ProfileBig, ProfileMedium, Profile } from '/assets/svg';

import style from './ProfileAvatar.module.scss';

const cx = classNames.bind(style);

type ProfileSize = 'lg' | 'md' | 'sm';

type Props = {
  className?: string;
  size?: ProfileSize;
};

const PROFILE_SVG: Record<ProfileSize, ReactNode> = {
  lg: <ProfileBig />,
  md: <ProfileMedium />,
  sm: <Profile />,
} as const;

const ProfileAvatar = ({ className, size = 'lg' }: Props) => {
  return (
    <div className={cx('profile-avatar-wrapper', className)}>
      <div className={cx('profile-pic')}>
        <div>{PROFILE_SVG[size]}</div>
        <div className={cx('status-ball', size)} />
      </div>
      <div className={cx('profile-info')}>
        <span>닉네임</span>
        <span>뱃지 이름</span>
      </div>
    </div>
  );
};

export default ProfileAvatar;
