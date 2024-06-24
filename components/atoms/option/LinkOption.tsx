import Link from 'next/link';
import classNames from 'classnames/bind';

import Option, { BasicOption } from './Option';

import style from './LinkOption.module.scss';

const cx = classNames.bind(style);

type LinkOptionType = BasicOption & { link: string };

interface LinkOptionProps {
  className?: string;
  option: LinkOptionType;
}

const LinkOption = ({ className, option }: LinkOptionProps) => {
  return (
    <div className={cx('link-option-wrapper', className)}>
      <Link href={option.link || '/'}>
        <div className={cx('link-option-label')}>
          <Option option={option} />
        </div>
      </Link>
    </div>
  );
};

LinkOption.displayName = 'Option';

export default LinkOption;
export type { LinkOptionType };
