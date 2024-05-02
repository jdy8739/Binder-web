import Link from 'next/link';
import classNames from 'classnames/bind';

import Option, { BasicOption } from './Option';

import style from './LinkOption.module.scss';

const cx = classNames.bind(style);

interface LinkOptionProps {
  className?: string;
  option: BasicOption;
}

const LinkOption = ({ className, option }: LinkOptionProps) => {
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

LinkOption.displayName = 'Option';

export default LinkOption;
