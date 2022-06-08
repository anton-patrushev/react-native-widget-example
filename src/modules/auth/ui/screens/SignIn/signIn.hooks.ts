import React from 'react';

type UseSignInResult = {
  login: string;
  changeLogin(input: string): void;
  password: string;
  changePassword(input: string): void;
  submit(): void;
};

export function useSignIn(): UseSignInResult {
  const [login, setLogin] = React.useState('');
  const [password, setPassword] = React.useState('');

  const changeLogin = (input: string) => setLogin(input);
  const changePassword = (input: string) => setPassword(input);

  const submit = () => {
    // LOGIN USER
  };

  return {
    login,
    password,
    changeLogin,
    changePassword,
    submit,
  };
}
