import classNames from 'classnames/bind';

import style from './fieldDetail.module.scss';

const cx = classNames.bind(style);

const FiledDetailTop = () => {
  return (
    <article className={cx('filed-detail-top')}>
      <figure>
        <div>암생물학 필드 태그 검색결과</div>
      </figure>
      <figure>
        <div>buttons</div>
      </figure>
      <figure>
        <div>직무게시판 1,999건</div>
      </figure>
      <figure>
        <div>게시글 작성</div>
      </figure>
    </article>
  );
};

const FiledDetailBottom = () => {
  return (
    <article className={cx('filed-detail-bottom')}>
      <div />
    </article>
  );
};

const FiledDetailPage = () => {
  return (
    <main className={cx('filed-detail-wrapper')}>
      <FiledDetailTop />
      <FiledDetailBottom />
    </main>
  );
};

export default FiledDetailPage;
