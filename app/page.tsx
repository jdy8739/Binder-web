import SignInput from '../components/atoms/SignInput';

const Footer = () => {
  return <footer>BINDER. All Rights Reserved</footer>;
};

const Page = () => {
  return (
    <>
      <h1>main</h1>
      <Footer />
      <SignInput label="가가가" isPassword helperText="sds" />
    </>
  );
};

export default Page;
