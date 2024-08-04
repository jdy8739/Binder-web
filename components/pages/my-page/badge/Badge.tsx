import React from 'react';
import classNames from 'classnames/bind';
import styles from './Badge.module.scss';
import Circle from '/components/atoms/circle/Circle';
import BadgeTag from '/components/atoms/badge-tag/BadgeTag';

const cx = classNames.bind(styles);

const Badge = () => {
  return (
    <div className={cx('container')}>
      <div className={cx('upper-box')}>
        <Circle />
        <BadgeTag text='배지이름' color='#02B152' border={true} />
        <BadgeTag text='배지유형' color='#6F6F6F' border={false} />
      </div>
      <div className={cx('lower-box')}>
        <div>
          <Circle width={56} height={56}/>
          <Circle width={56} height={56}/>
          <Circle width={56} height={56}/>
          <Circle width={56} height={56}/>
          <Circle width={56} height={56}/>
          <Circle width={56} height={56}/>
        </div>
        <p>
          {`나의 배지 목록 확인 >`}
        </p>
      </div>
    </div>
  );
}

export default Badge;