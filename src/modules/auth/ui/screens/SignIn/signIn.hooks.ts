import React from 'react';

import { useInjection } from 'modules/shared/ioc/context/useInjection';
import { ILoginUseCase } from 'modules/auth/domain/useCases/LoginUseCase/ILoginUseCase';
import { AuthModuleSymbols } from 'modules/auth/ioc/symbols';
import { Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { SignInScreenNavigationProp } from 'modules/app/ui/routers/AppRouter/appRouter.types';
import { AppRouterScreens } from 'modules/app/ui/routers/AppRouter/appRouter.screens';

type UseSignInResult = {
  loading: boolean;
  login: string;
  changeLogin(input: string): void;
  password: string;
  changePassword(input: string): void;
  submit(): void;
  isSubmitEnabled: boolean;
};

export function useSignIn(): UseSignInResult {
  const navigation = useNavigation<SignInScreenNavigationProp>();

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
      navigation.replace(AppRouterScreens.MAIN);
    } catch (e) {
      if (e instanceof Error) {
        Alert.alert('Authentication failed', e.message);
      }
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
    isSubmitEnabled: Boolean(login.length) && Boolean(password.length),
  };
}
