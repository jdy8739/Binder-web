import classNames from 'classnames/bind';
import { useCallback, useState } from 'react';
import { ModalTerminators } from '../../modal';

import ModalTemplate from '/components/atoms/modal-template/ModalTemplate';

import Button from '/components/atoms/button/Button';
import { Close } from '/assets/svg';

import style from './InterestModal.module.scss';

const cx = classNames.bind(style);

type Props = {
  chosenTagList: string[];
} & ModalTerminators;

const TEST_BUTTONS = [
  '#태그11111111111',
  '#태그222',
  '#태그333333',
  '#태그44444',
  '#태그555',
  '#태그6666666',
  '#태그77',
  '#태그8888',
  '#태그99999',
  '#태그00',
];

const InterestModal = ({ chosenTagList, resolveModal, closeModal }: Props) => {
  const [currentChosenList, setChosenTagList] =
    useState<string[]>(chosenTagList);

  const toggleTagButton = useCallback((tag: string) => {
    setChosenTagList((current) => {
      if (current.some((el) => el === tag)) {
        return current.filter((el) => el !== tag);
      }

      const currentClone = [...current];

      currentClone.push(tag);

      return currentClone;
    });
  }, []);

  const handleOnConfirmClick = useCallback(() => {
    if (currentChosenList.length <= 3) {
      resolveModal(currentChosenList);
    }
  }, [currentChosenList, resolveModal]);

  return (
    <ModalTemplate className={cx('interest-modal')}>
      <div className={cx('modal-wrapper')}>
        <div className={cx('close-button-division')}>
          <span>
            <button type="button" onClick={closeModal}>
              <Close />
            </button>
          </span>
        </div>
        <div className={cx('title-container')}>
          <h2>관심 태그를 선택해 주세요.</h2>
          <p>최대 3개까지 선택하실 수 있습니다.</p>
        </div>
        <div className={cx('button-container')}>
          {TEST_BUTTONS.map((value) => (
            <span key={value}>
              <button
                className={cx({ chosen: currentChosenList.includes(value) })}
                type="button"
                onClick={() => toggleTagButton(value)}
              >
                {value}
              </button>
            </span>
          ))}
        </div>
        <div className={cx('confirm-button-division')}>
          <Button
            content="확인"
            onClick={handleOnConfirmClick}
            disabled={currentChosenList.length > 3}
          />
        </div>
      </div>
    </ModalTemplate>
  );
};

export default InterestModal;
