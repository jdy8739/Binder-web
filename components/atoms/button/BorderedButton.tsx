import classNames from 'classnames/bind';

import styles from './BorderedButton.module.scss';

const cx = classNames.bind(styles);

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  content: string;
  chosen?: boolean;
}

const BorderedButton = ({
  className,
  content,
  chosen = false,
  ...rest
}: ButtonProps) => {
  return (
    // eslint-disable-next-line react/button-has-type
    <button className={cx('button-wrapper', { chosen }, className)} {...rest}>
      {content}
    </button>
  );
};

export default BorderedButton;
