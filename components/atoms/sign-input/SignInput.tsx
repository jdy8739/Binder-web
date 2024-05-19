'use client';

import { useId, useState } from 'react';
import classNames from 'classnames/bind';

import Label from '../label/Label';
import { PwHidden, PwVisible } from '/assets/svg';

import style from './SignInput.module.scss';

const cx = classNames.bind(style);

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  className?: string;
  label?: string;
  helperText?: string;
  isError?: boolean;
  isPassword?: boolean;
  denoteRequired?: boolean;
}

const SignInput = ({
  className = '',
  label = '',
  helperText = '',
  isError = false,
  required = false,
  denoteRequired = false,
  isPassword = false,
  ...rest
}: InputProps) => {
  const inputId = useId();

  const [isFocused, setIsFocused] = useState(false);

  const [showInputContent, setShowInputContent] = useState(isPassword);

  return (
    <div className={cx('sign-input', className)}>
      <div className={cx('sign-input-label')}>
        <Label htmlFor={inputId} content={label} />
        {required && denoteRequired && (
          <span className={cx('required')}>*</span>
        )}
        {isPassword && (
          <button
            className={cx('eye-icon', { hidden: showInputContent })}
            type="button"
            onClick={() => setShowInputContent(!showInputContent)}
          >
            {showInputContent ? <PwHidden /> : <PwVisible />}
          </button>
        )}
      </div>
      <div className={cx('sign-input-erea')}>
        <input
          {...rest}
          id={inputId}
          className={cx('sign-input-input', { error: isError })}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          type={showInputContent ? 'password' : rest.type}
          spellCheck={false}
        />
      </div>
      {helperText && (
        <small
          className={cx('sign-input-helper-text', {
            error: isError && !isFocused,
          })}
        >
          {helperText}
        </small>
      )}
    </div>
  );
};

export default SignInput;
