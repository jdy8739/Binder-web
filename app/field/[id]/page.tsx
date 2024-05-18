import { useMemo } from 'react';

import classNames from 'classnames/bind';

import useServerSidePathname from '../../../business/hooks/useServerSidePathname';

import BorderedButton from '/components/atoms/button/BorderedButton';
import Button from '/components/atoms/button/Button';
import Radio from '/components/atoms/radio/Radio';

import { ProfileBig } from '/assets/svg';

import { FILED_CONST } from '/business/const/index';

import style from './fieldDetail.module.scss';

const cx = classNames.bind(style);

const FiledDetailTop = () => {
  const { lastPathnameString } = useServerSidePathname();

  const currentField = useMemo(
    () =>
      FILED_CONST.find((field) => field.value === lastPathnameString)?.label ||
      lastPathnameString,
    [lastPathnameString],
  );

  return (
    <article className={cx('field-detail-top')}>
      <figure>
        <div className={cx('field-detail-top-title')}>
          <span>&apos;{currentField}&apos;</span>
          <span>필드 태그 검색결과</span>
        </div>
      </figure>
      <figure>
        <div className={cx('field-detail-top-categories')}>
          <BorderedButton content="직무 게시판" chosen />
          <BorderedButton content="학술 게시판" />
          <BorderedButton content="취직이직 게시판" />
        </div>
      </figure>
      <figure>
        <div className={cx('field-detail-top-profile')}>
          <div className={cx('profile')}>
            <div>
              <div className={cx('profile-pic')}>
                <ProfileBig />
              </div>
              <div className={cx('status-ball')} />
            </div>
            <div>
              <span>닉네임</span>
              <span>뱃지 이름</span>
            </div>
            <div>
              <span>직무</span>
              <span>대학원생</span>
            </div>
          </div>
          <div className={cx('tags')}>
            <span>#태그</span>
            <span>#태그</span>
          </div>
        </div>
      </figure>
      <figure>
        <div className={cx('field-detail-top-total-count')}>
          <span>직무게시판</span>
          <span>1,999</span>
          <span>건</span>
        </div>
      </figure>
      <figure>
        <div className={cx('field-detail-top-lower')}>
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
            <Button content="게시글 작성" size="sm" />
          </div>
        </div>
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
