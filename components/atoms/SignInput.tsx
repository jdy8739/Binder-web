'use client';

import { useId, useState } from 'react';

import classNames from 'classnames/bind';

import styles from './SignInput.module.scss';

const cx = classNames.bind(styles);

const SignInput = ({
  classname = '',
  label = '',
  placeholder = '',
  helperText = '',
  isError = false,
  required = false,
  isPassword = false,
}: {
  classname?: string;
  label?: string;
  placeholder?: string;
  helperText?: string;
  isError?: boolean;
  required?: boolean;
  isPassword?: boolean;
}) => {
  const inputId = useId();

  const [isFocused, setIsFocused] = useState(false);

  const [isPasswordType, setIsPasswordType] = useState(isPassword);

  return (
    <div className={cx('wrapper')}>
      <label htmlFor={inputId}>{label}</label>
      <input
        id={inputId}
        className={cx(classname, { error: isError })}
        placeholder={placeholder}
        required={required}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        type={isPasswordType ? 'password' : 'input'}
        spellCheck={false}
      />
      <small className={cx({ error: isError && !isFocused })}>
        {helperText}
      </small>
      {isPassword && (
        <button
          type="button"
          onClick={() => setIsPasswordType(!isPasswordType)}
        >
          {isPasswordType ? 'eye' : 'slash'}
        </button>
      )}
    </div>
  );
};

export default SignInput;
