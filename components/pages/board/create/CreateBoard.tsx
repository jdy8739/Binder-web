'use client';

import classNames from 'classnames/bind';

import Input from '/components/atoms/input/Input';
import Dropdown from '/components/atoms/dropdown/Dropdown';
import Option from '/components/atoms/option/Option';

import { NavDown } from '/assets/svg';

import style from './CreateBoard.module.scss';
import Button from '/components/atoms/button/Button';

const cx = classNames.bind(style);

const CreateBoard = () => {
  return (
    <main className={cx('create-board')}>
      <form>
        <div>
          <div className={cx('create-board-header')}>
            <span>카테고리</span>
            <span>직무게시판</span>
            <span>
              <Dropdown
                className={cx('options-dropdown')}
                trigger={<NavDown />}
                optionComponent={Option}
                optionList={[
                  { value: '직무 게시판', label: '직무 게시판' },
                  { value: '학술 게시판', label: '학술 게시판' },
                  { value: '취직이직 게시판', label: '취직이직 게시판' },
                ]}
                height={168}
                rotateTrigger
              />
            </span>
          </div>
          <div className={cx('create-board-title')}>
            <Input
              className={cx('create-input')}
              placeholder="제목을 입력해주세요."
            />
          </div>
        </div>

        <div className={cx('content-input')}>{null}</div>

        <div className={cx('hashtag-input')}>
          <div>
            <span className={cx('hashtag-input-title')}>#해시태그 입력</span>
          </div>
          <div>
            <Input
              className={cx('create-input', 'hashtag')}
              placeholder="#태그를 선택하세요(최대3개)"
            />
          </div>
        </div>

        <div className={cx('create-button')}>
          <Button className={cx('button-gray')} content="취소" size="sm" />
          <Button content="게시글 등록" />
        </div>
      </form>
    </main>
  );
};

export default CreateBoard;
