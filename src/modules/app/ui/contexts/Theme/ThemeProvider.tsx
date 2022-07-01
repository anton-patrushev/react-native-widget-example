import React from 'react';
import { ThemeProvider as ReStyleThemeProvider } from '@shopify/restyle';
import { LIGHT_THEME } from 'modules/shared/presentation/colors/Theme';

interface ThemeProviderProps {
  children: React.ReactNode;
}

export const ThemeProvider: React.FC<ThemeProviderProps> = (props) => {
  const theme = LIGHT_THEME;

  return <ReStyleThemeProvider theme={theme} {...props} />;
};
