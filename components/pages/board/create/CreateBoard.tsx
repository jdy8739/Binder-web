'use client';

import { useState } from 'react';
import classNames from 'classnames/bind';

import { addModal } from '../../../../business/helper/modalUtils';

import Input from '/components/atoms/input/Input';
import Dropdown from '/components/atoms/dropdown/Dropdown';
import Option from '/components/atoms/option/Option';
import Button from '/components/atoms/button/Button';
import TextEditor from '/components/atoms/text-editor/TextEditor';
import InterestModal from '/components/common/modal/interest-modal/InterestModal';

import { ChipClose, NavDown } from '/assets/svg';

import style from './CreateBoard.module.scss';

const cx = classNames.bind(style);

type BoardType = 'jobs' | 'academic' | 'career';

const BOARD_OPTIONS: { value: BoardType; label: string }[] = [
  { value: 'jobs', label: '직무게시판' },
  { value: 'academic', label: '학술게시판' },
  { value: 'career', label: '취직이직게시판' },
] as const;

const CreateBoard = () => {
  const [boardType, setBoardType] = useState<BoardType>('jobs');

  const [chosenTagList, setChosenTagList] = useState<string[]>([]);

  return (
    <main className={cx('create-board')}>
      <form>
        <div>
          <div className={cx('create-board-header')}>
            <span>카테고리</span>
            <span>
              {
                BOARD_OPTIONS.find((option) => option.value === boardType)
                  ?.label
              }
            </span>
            <span>
              <Dropdown
                className={cx('options-dropdown')}
                value={boardType}
                trigger={<NavDown />}
                optionComponent={Option}
                optionList={BOARD_OPTIONS}
                height={168}
                rotateTrigger
                onChange={(value) => setBoardType(value as BoardType)}
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

        <div className={cx('content-editor')}>
          <TextEditor maxLength={3000} />
        </div>

        <div className={cx('hashtag-input')}>
          <div>
            <span className={cx('hashtag-input-title')}>#해시태그 입력</span>
          </div>
          <div className={cx('hashtag-input-body')}>
            <Input
              className={cx('create-input', 'hashtag')}
              placeholder={`${chosenTagList.length === 0 ? '#태그를 선택하세요(최대3개)' : ''}`}
              onClick={async () => {
                const newChosenList = await addModal({
                  component: InterestModal,
                  props: { chosenTagList: [...chosenTagList] },
                });

                setChosenTagList(newChosenList as string[]);
              }}
            />
            <div className={cx('hashtag-input-chips')}>
              {chosenTagList.map((tag) => (
                <span key={tag} className={cx('tag-chip')}>
                  {tag}
                  <button
                    type="button"
                    onClick={() =>
                      setChosenTagList((current) =>
                        current.filter((el) => el !== tag),
                      )
                    }
                  >
                    <ChipClose />
                  </button>
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className={cx('create-button')}>
          <Button
            className={cx('button-gray')}
            link="/"
            content="취소"
            size="sm"
            type="button"
            width={160}
            height={66}
          />
          <Button content="게시글 등록" width={240} height={66} />
        </div>
      </form>
    </main>
  );
};

export default CreateBoard;
