import React from 'react';

import { useInjection } from 'modules/shared/ioc/context/useInjection';
import { ILoginUseCase } from 'modules/auth/domain/useCases/LoginUseCase/ILoginUseCase';
import { AuthModuleSymbols } from 'modules/auth/ioc/symbols';

type UseSignInResult = {
  loading: boolean;
  login: string;
  changeLogin(input: string): void;
  password: string;
  changePassword(input: string): void;
  submit(): void;
};

export function useSignIn(): UseSignInResult {
  const [login, setLogin] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [loading, setLoading] = React.useState(false);

  const changeLogin = (input: string) => setLogin(input);
  const changePassword = (input: string) => setPassword(input);

  const loginUseCase = useInjection<ILoginUseCase>(
    AuthModuleSymbols.LOGIN_USE_CASE,
  );

  const submit = async () => {
    setLoading(true);
    try {
      await loginUseCase.execute({ username: login, password });
    } finally {
      setLoading(false);
    }
  };

  return {
    loading,
    login,
    password,
    changeLogin,
    changePassword,
    submit,
  };
}
