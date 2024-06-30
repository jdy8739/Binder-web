/* eslint-disable no-restricted-syntax */

'use client';

import classNames from 'classnames/bind';
import { useMemo } from 'react';

import { usePathname, useSearchParams } from 'next/navigation';

import BorderedButton from '/components/atoms/button/BorderedButton';

import style from './SubjectButtons.module.scss';

const cx = classNames.bind(style);

const SUBJECT = 'subject';

const SubjectButtons = () => {
  const pathname = usePathname();

  const queryParams = useSearchParams();

  const { basicButtonLink, currentSubject } = useMemo(() => {
    const queryStringArray: string[] = [];

    let currentSubject = '';

    for (const [key, value] of queryParams.entries()) {
      if (key !== SUBJECT) {
        queryStringArray.push(`${key}=${value}`);
      } else {
        currentSubject = value;
      }
    }

    const queryString = `?${queryStringArray.join('&')}`;

    return {
      basicButtonLink: `${pathname}${queryString}`,
      currentSubject,
    };
  }, [pathname, queryParams]);

  return (
    <figure>
      <div className={cx('subject-buttons-wrapper')}>
        <BorderedButton
          content="직무 게시판"
          chosen={currentSubject.endsWith('dept')}
          link={`${basicButtonLink}&${SUBJECT}=dept`}
        />
        <BorderedButton
          content="학술 게시판"
          chosen={currentSubject.endsWith('arts')}
          link={`${basicButtonLink}&${SUBJECT}=arts`}
        />
        <BorderedButton
          content="취직이직 게시판"
          chosen={currentSubject.endsWith('jobs')}
          link={`${basicButtonLink}&${SUBJECT}=jobs`}
        />
      </div>
    </figure>
  );
};

export default SubjectButtons;
