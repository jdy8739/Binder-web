import classNames from 'classnames/bind';

import Carousel from '/components/atoms/carousel/Carousel';
import LinkNavigator from '/components/atoms/link-navigator/LinkNavigator';

import style from './MainContents.module.scss';

const cx = classNames.bind(style);

const MainContents = () => {
  return (
    <section className={cx('main-contents-wrapper')}>
      <Carousel className={cx('carousel')} />
      <div className={cx('notice')}>
        <div
          style={{
            height: '536px',
            background: 'black',
            borderRadius: '8px',
            marginBottom: '16px',
          }}
        />
        <LinkNavigator title="공지사항" subTitle="공지사항" />
      </div>
    </section>
  );
};

export default MainContents;
