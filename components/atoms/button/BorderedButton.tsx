'use client';

import classNames from 'classnames/bind';

import { useRouter } from 'next/navigation';

import styles from './BorderedButton.module.scss';

const cx = classNames.bind(styles);

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  content: string;
  link?: string;
  chosen?: boolean;
}

const BorderedButton = ({
  className,
  content,
  chosen = false,
  link,
  onClick,
  ...rest
}: ButtonProps) => {
  const router = useRouter();

  return (
    // eslint-disable-next-line react/button-has-type
    <button
      className={cx('button-wrapper', { chosen }, className)}
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

export default BorderedButton;
