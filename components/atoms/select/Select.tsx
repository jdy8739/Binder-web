import { Children, ReactElement, useMemo } from 'react';

import classNames from 'classnames/bind';

import style from './Select.module.scss';

const cx = classNames.bind(style);

interface SelectProps {
  children: ReactElement[];
  className?: string;
}

const Select = ({ children, className }: SelectProps) => {
  const filteredOption = useMemo(
    () => Children.map(children, (child) => child.displayName === 'Option'),
    [children],
  );

  return (
    <div className={cx('wrapper', className)}>
      <select>{filteredOption}</select>
    </div>
  );
};

export default Select;
