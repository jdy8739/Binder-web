'use client';

import React, { useEffect, useState } from 'react';
import classNames from 'classnames/bind';

import { Check } from '/assets/svg';

import style from './CheckBox.module.scss';

const cx = classNames.bind(style);

interface CheckBoxProps extends React.InputHTMLAttributes<HTMLInputElement> {
  className?: string;
  checkAll?: boolean;
  checkedAll?: boolean;
  handleOnClick?: (checked: boolean) => void;
}

const CheckBox = ({
  className = '',
  checkAll = false,
  checkedAll = false,
  checked,
  onClick,
  handleOnClick,
  ...props
}: CheckBoxProps) => {
  const [isChecked, setIsChecked] = useState(checked);

  useEffect(() => {
    if (checkedAll) setIsChecked(true);
    if (checkAll && !checkedAll) setIsChecked(false);
  }, [checkAll, checkedAll]);

  return (
    <span className={cx('wrapper', { checked: isChecked })}>
      <input
        {...props}
        className={cx(className)}
        type="checkbox"
        onClick={(e: React.MouseEvent<HTMLInputElement>) => {
          onClick?.(e);
          handleOnClick?.(!isChecked);
          setIsChecked(!isChecked);
        }}
      />
      <span className={cx({ checked: isChecked })}>
        {isChecked && <Check />}
      </span>
    </span>
  );
};

export default CheckBox;
