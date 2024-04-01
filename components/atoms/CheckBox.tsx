'use client';

import React, { useState } from 'react';
import classNames from 'classnames/bind';

import { Check } from '/assets/svg';
import style from './CheckBox.module.scss';

const cx = classNames.bind(style);

interface CheckBoxProps extends React.InputHTMLAttributes<HTMLInputElement> {
  className?: string;
}

const CheckBox = ({ className, ...props }: CheckBoxProps) => {
  const [checked, setChecked] = useState(false);
  return (
    <span className={cx('wrapper', { checked })}>
      <input
        {...props}
        className={cx(className)}
        type="checkbox"
        onClick={(e: React.MouseEvent<HTMLInputElement>) => {
          // eslint-disable-next-line @typescript-eslint/no-unused-expressions
          props.onClick && props.onClick(e);
          setChecked(!checked);
        }}
      />
      <span className={cx({ checked })}>{checked && <Check />}</span>
    </span>
  );
};

export default CheckBox;
