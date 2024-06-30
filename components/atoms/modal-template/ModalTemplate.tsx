import { ReactElement } from 'react';
import classNames from 'classnames/bind';

import style from './ModalTemplate.module.scss';
import { popModal } from '/business/helper/modalUtils';

const cx = classNames.bind(style);

type Props = {
  className?: string;
  children: ReactElement;
  header?: ReactElement;
  footer?: ReactElement;
};

const ModalTemplate = ({ className, children, header, footer }: Props) => {
  return (
    <div
      className={cx('modal-template-wrapper', 'dim', className)}
      onClick={popModal}
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
