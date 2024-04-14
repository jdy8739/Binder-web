import classNames from 'classnames/bind';

import { NavLeft, NavRight } from '/assets/svg';

import CarouselPageIndicator from '../carousel-page-indicator/CarouselPageIndicator';

import style from './Carousel.module.scss';

const cx = classNames.bind(style);

interface Props {
  className?: string;
}

const Carousel = ({ className }: Props) => {
  return (
    <div className={cx('wrapper', className)}>
      <div className={cx('slides')} />
      <div className={cx('navigator')}>
        <button type="button">
          <NavLeft />
        </button>
        <button type="button">
          <NavRight />
        </button>
      </div>
      <CarouselPageIndicator
        className={cx('indicator')}
        currentIndex={1}
        totalCount={11}
      />
    </div>
  );
};

export default Carousel;
