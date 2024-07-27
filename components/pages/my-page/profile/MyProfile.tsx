import React from 'react';
import classNames from 'classnames/bind';
import styles from './MyProfile.module.scss';
import { Profile } from '/assets/svg';
import Hashtag from '/components/atoms/hashtag/Hashtag';

const cx = classNames.bind(styles);

const MyProfile = () => {
  return (
    <div className={cx('container')}>
        <div className={cx('upper-box')}>
          <span>
            <Profile />
          </span>
          <span>
            <div>
              <p>닉네임</p>
              <p>
                <span>연구원 </span> 
                <span>1년차</span>
              </p>
              <div>
                <Hashtag />
                <Hashtag />
              </div>
            </div>
          </span>
        </div>
      <div className={cx('lower-box')}>
        <p>작성된 소개글이 없습니다.</p>
        <span>
          <p>본인을 알릴 수 있는 짧은 소개글을 작성해주세요.</p>
          <button>수정</button>
        </span>
      </div>
    </div>
  );
}

export default MyProfile;
