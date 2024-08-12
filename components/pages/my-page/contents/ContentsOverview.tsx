import React from 'react';
import classNames from 'classnames/bind';
import styles from './ContentsOverview.module.scss';

import ContentBox from '/components/atoms/content-box/ContentBox';

const cx = classNames.bind(styles);

const ContentsOverview = () => {
  return (
    <div className={cx('contents')}>
      <p>나의 콘텐츠</p>
      <div className={cx('content-boxes')}>
        <ContentBox
          title="나의 글"
          subtitle1="나의 질문이 없어요"
          subtitle2="나를 성장시켜줄 새로운 지식을 탐구해보세요"
          buttonText="나의 질문 전체보기"
          buttonLink="/"
          buttonWidth={305}
          buttonSize="lg"
        />
        <ContentBox
          title="나의 답변"
          subtitle1="나의 답변이 없어요"
          subtitle2="나를 성장시켜줄 새로운 지식을 탐구해보세요"
          buttonText="나의 답변 전체보기"
          buttonLink="/"
          buttonWidth={305}
          buttonSize="lg"
        />
        <ContentBox
          title="나의 댓글"
          subtitle1="나의 댓글이 없어요"
          subtitle2="나를 성장시켜줄 새로운 지식을 탐구해보세요"
          buttonText="나의 댓글 전체보기"
          buttonLink="/"
          buttonWidth={305}
          buttonSize="lg"
        />
      </div>
    </div>
  );
};

export default ContentsOverview;
