'use client';

import classNames from 'classnames/bind';

import { usePathname } from 'next/navigation';

import BorderedButton from '/components/atoms/button/BorderedButton';

import style from './SubjectButtons.module.scss';

const cx = classNames.bind(style);

const SubjectButtons = () => {
  const pathname = usePathname();

  return (
    <figure>
      <div className={cx('subject-buttons-wrapper')}>
        <BorderedButton
          content="직무 게시판"
          chosen={pathname.endsWith('dept')}
          link="/board/dept"
        />
        <BorderedButton
          content="학술 게시판"
          chosen={pathname.endsWith('arts')}
          link="/board/arts"
        />
        <BorderedButton
          content="취직이직 게시판"
          chosen={pathname.endsWith('jobs')}
          link="/board/jobs"
        />
      </div>
    </figure>
  );
};

export default SubjectButtons;
