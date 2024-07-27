import React from 'react';
import classNames from 'classnames/bind';
import styles from './username.module.scss'
import MySidebar from '../../../../components/pages/my-page/sidebar/MySidebar';
import MyProfile from '/components/pages/my-page/profile/MyProfile';
const cx = classNames.bind(styles);


const page = () => {
  return (
    <div className={cx('container')}>
      <MySidebar />
      <div className={cx('main-wrapper')}>
        <div>
          <MyProfile />
        </div>
        <div>
          <h3>나의 콘텐츠</h3>
          <div>나의 글</div>
          <div>나의 답변</div>
          <div>나의 댓글</div>
        </div>
        <div>
          <h3>스크랩 좋아요</h3>
          <div>스크랩</div>
          <div>좋아요</div>
          </div>
      </div>
    </div>
  );
};

export default page;
