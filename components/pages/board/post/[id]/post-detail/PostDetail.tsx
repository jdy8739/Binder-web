/* eslint-disable react/no-danger */

import classNames from 'classnames/bind';

import Button from '/components/atoms/button/Button';
import { Bookmark, PostThumb, Profile } from '/assets/svg';

import style from './PostDetail.module.scss';

const cx = classNames.bind(style);

const PostDetail = () => {
  return (
    <div className={cx('container')}>
      <article>
        <div>
          <button type="button" className={cx('card', 'back-button')}>
            직무 게시판
          </button>
        </div>
        <div className={cx('card', 'content-wrapper')}>
          <div className={cx('title-area')}>
            <span>게시글 타이틀입니다.</span>
            <button type="button">신고</button>
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
        <div className={cx('card', 'answer')}>
          <div className={cx('answer-left')}>
            <span>게시글의 답변을 달고 뱃지를 휙득해보세요.</span>
          </div>
          <div>
            <Button width={160} height={50}>
              답변하기
            </Button>
          </div>
        </div>
      </article>
    </div>
  );
};

export default PostDetail;
