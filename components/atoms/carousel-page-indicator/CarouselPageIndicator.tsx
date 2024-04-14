import classNames from 'classnames/bind';

import style from './CarouselPageIndicator.module.scss';

const cx = classNames.bind(style);

interface Props {
  className?: string;
  currentIndex: number;
  totalCount: number;
}

const CarouselPageIndicator = ({
  className,
  currentIndex = 0,
  totalCount = 0,
}: Props) => {
  return (
    <div
      className={cx('indicator', className)}
    >{`${currentIndex} / ${totalCount}`}</div>
  );
};

export default CarouselPageIndicator;
