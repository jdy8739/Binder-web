import { ReactElement } from 'react';

import classNames from 'classnames/bind';

import style from './Option.module.scss';

const cx = classNames.bind(style);

interface OptionProps extends React.OptionHTMLAttributes<HTMLOptionElement> {
  children: ReactElement;
  className?: string;
}

const Option = ({ children, className, value }: OptionProps) => {
  return (
    <div className={cx('wrapper', className)}>
      <option value={value}>{children}</option>
    </div>
  );
};

Option.displayName = 'Option';

export default Option;
