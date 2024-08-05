import React, { useState } from 'react'
import classNames from 'classnames/bind';
import styles from './Contents.module.scss';
import { boards } from './mock-data'; 
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
        </div>
    </div>
  )
}

export default Contents