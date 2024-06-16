import classNames from 'classnames/bind';

import style from './Input.module.scss';

const cx = classNames.bind(style);

interface Props
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'type'> {
  //
}

const Input = ({ className, ...rest }: Props) => {
  return (
    <span className={cx('input-wrapper', className)}>
      <label className={cx('input-label')}>
        <input className={cx('input-target')} type="text" {...rest} />
      </label>
    </span>
  );
};

export default Input;
