import React from 'react';
import classNames from 'classnames/bind';
import styles from './MySidebar.module.scss';
const cx = classNames.bind(styles);

const MySidebar = ({ selectedMenu, setSelectedMenu }) => {
  return (
    <nav className={cx('sidebar')}>
      <ul>
        <li className={cx({ selected: selectedMenu === 'home' })}>
          <a href="#" onClick={() => setSelectedMenu('home')}>MY 홈</a>
        </li>
        <li className={cx({ selected: selectedMenu === 'contents' })}>
          <a href="#" onClick={() => setSelectedMenu('contents')}>나의 콘텐츠</a>
        </li>
        <li className={cx({ selected: selectedMenu === 'scrapLikes' })}>
          <a href="#" onClick={() => setSelectedMenu('scrapLikes')}>스크랩/좋아요</a>
        </li>
        <li className={cx({ selected: selectedMenu === 'profileEdit' })}>
          <a href="#" onClick={() => setSelectedMenu('profileEdit')}>개인정보 수정</a>
        </li>
        <li className={cx({ selected: selectedMenu === 'notifications' })}>
          <a href="#" onClick={() => setSelectedMenu('notifications')}>나의 알림</a>
        </li>
        <li>
          <a href="#">로그아웃</a>
        </li>
      </ul>
    </nav>
  );
};

export default MySidebar;
