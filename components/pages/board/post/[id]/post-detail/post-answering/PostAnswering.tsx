'use client';

import classNames from 'classnames/bind';

import ProfileAvatar from '/components/atoms/profile/ProfileAvatar';
import TextEditor from '/components/atoms/text-editor/TextEditor';
import Button from '/components/atoms/button/Button';

import { useState } from 'react';
import style from './PostAnswering.module.scss';
import HashTagInput from '/components/atoms/hashtag-input/HashTagInput';

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
      <div className={cx('card', 'answer')}>
        <HashTagInput tagList={chosenTagList} onChange={setChosenTagList} />
      </div>
    </div>
  );
};

export default PostAnswering;
