'use client';

import classNames from 'classnames/bind';

import { addModal } from '/business/helper/modalUtils';

import Input from '/components/atoms/input/Input';
import InterestModal from '/components/common/modal/interest-modal/InterestModal';
import { ChipClose } from '/assets/svg';

import style from './HashTagInput.module.scss';

const cx = classNames.bind(style);

type Props = {
  className?: string;
  tagList: string[];
  onChange?: (tagList: string[] | ((tagList: string[]) => string[])) => void;
};

const HashTagInput = ({ className, tagList, onChange }: Props) => {
  return (
    <div className={cx('hashtag-input-wrapper', className)}>
      <Input
        className={cx('hashtag-input')}
        placeholder={`${tagList.length === 0 ? '#태그를 선택하세요(최대3개)' : ''}`}
        onClick={async () => {
          const newChosenList = await addModal({
            component: InterestModal,
            props: { chosenTagList: [...tagList] },
          });

          onChange?.(newChosenList as string[]);
        }}
      />
      <div className={cx('hashtag-input-chips')}>
        {tagList.map((tag) => (
          <span key={tag} className={cx('tag-chip')}>
            {tag}
            <button
              type="button"
              onClick={() =>
                onChange?.((current) => current.filter((el) => el !== tag))
              }
            >
              <ChipClose />
            </button>
          </span>
        ))}
      </div>
    </div>
  );
};

export default HashTagInput;
