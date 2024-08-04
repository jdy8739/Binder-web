import React from 'react';
import Button from '../button/Button';
import classNames from 'classnames/bind';
import styles from './ContentBox.module.scss';

const cx = classNames.bind(styles);


interface ContentBoxProps {
  title: string;
  subtitle1: string;
  subtitle2: string;
  buttonText: string;
  buttonLink: string;
  buttonWidth?: number;
  buttonSize?: 'lg' | 'sm';
}

const ContentBox = ({
  title,
  subtitle1,
  subtitle2,
  buttonText,
  buttonLink,
  buttonWidth = 305,
  buttonSize = 'lg',
}: ContentBoxProps) => {
  return (
    <div className={cx('container')}>
      <div className={cx('title')}>
        {title}
      </div>
      <div className={cx('content-text')}>
        <div className={cx('subtitle1')}>
          {subtitle1}
        </div>
        <div className={cx('subtitle2')}>
          {subtitle2}
        </div>
      </div>
      <Button
        width={buttonWidth}
        size={buttonSize}
        link={buttonLink}
        content={buttonText}
      />
    </div>
  );
};

export default ContentBox;
