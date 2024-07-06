'use client';

import { ReactNode } from 'react';

import classNames from 'classnames/bind';

import { useRouter } from 'next/navigation';

import styles from './Button.module.scss';

const cx = classNames.bind(styles);

interface BasicProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  link?: string;
  size?: 'lg' | 'sm';
  width?: number;
  height?: number;
}

interface ChildrenProps extends BasicProps {
  children: ReactNode;
  content?: never;
}

interface ContentProps extends BasicProps {
  children?: never;
  content: React.ButtonHTMLAttributes<HTMLButtonElement>['content'];
}

type ButtonProps = ChildrenProps | ContentProps;

const Button = ({
  className,
  children,
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

        if (link) {
          router.push(link);
        }
      }}
      {...rest}
    >
      {content || children}
    </button>
  );
};

export default Button;
