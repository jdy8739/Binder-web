import classNames from 'classnames/bind';

import Input from '../input/Input';
import { Search } from '/assets/svg';

import style from './SearchInput.module.scss';

const cx = classNames.bind(style);

interface Props
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'type'> {
  //
}

const SearchInput = ({ className, ...rest }: Props) => {
  return (
    <form className={cx('search-input-wrapper', className)}>
      <Input
        {...rest}
        className={cx('search-input')}
        placeholder="검색어를 입력해주세요"
        spellCheck={false}
      />
      <button className={cx('search-input-btn')} type="submit">
        <Search />
      </button>
    </form>
  );
};

export default SearchInput;
