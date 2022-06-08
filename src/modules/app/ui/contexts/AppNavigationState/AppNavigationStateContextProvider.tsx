import React from 'react';

import {
  AppNavigationStateContextValue,
  Internal_AppNavigationStateContext,
} from './AppNavigationStateContext';

interface IAppNavigationStateContextProviderProps {
  children: JSX.Element;
}

export const AppNavigationStateContextProvider = (
  props: IAppNavigationStateContextProviderProps,
) => {
  const [isAuthenticated, setIsAuthenticated] = React.useState(false);

  const signIn = () => setIsAuthenticated(true);
  const signOut = () => setIsAuthenticated(false);

  const contextValue: AppNavigationStateContextValue = {
    isAuthenticated,
    signIn,
    signOut,
  };

  return (
    <Internal_AppNavigationStateContext.Provider
      {...props}
      value={contextValue}
    />
  );
};
