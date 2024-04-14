import classNames from 'classnames/bind';

import { NavLeft, NavRight } from '/assets/svg';

import SlidePageIndicator from '../slide-page-indicator/SlidePageIndicator';

import style from './Slide.module.scss';

const cx = classNames.bind(style);

interface Props {
  className?: string;
}

const Slide = ({ className }: Props) => {
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
      <SlidePageIndicator
        className={cx('indicator')}
        currentIndex={1}
        totalCount={11}
      />
    </div>
  );
};

export default Slide;
