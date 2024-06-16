import classNames from 'classnames/bind';

import Input from '/components/atoms/input/Input';

import style from './WriteContainer.module.scss';

const cx = classNames.bind(style);

const WriteContainer = () => {
  return (
    <div className={cx('write-container')}>
      <div className={cx('title-input-area')}>
        <div>
          <span>카테고리</span>
          <span>직무게시판</span>
        </div>
        <Input placeholder="제목을 입력해주세요" />
      </div>

      <div className={cx('content-input-area')}>textarea</div>

      <div className={cx('hashtag-input-area')}>
        <div>
          <span>#해시태그 입력</span>
        </div>
        <div>
          <Input />
        </div>
      </div>
    </div>
  );
};

export default WriteContainer;
