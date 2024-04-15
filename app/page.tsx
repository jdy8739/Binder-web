import Link from 'next/link';

import classNames from 'classnames/bind';

import Carousel from '../components/atoms/carousel/Carousel';
import Slide from '/components/atoms/slide/Slide';
import LinkNavigator from '/components/atoms/link-navigator/LinkNavigator';

import style from './main.module.scss';
import PostThumbnail from '/components/mocules/PostThumbnail';

const cx = classNames.bind(style);

const MainContents = () => {
  return (
    <section className={cx('upper')}>
      <Carousel className={cx('upper-left')} />
      <div className={cx('upper-right')}>
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

const PopularPosts = () => {
  return (
    <section className={cx('lower')}>
      <div>
        <div className={cx('lower-head')}>
          <span>인기글</span>
          <Link href="/#">더보기</Link>
        </div>
        <Slide
          className={cx('lower-body')}
          elementList={[1, 2, 3, 4].map(() => (
            <PostThumbnail className={cx('post-thumbnail')} />
          ))}
        />
      </div>
      <div>
        <div className={cx('lower-head')}>
          <span>최신글</span>
          <Link href="/#">더보기</Link>
        </div>
        <Slide
          className={cx('lower-body')}
          elementList={[1, 2, 3, 4].map(() => (
            <PostThumbnail className={cx('post-thumbnail')} />
          ))}
        />
      </div>
    </section>
  );
};

const Page = () => {
  return (
    <main className={cx('main')}>
      <MainContents />
      <PopularPosts />
    </main>
  );
};

export default Page;
