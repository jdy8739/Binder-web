import classNames from 'classnames/bind';

import Button from '../../components/atoms/button/Button';
import SignInput from '../../components/atoms/sign-input/SignInput';

import style from './Resetpw.module.scss';

const cx = classNames.bind(style);

const ResetPw = () => {
  return (
    <main className={cx('main')}>
      <div>
        <div>비밀번호 재설정</div>
        <div>
          서비스 이용을 위해
          <br />
          회원님의 비밀번호를 재설정해주세요.
        </div>
      </div>
      <form>
        <SignInput
          label="비밀번호"
          placeholder="특수문자 포함 8~15"
          required
          isPassword
        />
        <SignInput
          label="비밀번호 확인"
          placeholder="특수문자 포함 8~15"
          required
          isPassword
        />
        <Button content="확인" disabled />
      </form>
    </main>
  );
};

export default ResetPw;
