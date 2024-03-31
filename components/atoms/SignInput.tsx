'use client';

import { useId, useState } from 'react';
import classNames from 'classnames/bind';

import Label from './Label';
import { PwHidden, PwVisible } from '/assets/svg';

import styles from './SignInput.module.scss';

const cx = classNames.bind(styles);

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  className?: string;
  label?: string;
  helperText?: string;
  isError?: boolean;
  isPassword?: boolean;
}

const SignInput = ({
  className = '',
  label = '',
  placeholder = '',
  helperText = '',
  isError = false,
  required = false,
  isPassword = false,
  ...props
}: Omit<InputProps, 'type'>) => {
  const inputId = useId();

  const [isFocused, setIsFocused] = useState(false);

  const [isPasswordType, setIsPasswordType] = useState(isPassword);

  return (
    <div className={cx('wrapper')}>
      <div>
        <Label htmlFor={inputId} content={label} />
        {required && <span className={cx('required')}>*</span>}
      </div>
      <div>
        <input
          id={inputId}
          className={cx(className, { error: isError })}
          placeholder={placeholder}
          required={required}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          type={isPasswordType ? 'password' : 'text'}
          spellCheck={false}
          {...props}
        />
        {isPassword && (
          <button
            className={cx({ hidden: isPasswordType })}
            type="button"
            onClick={() => setIsPasswordType(!isPasswordType)}
          >
            {isPasswordType ? <PwHidden /> : <PwVisible />}
          </button>
        )}
      </div>
      {helperText && (
        <small className={cx({ error: isError && !isFocused })}>
          {helperText}
        </small>
      )}
    </div>
  );
};

export default SignInput;
