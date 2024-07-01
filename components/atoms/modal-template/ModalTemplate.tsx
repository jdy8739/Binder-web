/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */

import { ReactElement, useCallback, useEffect, useRef, useState } from 'react';
import classNames from 'classnames/bind';

import { popModal, storeCloseFunction } from '/business/helper/modalUtils';

import style from './ModalTemplate.module.scss';

const cx = classNames.bind(style);

type Props = {
  className?: string;
  children: ReactElement;
  header?: ReactElement;
  footer?: ReactElement;
};

const ModalTemplate = ({ className, children, header, footer }: Props) => {
  const timeoutIDRef = useRef<NodeJS.Timeout | null>(null);

  const [modalState, setModalState] = useState<'opened' | 'hanged' | 'closing'>(
    'opened',
  );

  const closeModal = useCallback(() => {
    if (!timeoutIDRef.current) {
      setModalState('closing');

      timeoutIDRef.current = setTimeout(() => {
        popModal();
      }, 275);
    }
  }, []);

  useEffect(() => {
    timeoutIDRef.current = setTimeout(() => {
      setModalState('hanged');
      timeoutIDRef.current = null;
    }, 300);
  }, []);

  useEffect(() => {
    storeCloseFunction(closeModal);
  }, [closeModal]);

  return (
    <div
      className={cx('modal-template-wrapper', 'dim', modalState, className)}
      onClick={closeModal}
    >
      <article
        className={cx('modal-template-inner')}
        onClick={(e) => e.stopPropagation()}
      >
        {header && <div className={cx('modal-template-header')}>{header}</div>}
        {children}
        {footer && <div className={cx('modal-template-footer')}>{footer}</div>}
      </article>
    </div>
  );
};

export default ModalTemplate;
