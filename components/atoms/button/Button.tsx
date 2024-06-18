'use client';

import classNames from 'classnames/bind';

import { useRouter } from 'next/navigation';

import styles from './Button.module.scss';

const cx = classNames.bind(styles);

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  link?: string;
  size?: 'lg' | 'sm';
}

const Button = ({
  className,
  content,
  link,
  size = 'lg',
  onClick,
  ...rest
}: ButtonProps) => {
  const router = useRouter();

  return (
    // eslint-disable-next-line react/button-has-type
    <button
      className={cx('button-wrapper', size, className)}
      onClick={(e) => {
        onClick?.(e);
        if (link) router.push(link);
      }}
      {...rest}
    >
      {content}
    </button>
  );
};

export default Button;
