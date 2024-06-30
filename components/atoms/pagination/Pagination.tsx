'use client';

import classNames from 'classnames/bind';
import { useState } from 'react';

import style from './Pagination.module.scss';

const cx = classNames.bind(style);

type PaginationProps = {
  start?: number;
  end?: number;
  length?: number;
};

const Pagination = ({ start, end, length = 10 }: PaginationProps) => {
  const [currentPage, setCurrentPage] = useState(1);

  return (
    <div className={cx('pagination-wrapper')}>
      <button type="button">이전</button>
      {Array.from({ length }, (_, index) => (
        <button
          type="button"
          key={index}
          className={cx('page-number', { clicekd: index + 1 === currentPage })}
          onClick={() => setCurrentPage(index + 1)}
        >
          {index + 1}
        </button>
      ))}
      <button type="button">다음</button>
    </div>
  );
};

export default Pagination;
