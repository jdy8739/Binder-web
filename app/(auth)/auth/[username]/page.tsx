'use client'

import React, { useState } from 'react';
import classNames from 'classnames/bind';
import styles from './username.module.scss';
import MySidebar from '../../../../components/pages/my-page/sidebar/MySidebar';
import MyProfile from '/components/pages/my-page/profile/MyProfile';
import Badge from '/components/pages/my-page/badge/Badge';
import Contents from '/components/pages/my-page/contents/Contents';
import ScrapLikes from '/components/pages/my-page/scrap-likes/ScrapLikes';
import Notifications from '/components/pages/my-page/notifications/Notifications';
import CheckBox from '/components/atoms/check-box/CheckBox';
import ContentsOverview from '/components/pages/my-page/contents/ContentsOverview';
import ScrapLikesOverview from '/components/pages/my-page/scrap-likes/ScrapLikesOverview';

const cx = classNames.bind(styles);

const MyPage = () => {
  const [selectedMenu, setSelectedMenu] = useState('home');

  const renderContent = () => {
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
      case 'scrapLikes':
        return <ScrapLikes />;
      case 'profileEdit':
        return <div>개인정보 수정 내용</div>;
      case 'notifications':
        return <Notifications />;
      default:
        return <div>잘못된 접근입니다.</div>;
    }
  };

  return (
    <div className={cx('container')}>
      <MySidebar selectedMenu={selectedMenu} setSelectedMenu={setSelectedMenu} />
      <div className={cx('main-wrapper')}>
        {renderContent()}
      </div>
    </div>
  );
};

export default MyPage;
