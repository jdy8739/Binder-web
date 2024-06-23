import classNames from 'classnames/bind';

import SubjectOverview from '/components/pages/board/[subject]/subject-overview/SubjectOverview';
import PostCardContainer from '/components/pages/board/[subject]/post-card-container/PostCardContainer';
import Pagination from '/components/atoms/pagination/Pagination';

import style from './subject.module.scss';

const cx = classNames.bind(style);

const Page = () => {
  return (
    <main className={cx('subject-wrapper')}>
      <article className={cx('subject-top')}>
        <SubjectOverview />
      </article>
      <article className={cx('subject-bottom')}>
        <PostCardContainer />
        <div className={cx('pagination-container')}>
          <Pagination />
        </div>
      </article>
    </main>
  );
};

export default Page;
