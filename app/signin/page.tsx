import Link from 'next/link';
import classNames from 'classnames/bind';

import Button from '/components/atoms/Button';
import SignInput from '/components/atoms/SignInput';
import { Google, Kakao, Naver } from '/assets/svg';

import style from './signin.module.scss';

const cx = classNames.bind(style);

const SignInPage = () => {
  return (
    <main className={cx('main')}>
      <div className={cx('title')}>
        <div>바인더</div>
        <div>
          <span>Bio</span>
          <span>Industry</span>
        </div>
      </div>
      <form>
        <SignInput label="이메일" helperText="" required />
        <SignInput label="비밀번호" helperText="" required isPassword />
        <Button content="로그인" />
      </form>
      <div>
        <Link href="/signup">회원가입</Link>
        <Link href="/findpw">비밀번호 찾기</Link>
      </div>
      <section>
        <div>소셜 계정으로 간편 로그인</div>
        <div>
          <button type="button">
            <Google />
          </button>
          <button type="button">
            <Kakao />
          </button>
          <button type="button">
            <Naver />
          </button>
        </div>
      </section>
    </main>
  );
};

export default SignInPage;
