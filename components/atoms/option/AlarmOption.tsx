import Link from 'next/link';
import classNames from 'classnames/bind';

import Option, { BasicOption } from './Option';

import style from './AlarmOption.module.scss';

const cx = classNames.bind(style);

interface IAlarmOption extends BasicOption {
  time: number;
  clicked?: boolean;
}

interface AlarmOptionProps {
  className?: string;
  option: IAlarmOption;
}

const AlarmOption = ({ className, option }: AlarmOptionProps) => {
  return (
    <div className={cx('wrapper', { clicked: option.clicked }, className)}>
      <Link href="/#">
        <div className={cx('label')}>
          <Option option={option} />
        </div>
        <span className={cx('time')}>{option.time}</span>
      </Link>
    </div>
  );
};

AlarmOption.displayName = 'Option';

export default AlarmOption;
