'use client';

import classNames from 'classnames/bind';
import { useState } from 'react';

import HashTagInput from '/components/atoms/hashtag-input/HashTagInput';
import ProfileAvatar from '/components/atoms/profile/ProfileAvatar';
import TextEditor from '/components/atoms/text-editor/TextEditor';
import Dropdown from '/components/atoms/dropdown/Dropdown';
import Button from '/components/atoms/button/Button';
import Option from '/components/atoms/option/Option';

import style from './PostAnswering.module.scss';

const cx = classNames.bind(style);

const PostAnswering = () => {
  const [chosenTagList, setChosenTagList] = useState<string[]>([]);

  return (
    <div>
      <div className={cx('card', 'answer')}>
        <div>
          <ProfileAvatar size="md" afterNickname="님, 답변해주세요." />
        </div>
        <div>
          <Button width={160} height={50}>
            답변 등록
          </Button>
        </div>
      </div>
      <div>
        <TextEditor
          className={cx('answer-editor')}
          placeholder={`답변을 작성해주세요. \n답변 작성 시 서비스 운영정책을 지켜주세요.`}
        />
      </div>
      <div className={cx('card', 'bottom')}>
        <div>
          <HashTagInput
            className={cx('answer-hashtag')}
            tagList={chosenTagList}
            onChange={setChosenTagList}
          />
        </div>
        <div>
          <div>
            <span>공개설정</span>
          </div>
          <div>
            <span>닉네임</span>
            <span>
              <Dropdown
                trigger={<span className={cx('privacy-settings')}>공개</span>}
                optionComponent={Option}
                optionList={[
                  { label: '공개', value: '공개' },
                  { label: '비공개', value: '비공개' },
                ]}
                height={112}
              />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostAnswering;
