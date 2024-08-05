import React from 'react'
import classNames from 'classnames/bind';
import styles from './Hashtag.module.scss';
const cx = classNames.bind(styles);


const Hashtag = () => {
  return (
    <span className={cx('container')}>#태그</span>
  )
}

export default Hashtag