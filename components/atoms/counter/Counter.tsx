import classNames from 'classnames/bind';

import style from './Counter.module.scss';

const cx = classNames.bind(style);

type CounterProps = {
  className?: string;
};

const Counter = ({ className }: CounterProps) => {
  return <div className={cx('counter-wrapper', className)}>counter</div>;
};

export default Counter;
