import React from 'react';

import {
  AppNavigationStateContextValue,
  Internal_AppNavigationStateContext,
} from './AppNavigationStateContext';

export function useAppNavigationState(): AppNavigationStateContextValue {
  return React.useContext(Internal_AppNavigationStateContext);
}

function useIsAuthenticated(): boolean {
  return useAppNavigationState().isAuthenticated;
}

function useSignIn(): () => void {
  return useAppNavigationState().signIn;
}

function useSignOut(): () => void {
  return useAppNavigationState().signOut;
}

export const AppNavigationStateContextHooks = {
  useIsAuthenticated,
  useSignIn,
  useSignOut,
};
