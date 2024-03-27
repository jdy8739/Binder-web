import { useId } from 'react';

const SignInput = ({
  label,
  required = false,
}: {
  label?: string;
  required?: boolean;
}) => {
  const inputId = useId();

  return (
    <>
      <label htmlFor={inputId}>{label}</label>
      <input id={inputId} required={required} />
    </>
  );
};

export default SignInput;
