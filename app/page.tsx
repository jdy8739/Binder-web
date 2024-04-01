import SignInput from '../components/atoms/SignInput';
import Button from '/components/atoms/Button';

const Page = () => {
  return (
    <>
      <h1>main</h1>
      <SignInput label="가가가" isPassword helperText="sds" required />
      <Button content="나나나" />
      <Button content="나나나" disabled />
    </>
  );
};

export default Page;
