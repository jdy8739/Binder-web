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
  chosen?: boolean;
}

const Option = ({ className, option, chosen }: OptionProps) => {
  return (
    <div className={cx('option-wrapper', className, { chosen })}>
      <span className={cx('option-label')} data-option-value={option.value}>
        {option.label}
      </span>
    </div>
  );
};

Option.displayName = 'Option';

export default Option;
export type { BasicOption, OptionProps };
