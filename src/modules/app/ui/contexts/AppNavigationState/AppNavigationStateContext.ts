import React from 'react';

const appNavigationStateContextDefaultValue = {
  isAuthenticated: false,
  signIn: () => {},
  signOut: () => {},
};

export type AppNavigationStateContextValue =
  typeof appNavigationStateContextDefaultValue;

export const Internal_AppNavigationStateContext = React.createContext(
  appNavigationStateContextDefaultValue,
);
