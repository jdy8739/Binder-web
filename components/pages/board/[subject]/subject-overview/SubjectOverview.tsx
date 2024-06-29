import { useMemo } from 'react';

import classNames from 'classnames/bind';

import useServerSideSearchParams from '/business/hook/useServerSideSearchParams';
import useServerSidePathname from '/business/hook/useServerSidePathname';

import ProfileBar from './profile-bar/ProfileBar';
import SubjectButtons from './subject-buttons/SubjectButtons';
import Button from '/components/atoms/button/Button';
import Radio from '/components/atoms/radio/Radio';

import { FILED_CONST } from '/business/const/field-const';

import style from './SubjectOverview.module.scss';

const cx = classNames.bind(style);

const SUBJECT_CONST = {
  dept: '직무',
  arts: '학술',
  jobs: '취업이직',
} as const;

const SubjectOverview = () => {
  const { lastPathnameString = '' } = useServerSidePathname();

  const {
    searchParams: { category, subject },
  } = useServerSideSearchParams<{ category: string; subject: string }>();

  const { currentField, currentSubject } = useMemo(
    () => ({
      currentField:
        FILED_CONST.find((field) => field.value === category)?.label ||
        category,
      currentSubject: SUBJECT_CONST[subject],
    }),
    [category, subject],
  );

  return (
    <>
      {lastPathnameString === 'field' ? (
        <>
          <figure>
            <div className={cx('title')}>
              <span>&apos;{currentField}&apos;</span>
              <span>필드 태그 검색결과</span>
            </div>
          </figure>
          <SubjectButtons />
        </>
      ) : (
        <ProfileBar />
      )}
      {lastPathnameString === 'field' && currentSubject && (
        <figure>
          <div className={cx('total-count')}>
            <span>{`${currentSubject}게시판`}</span>
            <span>1,999</span>
            <span>건</span>
          </div>
        </figure>
      )}
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

export default SubjectOverview;
