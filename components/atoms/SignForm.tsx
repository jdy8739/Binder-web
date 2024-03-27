import { ReactNode } from 'react';

const SignForm = ({ children }: { children: ReactNode }) => {
  return <form>{children}</form>;
};

export default SignForm;
