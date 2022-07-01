import { createTheme } from '@shopify/restyle';
import { Colors } from 'modules/shared/presentation/colors/Colors';

export const LIGHT_THEME = createTheme({
  breakpoints: {},
  colors: {
    mainBackground: Colors.LIGHT_GRAY,
    mainForeground: Colors.WHITE,

    mainText: Colors.BLACK,

    blue: Colors.BLUE,
  },
  spacing: {},
  textVariants: {
    header: {},
    subheader: {},
    body: {},
  },
});

export type Theme = typeof LIGHT_THEME;

export const DARK_THEME: Theme = createTheme({
  ...LIGHT_THEME,
  colors: {
    ...LIGHT_THEME.colors,
    mainBackground: Colors.BLACK,
    mainForeground: Colors.GRAY,

    mainText: Colors.WHITE,
  },
});
