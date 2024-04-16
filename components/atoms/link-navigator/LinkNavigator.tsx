import classNames from 'classnames/bind';

import { NavLeftSmall, NavRightSmall } from '/assets/svg';

import style from './LinkNavigator.module.scss';

const cx = classNames.bind(style);

interface Props {
  className?: string;
  title: string;
  subTitle: string;
}

const LinkNavigator = ({ className, title, subTitle }: Props) => {
  return (
    <div className={cx('wrapper', className)}>
      <span className={cx('nav-text')}>
        <span>{title}</span>
        <span>{subTitle}</span>
      </span>
      <span className={cx('nav-button')}>
        <button type="button">
          <NavLeftSmall />
        </button>
        <button type="button">
          <NavRightSmall />
        </button>
      </span>
    </div>
  );
};

export default LinkNavigator;
