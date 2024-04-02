import SignInput from '../components/atoms/SignInput';
import Button from '/components/atoms/Button';
import CheckBox from '/components/atoms/CheckBox';
import Radio from '/components/atoms/Radio';

const Page = () => {
  return (
    <>
      <h1>main</h1>
      <SignInput label="가가가" isPassword helperText="sds" required />
      <Button content="나나나" />
      <Button content="나나나" disabled />
      <CheckBox />
      <Radio name="hi" />
      <Radio name="hi" />
      <Radio name="hi" />
      <Radio name="hi" />
    </>
  );
};

export default Page;
