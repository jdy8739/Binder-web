import classNames from 'classnames/bind';

import styles from './Button.module.scss';

const cx = classNames.bind(styles);

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  content: string;
  className?: string;
}

const Button = ({ className, content, ...props }: ButtonProps) => {
  return (
    // eslint-disable-next-line react/button-has-type
    <button className={cx('button', className)} {...props}>
      {content}
    </button>
  );
};

export default Button;
