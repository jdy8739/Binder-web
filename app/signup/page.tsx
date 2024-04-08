'use client';

import classNames from 'classnames/bind';
import { useCallback, useState } from 'react';

import Button from '/components/atoms/Button';
import SignInput from '/components/atoms/SignInput';
import Radio from '/components/atoms/Radio';
import CheckBox from '/components/atoms/CheckBox';

import style from './signup.module.scss';

const cx = classNames.bind(style);

const SignUpPage = () => {
  const nameForRadio = 'period';

  const [isCheckedAll, setIsCheckedAll] = useState(false);

  const handleOnTermCheckBoxClick = useCallback((checked: boolean) => {
    if (!checked) setIsCheckedAll(false);
  }, []);

  return (
    <main className={cx('main')}>
      <div>
        <div>회원가입</div>
      </div>
      <form>
        <SignInput
          label="이메일"
          placeholder="email@gamil.com"
          required
          denoteRequired
        />
        <SignInput
          className={cx('sign-input')}
          label="비밀번호"
          placeholder="특수문자 포함 8~15"
          required
          denoteRequired
          isPassword
        />
        <SignInput
          className={cx('sign-input')}
          label="이름"
          placeholder="본명을 입력해주세요."
          required
          denoteRequired
        />
        <SignInput
          className={cx('sign-input')}
          label="닉네임"
          placeholder="닉네임을 입력해주세요."
          required
          denoteRequired
        />
        <Button
          className={cx('get-auth-btn')}
          content="인증번호 받기"
          disabled
        />
        <section>
          <div>이용 약관</div>
          <div className={cx('terms-of-use')}>
            <div>
              <CheckBox
                checkAll
                checkedAll={isCheckedAll}
                onClick={() => setIsCheckedAll(!isCheckedAll)}
              />
              <span>전체동의</span>
            </div>
            <div>
              <small>
                위치기반 서비스 이용약관(선택), 마케팅 정보 수신 동의(이메일,
                SMS/MMS) 동의를 포함합니다.
              </small>
            </div>
            <div className={cx('check-list-box')}>
              <ul>
                <li>
                  <CheckBox
                    checkedAll={isCheckedAll}
                    handleOnClick={handleOnTermCheckBoxClick}
                  />
                  <span>(필수) 개인회원 약관에 동의</span>
                </li>
                <li>
                  <CheckBox
                    checkedAll={isCheckedAll}
                    handleOnClick={handleOnTermCheckBoxClick}
                  />
                  <span>(필수) 개인정보 수집 및 이용에 동의</span>
                </li>
                <li>
                  <CheckBox
                    checkedAll={isCheckedAll}
                    handleOnClick={handleOnTermCheckBoxClick}
                  />
                  <span>(선택) 마케팅 정보 수신 동의 - 이메일</span>
                </li>
                <li>
                  <CheckBox
                    checkedAll={isCheckedAll}
                    handleOnClick={handleOnTermCheckBoxClick}
                  />
                  <span>(선택) 마케팅 정보 수신 동의 - SMS/MMS</span>
                </li>
              </ul>
            </div>
          </div>
          <div className={cx('private-data-storage')}>
            <div>개인정보 보관기간</div>
            <small>
              선택하신 개인정보 보관 기간 동안 바인더의 서비스를 이용하지 않으실
              경우, 개인정보가 파기됩니다. 파기에 대한 상세 내용은 개인정보 처리
              방침을 확인해주세요.
            </small>
            <div>
              <ul className={cx('period-list-box')}>
                <li>
                  <Radio name={nameForRadio} />
                  <span>탈퇴시</span>
                </li>
                <li>
                  <Radio name={nameForRadio} />
                  <span>1년</span>
                </li>
                <li>
                  <Radio name={nameForRadio} />
                  <span>3년</span>
                </li>
                <li>
                  <Radio name={nameForRadio} />
                  <span>5년</span>
                </li>
              </ul>
            </div>
          </div>
        </section>
        <Button content="회원가입 완료" type="submit" disabled />
      </form>
    </main>
  );
};

export default SignUpPage;
