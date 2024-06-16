'use client';

import classNames from 'classnames/bind';

import Input from '/components/atoms/input/Input';
import Dropdown from '/components/atoms/dropdown/Dropdown';
import Option from '/components/atoms/option/Option';

import { NavDown } from '/assets/svg';

import style from './CreateBoard.module.scss';

const cx = classNames.bind(style);

const CreateBoard = () => {
  return (
    <div className={cx('create-board')}>
      <div>
        <div className={cx('create-board-title')}>
          <span>카테고리</span>
          <span>직무게시판</span>
          <span>
            <Dropdown
              trigger={<NavDown />}
              optionComponent={Option}
              optionList={[
                { value: 1, label: '나의 콘텐츠' },
                { value: 2, label: '스크랩 보기' },
                { value: 3, label: '개인정보 수정' },
              ]}
              height={300}
              rotateTrigger
            />
          </span>
        </div>
        <Input
          className={cx('create-input', 'title-input')}
          placeholder="제목을 입력해주세요."
        />
      </div>

      {/* <div className={cx('content-input-area')}>textarea</div>

      <div className={cx('hashtag-input-area')}>
        <div>
          <span>#해시태그 입력</span>
        </div>
        <div>
          <Input className={cx('create-input', 'tag-input')} />
        </div>
      </div> */}
    </div>
  );
};

export default CreateBoard;
