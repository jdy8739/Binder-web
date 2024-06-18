'use client';

import classNames from 'classnames/bind';

import { usePathname, useSearchParams } from 'next/navigation';

import BorderedButton from '/components/atoms/button/BorderedButton';

import style from './Categories.module.scss';

const cx = classNames.bind(style);

const Categories = () => {
  const pathname = usePathname();

  const searchParams = useSearchParams();

  const currentCategory = searchParams.get('category');

  return (
    <figure>
      <div className={cx('categories')}>
        <BorderedButton
          content="직무 게시판"
          chosen={currentCategory === 'dept'}
          link={`${pathname}?category=dept`}
        />
        <BorderedButton
          content="학술 게시판"
          chosen={currentCategory === 'arts'}
          link={`${pathname}?category=arts`}
        />
        <BorderedButton
          content="취직이직 게시판"
          chosen={currentCategory === 'jobs'}
          link={`${pathname}?category=jobs`}
        />
      </div>
    </figure>
  );
};

export default Categories;
