import classNames from 'classnames/bind';

import Input from '../input/Input';
import { Search } from '/assets/svg';

import style from './SearchInput.module.scss';

const cx = classNames.bind(style);

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  className?: string;
}

const SearchInput = ({ className, ...props }: InputProps) => {
  return (
    <form className={cx('wrapper', className)}>
      <Input
        {...props}
        placeholder="검색어를 입력해주세요"
        spellCheck={false}
      />
      <button className={cx('search-btn')} type="submit">
        <Search />
      </button>
    </form>
  );
};

export default SearchInput;
