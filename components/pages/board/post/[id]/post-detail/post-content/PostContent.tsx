'use client';

/* eslint-disable react/no-danger */
import classNames from 'classnames/bind';

import { addModal } from '/business/helper/modalUtils';

import ReportModal from '/components/common/modal/report-modal/ReportModal';
import { Bookmark, PostThumb, Profile } from '/assets/svg';

import style from './PostContent.module.scss';

const cx = classNames.bind(style);

const PostContent = () => {
  return (
    <>
      <div>
        <button type="button" className={cx('card', 'back-button')}>
          직무 게시판
        </button>
      </div>
      <div className={cx('card', 'content-wrapper')}>
        <div className={cx('title-area')}>
          <span>게시글 타이틀입니다.</span>
          <button
            type="button"
            onClick={() => addModal({ component: ReportModal })}
          >
            신고
          </button>
        </div>
        <div className={cx('subject')}>
          <span>직무 게시판</span>
        </div>
        <div
          className={cx('content-area')}
          dangerouslySetInnerHTML={{ __html: '<div>content</div>' }}
        />
        <div className={cx('tags-area')}>
          <span>#태그</span>
          <span>#태그</span>
        </div>
        <div className={cx('content-bottom')}>
          <div className={cx('post-info')}>
            <span>
              <Profile />
            </span>
            <span>닉네임</span>
            <span>34 분 전</span>
            <span>조회수 13</span>
          </div>
          <div className={cx('post-buttons')}>
            <button type="button">
              <PostThumb />
              <span>공감하기</span>
            </button>
            <button type="button">
              <Bookmark />
              <span>북마크</span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default PostContent;
