import React from 'react'
import classNames from 'classnames/bind';
import styles from './ScrapLikes.module.scss'
const cx = classNames.bind(styles);
import ContentBox from '/components/atoms/content-box/ContentBox'

const ScrapLikes = () => {
  return (
    <div className={cx('scrap-likes')}>
      <p>스크랩/좋아요</p>
      <div className={cx('scrap-like-boxes')}>
          <ContentBox
                  title="스크랩"
                  subtitle1="스크랩한 글이 없어요"
                  subtitle2="원하는 콘텐츠를 저장해보세요"
                  buttonText="스크랩 전체보기"
                  buttonLink="/"
                  buttonWidth={305}
                  buttonSize="lg"
          />
          <ContentBox
                  title="좋아요"
                  subtitle1="좋아요한 없어요"
                  subtitle2="원하는 콘텐츠를 저장해보세요"
                  buttonText="좋아요 전체보기"
                  buttonLink="/"
                  buttonWidth={305}
                  buttonSize="lg"
          />
          <div style={{ display: 'none' }}></div>
      </div>
    </div>
  )
}

export default ScrapLikes