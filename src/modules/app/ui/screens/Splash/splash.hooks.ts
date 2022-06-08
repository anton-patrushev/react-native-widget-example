import React from 'react';
import { useNavigation } from '@react-navigation/native';

import { useAppNavigationState } from 'modules/app/ui/contexts/AppNavigationState/appNavigationStateContext.hooks';
import { SplashScreenNavigationProp } from 'modules/app/ui/routers/AppRouter/appRouter.types';
import { AppRouterScreens } from 'modules/app/ui/routers/AppRouter/appRouter.screens';

type UseSplashResult = void;

export function useSplash(): UseSplashResult {
  const navigation = useNavigation<SplashScreenNavigationProp>();
  const { signIn, signOut } = useAppNavigationState();

  React.useEffect(() => {
    // TODO: loading authentication data from keychain
    const username = '';

    if (username) {
      // TODO: remove timer
      setTimeout(() => {
        navigation.replace(AppRouterScreens.MAIN);
        signIn();
      }, 1000);
    } else {
      // TODO: remove timer
      setTimeout(() => {
        navigation.replace(AppRouterScreens.SIGN_IN);
        signOut();
      }, 1000);
    }
  });
}
