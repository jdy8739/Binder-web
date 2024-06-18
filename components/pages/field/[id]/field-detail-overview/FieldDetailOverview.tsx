import { useMemo } from 'react';

import classNames from 'classnames/bind';

import useServerSidePathname from '/business/hooks/useServerSidePathname';

import ProfileBar from './profile-bar/ProfileBar';
import Categories from './categories/Categories';
import Button from '/components/atoms/button/Button';
import Radio from '/components/atoms/radio/Radio';

import { FILED_CONST } from '/business/const/index';

import style from './FiledDetailOverview.module.scss';

const cx = classNames.bind(style);

const FieldDetailOverview = () => {
  const { lastPathnameString } = useServerSidePathname();

  const currentField = useMemo(
    () =>
      FILED_CONST.find((field) => field.value === lastPathnameString)?.label ||
      lastPathnameString,
    [lastPathnameString],
  );

  return (
    <>
      <ProfileBar />
      <figure>
        <div className={cx('title')}>
          <span>&apos;{currentField}&apos;</span>
          <span>필드 태그 검색결과</span>
        </div>
      </figure>
      <Categories />
      <figure>
        <div className={cx('total-count')}>
          <span>직무게시판</span>
          <span>1,999</span>
          <span>건</span>
        </div>
      </figure>
      <figure>
        <div className={cx('filter-radio')}>
          <div>
            <span className={cx('radio')}>
              <Radio name="filter" defaultChecked />
              <span>최신순</span>
            </span>
            <span className={cx('radio')}>
              <Radio name="filter" />
              <span>추천순</span>
            </span>
            <span className={cx('radio')}>
              <Radio name="filter" />
              <span>조회수</span>
            </span>
          </div>
          <div>
            <Button link="/board/create" content="게시글 작성" size="sm" />
          </div>
        </div>
      </figure>
    </>
  );
};

export default FieldDetailOverview;
