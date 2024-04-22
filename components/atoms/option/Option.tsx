import { ReactElement } from 'react';

import classNames from 'classnames/bind';

import style from './Option.module.scss';

const cx = classNames.bind(style);

interface OptionProps {
  children: ReactElement;
  className?: string;
}

const Option = ({ children, className }: OptionProps) => {
  return (
    <div className={cx('wrapper', className)}>
      <div>{children}</div>
    </div>
  );
};

Option.displayName = 'Option';

export default Option;
