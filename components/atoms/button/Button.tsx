import classNames from 'classnames/bind';

import styles from './Button.module.scss';

const cx = classNames.bind(styles);

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  content: string;
  className?: string;
  size?: 'lg' | 'sm';
}

const Button = ({ className, content, size = 'lg', ...rest }: ButtonProps) => {
  return (
    // eslint-disable-next-line react/button-has-type
    <button className={cx('button-wrapper', size, className)} {...rest}>
      {content}
    </button>
  );
};

export default Button;
