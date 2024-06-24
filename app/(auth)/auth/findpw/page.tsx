'use client';

import classNames from 'classnames/bind';

import Button from '../../../../components/atoms/button/Button';
import SignInput from '../../../../components/atoms/sign-input/SignInput';

import style from './Findpw.module.scss';

const cx = classNames.bind(style);

const Page = () => {
  return (
    <main className={cx('main')}>
      <div>
        <div>비밀번호 찾기</div>
        <div>
          비밀번호 재설정을 위해
          <br />
          이름과 이메일 입력이 필요해요.
        </div>
      </div>
      <form className={cx('auth-get-form')}>
        <SignInput label="이름" required />
        <SignInput label="이메일" required />
        <Button content="인증번호 받기" />
      </form>
      <form className={cx('auth-send-form')}>
        <SignInput label="인증번호" type="number" required />
        <Button content="확인" disabled />
      </form>
    </main>
  );
};

export default Page;
