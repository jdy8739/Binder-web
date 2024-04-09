import classNames from 'classnames/bind';

import SignInput from './SignInput';

import style from './AuthNumberInput.module.scss';

const cx = classNames.bind(style);

const AuthNumberInput = () => {
  return (
    <div>
      <SignInput />
      <span>3:00</span>
    </div>
  );
};

export default AuthNumberInput;
