import React from 'react';
import { useNavigation } from '@react-navigation/native';

import { useAppNavigationState } from 'modules/app/ui/contexts/AppNavigationState/appNavigationStateContext.hooks';
import { SplashScreenNavigationProp } from 'modules/app/ui/routers/AppRouter/appRouter.types';
import { AppRouterScreens } from 'modules/app/ui/routers/AppRouter/appRouter.screens';
import { useInjection } from 'modules/shared/ioc/context/useInjection';
import { IGetIsAuthenticatedUseCase } from 'modules/auth/domain/useCases/GetIsAuthenticatedUseCase/IGetIsAuthenticatedUseCase';
import { AuthModuleSymbols } from 'modules/auth/ioc/symbols';

type UseSplashResult = void;

export function useSplash(): UseSplashResult {
  const navigation = useNavigation<SplashScreenNavigationProp>();
  const { signIn, signOut } = useAppNavigationState();

  const getIsAuthenticatedUseCase = useInjection<IGetIsAuthenticatedUseCase>(
    AuthModuleSymbols.GET_IS_AUTHENTICATED_USE_CASE,
  );

  React.useEffect(() => {
    getIsAuthenticatedUseCase
      .execute()
      .then(() => {
        setTimeout(() => {
          signIn();
        }, 1000);
      })
      .catch(() => {
        setTimeout(() => {
          signOut();
          navigation.push(AppRouterScreens.SIGN_IN);
        }, 1000);
      });
  });
}
