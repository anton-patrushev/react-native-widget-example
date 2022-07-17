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
    h1: {
      fontSize: 21,
    },
    h2: {
      fontSize: 17,
    },
    h3: {
      fontSize: 14,
    },
    body: {},
    caption1: {},
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
