import classNames from 'classnames/bind';

import style from './Option.module.scss';

const cx = classNames.bind(style);

interface BasicOption {
  value: number | string;
  label: number | string;
}

interface OptionProps {
  className?: string;
  option: BasicOption;
}

const Option = ({ className, option }: OptionProps) => {
  return (
    <div className={cx('wrapper', className)}>
      <span className={cx('label')}>{option.label}</span>
    </div>
  );
};

Option.displayName = 'Option';

export default Option;
export type { BasicOption, OptionProps };
