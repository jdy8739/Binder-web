import classNames from 'classnames/bind';
import { ModalTerminators } from '../../modal';

import ModalTemplate from '/components/atoms/modal-template/ModalTemplate';

import Button from '/components/atoms/button/Button';

import style from './InterestModal.module.scss';

const cx = classNames.bind(style);

type Props = {
  test: number;
} & ModalTerminators;

const InterestModal = ({ test, resolveModal, closeModal }: Props) => {
  return (
    <ModalTemplate className={cx('interest-modal')}>
      <div>
        <div>
          <h2>관심 태그를 선택해 주세요.</h2>
          <p>최대 3개까지 선택하실 수 있습니다.</p>
        </div>
        <div>
          <Button content="확인" onClick={() => resolveModal('11')} />
        </div>
      </div>
    </ModalTemplate>
  );
};

export default InterestModal;
