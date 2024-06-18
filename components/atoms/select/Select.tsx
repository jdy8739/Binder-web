import { Children, ReactElement, useMemo } from 'react';

import classNames from 'classnames/bind';

import style from './Select.module.scss';

const cx = classNames.bind(style);

interface SelectProps {
  children: ReactElement[];
  className?: string;
}

const Select = ({ children, className }: SelectProps) => {
  const validOptionElements = useMemo(
    () =>
      Children.map(children, (child) => child)
        .filter(
          (child) =>
            typeof child.type !== 'string' &&
            (child.type as { displayName?: string }).displayName === 'Option',
        )
        .map((child) => (
          <div key={child.key} className={cx('option-item', 'white-bg')}>
            {child}
          </div>
        )),
    [children],
  );

  return (
    <div className={cx('select-wrapper', className)}>
      <div className={cx('select-content')}>{validOptionElements}</div>
    </div>
  );
};

export default Select;
