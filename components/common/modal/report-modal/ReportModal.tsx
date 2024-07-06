import classNames from 'classnames/bind';

import { ModalTerminators } from '../../modal';

import ModalTemplate from '/components/atoms/modal-template/ModalTemplate';

import style from './RepostModal.module.scss';

const cx = classNames.bind(style);

type Props = {
  //
} & ModalTerminators;

const ReportModal = ({ resolveModal, closeModal }: Props) => {
  return (
    <ModalTemplate className={cx('report-modal')}>
      <div>
        <div className={cx('header')}>
          <span>
            게시글 신고를 완료하려면 <br /> {`'신고'버튼을 눌러주세요.`}
          </span>
        </div>
        <div className={cx('bottom-button')}>
          <button type="button" onClick={closeModal}>
            취소
          </button>
          <button type="button" onClick={resolveModal}>
            신고
          </button>
        </div>
      </div>
    </ModalTemplate>
  );
};

export default ReportModal;
