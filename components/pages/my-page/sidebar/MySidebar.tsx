import React from 'react'
import classNames from 'classnames/bind'
import styles from './MySidebar.module.scss'
const cx = classNames.bind(styles)

const MySidebar = () => {
  return (
    <nav className={cx('sidebar')}>
      <ul>
        <li><a href="#">MY 홈</a></li>
        <li><a href="#">나의 콘텐츠</a></li>
        <li><a href="#">스크랩/좋아요</a></li>
        <li><a href="#">개인정보 수정</a></li>
        <li><a href="#">나의 알림</a></li>
        <li><a href="#">로그아웃</a></li>
      </ul>
    </nav>
  )
}

export default MySidebar