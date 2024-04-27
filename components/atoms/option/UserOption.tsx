import Link from 'next/link';
import classNames from 'classnames/bind';

import Option, { BasicOption } from './Option';

import style from './UserOption.module.scss';

const cx = classNames.bind(style);

interface UserOptionProps {
  className?: string;
  option: BasicOption;
}

const UserOption = ({ className, option }: UserOptionProps) => {
  return (
    <div className={cx('wrapper', className)}>
      <Link href="/#">
        <div className={cx('label')}>
          <Option option={option} />
        </div>
      </Link>
    </div>
  );
};

UserOption.displayName = 'Option';

export default UserOption;
