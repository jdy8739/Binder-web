'use client';

import { useState } from 'react';
import classNames from 'classnames/bind';
import MySidebar from '../../../../components/pages/my-page/sidebar/MySidebar';
import MyProfile from '/components/pages/my-page/profile/MyProfile';
import Badge from '/components/pages/my-page/badge/Badge';
import Contents from '/components/pages/my-page/contents/Contents';
import ScrapLikes from '/components/pages/my-page/scrap-likes/ScrapLikes';
import Notifications from '/components/pages/my-page/notifications/Notifications';

import ContentsOverview from '/components/pages/my-page/contents/ContentsOverview';
import ScrapLikesOverview from '/components/pages/my-page/scrap-likes/ScrapLikesOverview';

import style from './username.module.scss';

const cx = classNames.bind(style);

type SideBarMenuType =
  | 'home'
  | 'contents'
  | 'scrap-likes'
  | 'profile-edit'
  | 'notifications';

const MyPageTab = ({ selectedMenu }: { selectedMenu: SideBarMenuType }) => {
  switch (selectedMenu) {
    case 'home':
      return (
        <>
          <div className={cx('home-boxes')}>
            <MyProfile />
            <Badge />
          </div>
          <div className={cx('rest-boxes')}>
            <ContentsOverview />
            <ScrapLikesOverview />
          </div>
        </>
      );
    case 'contents':
      return <Contents />;
    case 'scrap-likes':
      return <ScrapLikes />;
    case 'profile-edit':
      return <div>개인정보 수정 내용</div>;
    case 'notifications':
      return <Notifications />;
    default:
      return <div>잘못된 접근입니다.</div>;
  }
};

const MyPage = () => {
  const [selectedMenu, setSelectedMenu] = useState<SideBarMenuType>('home');

  return (
    <div className={cx('container')}>
      <MySidebar sideBarMenu={selectedMenu} setMenu={setSelectedMenu} />
      <div className={cx('main-wrapper')}>
        <MyPageTab selectedMenu={selectedMenu} />
      </div>
    </div>
  );
};

export default MyPage;
export type { SideBarMenuType };
