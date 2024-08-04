import React from 'react'
import classNames from 'classnames/bind';
import styles from './Circle.module.scss'
const cx = classNames.bind(styles);

interface CircleProps {
  width?: number;
  height?: number;
}

const Circle = ({width, height}:CircleProps) => {
  const style = {
    width,
    height
  }

  return (
    <div className={cx('container')} style={style}>
    </div>
  )
}

export default Circle