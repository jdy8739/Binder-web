import React from 'react';
import classNames from 'classnames/bind';
import styles from './BadgeTag.module.scss';

const cx = classNames.bind(styles);

interface BadgeTagProps {
  text: string;
  color: string;
  border?: boolean;
}

const BadgeTag = ({ text, color, border = true }: BadgeTagProps) => {
  const style = {
    borderColor: border ? color : 'transparent',
    color: color,
    borderWidth: border ? '1px' : '0',
    borderStyle: 'solid',
  };

  return (
    <div className={cx('container')} style={style}>
      {text}
    </div>
  );
}

export default BadgeTag;