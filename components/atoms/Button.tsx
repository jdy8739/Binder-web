import classNames from 'classnames/bind';

import styles from './Button.module.scss';

const cx = classNames.bind(styles);

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  content: string;
  className?: string;
}

const Button = ({
  className,
  content,
  disabled,
  type,
  onClick,
}: ButtonProps) => {
  return (
    <button
      className={cx('button', className)}
      disabled={disabled}
      // eslint-disable-next-line react/button-has-type
      type={type}
      onClick={onClick}
    >
      {content}
    </button>
  );
};

export default Button;
