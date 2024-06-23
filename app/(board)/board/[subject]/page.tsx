import classNames from 'classnames/bind';

import FieldDetailOverview from '/components/pages/field/[id]/field-detail-overview/FieldDetailOverview';
import PostCardContainer from '/components/pages/field/[id]/post-card-container/PostCardContainer';
import Pagination from '/components/atoms/pagination/Pagination';

import style from './subject.module.scss';

const cx = classNames.bind(style);

const FieldDetailPage = () => {
  return (
    <main className={cx('field-detail-wrapper')}>
      <article className={cx('field-detail-top')}>
        <FieldDetailOverview />
      </article>
      <article className={cx('field-detail-bottom')}>
        <PostCardContainer />
        <div className={cx('pagination-container')}>
          <Pagination />
        </div>
      </article>
    </main>
  );
};

export default FieldDetailPage;
