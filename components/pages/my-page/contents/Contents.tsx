import React, { useState } from 'react'
import classNames from 'classnames/bind';
import styles from './Contents.module.scss';
import { boards } from './mock-data';
import CheckBox from '/components/atoms/check-box/CheckBox';
const cx = classNames.bind(styles);


const Contents = () => {
    const [selectedContents, setSelectedContents] = useState('my-posts')

  return (
    <div className={cx('container')}>
        <div className={cx('header')}>
            <p>
              나의 콘텐츠
            </p>
            <div className={cx('my-contents')}>
                <div className={cx({selected: selectedContents === 'my-posts'})} onClick={() => setSelectedContents('my-posts')}>
                    <span>나의 글</span>
                    <span>{boards.length}</span>
                </div>
                <div className={cx({selected: selectedContents === 'my-answers'})} onClick={() => setSelectedContents('my-answers')}>
                    <span>나의 답변</span>
                    <span>{boards.length}</span>
                </div>
                <div className={cx({selected: selectedContents === 'my-comments'})} onClick={() => {setSelectedContents('my-comments')}}>
                    <span>나의 댓글</span>
                    <span>{boards.length}</span>
                </div>
            </div>
            <div>
                <div className={cx('actions')}>
                    <div className={cx('post-sorter')}>
                        <div>
                            <CheckBox /> 
                            <span>최신순</span>
                        </div>
                        <div>
                            <CheckBox /> 
                            <span>추천순</span>
                        </div>
                        <div>
                            <CheckBox /> 
                            <span>조회순</span>
                        </div>
                    </div>
                    <button>삭제</button>
                </div>
            </div>
            {boards.map((board) => (
            <div className={cx('board-list')}>
                <div>{board.boardType}</div>
                <div>
                    <span>{board.title}</span>
                    <CheckBox />
                </div>
                <div>{board.content}</div>
                <div>
                    <div>
                        <span>공감 {board.likes.length}</span>
                        <span>댓글 {board.commnets.length}</span>
                        <span>조회 {board.views}</span>
                    </div>
                    <div>
                        <span>{board.createdAt} 작성</span>
                    </div>
                </div>
            </div>
            ))}
        </div>
    </div>
  )
}

export default Contents