import React, { Key, useState } from 'react';
import classNames from 'classnames/bind';
import styles from './Contents.module.scss';
import CheckBox from '/components/atoms/check-box/CheckBox';
import { boards } from './boards-mock-data';
import { answers } from './answers-mock-data';
import { comments } from './comments-mock-data';

const cx = classNames.bind(styles);

const Contents = () => {
  const [selectedContents, setSelectedContents] = useState('my-posts');
  const [sortOrder, setSortOrder] = useState('newest');

  const getFilteredData = () => {
    switch (selectedContents) {
      case 'my-posts':
        return boards;
      case 'my-answers':
        return answers;
      case 'my-comments':
        return comments;
      default:
        return [];
    }
  };

  const sortData = (filteredData) => {
    return filteredData.sort((a, b) => {
      switch (sortOrder) {
        case 'newest':
          return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime();
        case 'mostLiked':
          return (b.likes ? b.likes.length : 0) - (a.likes ? a.likes.length : 0);
        case 'mostViewed':
          return (b.views ? b.views : 0) - (a.views ? a.views : 0);
        default:
          return 0;
      }
    });
  };

  const filteredData = sortData(getFilteredData());

  return (
    <div className={cx('container')}>
      <div className={cx('header')}>
        <p>나의 콘텐츠</p>
        <div className={cx('my-contents')}>
          <div className={cx({ selected: selectedContents === 'my-posts' })} onClick={() => setSelectedContents('my-posts')}>
            <span>나의 글</span>
            <span>{boards.length}</span>
          </div>
          <div className={cx({ selected: selectedContents === 'my-answers' })} onClick={() => setSelectedContents('my-answers')}>
            <span>나의 답변</span>
            <span>{answers.length}</span>
          </div>
          <div className={cx({ selected: selectedContents === 'my-comments' })} onClick={() => setSelectedContents('my-comments')}>
            <span>나의 댓글</span>
            <span>{comments.length}</span>
          </div>
        </div>
        <div>
          <div className={cx('actions')}>
            <div className={cx('post-sorter')}>
              <div onClick={() => setSortOrder('newest')}>
                <CheckBox checked={sortOrder === 'newest'} />
                <span>최신순</span>
              </div>
              <div onClick={() => setSortOrder('mostLiked')}>
                <CheckBox checked={sortOrder === 'mostLiked'} />
                <span>추천순</span>
              </div>
              <div onClick={() => setSortOrder('mostViewed')}>
                <CheckBox checked={sortOrder === 'mostViewed'} />
                <span>조회순</span>
              </div>
            </div>
            <button>삭제</button>
          </div>
        </div>
        {filteredData.map((item, index: Key) => (
          <div className={cx('board-list')} key={index}>
            <div className={cx('board-type')}>{item.boardType}</div>
            <div className={cx('board-title-box')}>
              <span>{item.title}</span>
              <CheckBox />
            </div>
            <div className={cx('board-content')}>{item.content}</div>
            <div className={cx('board-footer')}>
              <div>
                <span>공감 {item.likes.length}</span>
                <span>댓글 {item.comments.length}</span>
                <span>조회 {item.views}</span>
              </div>
              <div>
                <span>{item.createdAt} 작성</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Contents;
