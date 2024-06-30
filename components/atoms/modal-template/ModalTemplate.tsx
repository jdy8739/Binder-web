import { ReactElement, useCallback, useEffect, useRef, useState } from 'react';
import classNames from 'classnames/bind';

import { popModal } from '/business/helper/modalUtils';

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

  const handleOnDimClick = useCallback(() => {
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

  return (
    <div
      className={cx('modal-template-wrapper', 'dim', modalState, className)}
      onClick={handleOnDimClick}
    >
      <article className={cx('modal-template-inner')}>
        {header && <div className={cx('modal-template-header')}>{header}</div>}
        {children}
        {footer && <div className={cx('modal-template-footer')}>{footer}</div>}
      </article>
    </div>
  );
};

export default ModalTemplate;
