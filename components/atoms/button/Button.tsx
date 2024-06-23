'use client';

import classNames from 'classnames/bind';

import { useRouter } from 'next/navigation';

import styles from './Button.module.scss';

const cx = classNames.bind(styles);

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  link?: string;
  size?: 'lg' | 'sm';
  width?: number;
  height?: number;
}

const Button = ({
  className,
  content,
  link,
  size = 'lg',
  width,
  height,
  onClick,
  ...rest
}: ButtonProps) => {
  const router = useRouter();

  return (
    // eslint-disable-next-line react/button-has-type
    <button
      style={{ width: `${width}px`, height: `${height}px` }}
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
