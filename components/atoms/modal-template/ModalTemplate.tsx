import { ReactElement } from 'react';
import classNames from 'classnames/bind';

import style from './ModalTemplate.module.scss';

const cx = classNames.bind(style);

type Props = {
  className?: string;
  children: ReactElement;
  header?: ReactElement;
  footer?: ReactElement;
};

const ModalTemplate = ({ className, children, header, footer }: Props) => {
  return (
    <div className={cx('modal-template-wrapper', className)}>
      {header && <div className={cx('modal-template-header')}>{header}</div>}
      {children}
      {footer && <div className={cx('modal-template-footer')}>{footer}</div>}
    </div>
  );
};

export default ModalTemplate;
