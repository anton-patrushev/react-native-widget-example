import { ActionSheetIOS } from 'react-native';

import { useInjection } from 'modules/shared/ioc/context/useInjection';
import { ISignOutUseCase } from 'modules/auth/domain/useCases/SignOutUseCase/ISignOutUseCase';
import { AuthModuleSymbols } from 'modules/auth/ioc/symbols';
import { AppNavigationStateContextHooks } from 'modules/app/ui/contexts/AppNavigationState';

type UseHeaderLeftResult = {
  openSignOutPrompt(): void;
};

export function useHeaderLeft(): UseHeaderLeftResult {
  const signOut = AppNavigationStateContextHooks.useSignOut();

  const signOutUseCase = useInjection<ISignOutUseCase>(
    AuthModuleSymbols.SIGN_OUT_USE_CASE,
  );

  const openSignOutPrompt = () => {
    ActionSheetIOS.showActionSheetWithOptions(
      {
        options: ['Sign Out', 'Cancel'],
        cancelButtonIndex: 1,
        destructiveButtonIndex: 0,
      },
      async (index) => {
        if (index === 0) {
          try {
            await signOutUseCase.execute();
          } catch {}
          signOut();
          // navigation.replace(AppRouterScreens.SIGN_IN);
        }
      },
    );
  };

  return { openSignOutPrompt };
}
