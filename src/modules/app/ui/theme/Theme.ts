import { createTheme } from '@shopify/restyle';
import { Colors } from 'modules/shared/presentation/colors/Colors';

export const LIGHT_THEME = createTheme({
  breakpoints: {},
  colors: {
    mainBackground: Colors.LIGHT_GRAY,
    mainForeground: Colors.WHITE,
    secondaryBackground: Colors.DIMMED_WHITE,

    mainText: Colors.BLACK,

    blue: Colors.BLUE,
  },
  spacing: {
    small: 8,
    medium: 16,
    large: 32,
    none: 0,
  },
  borderRadii: {
    common: 10,
  },
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
    defaults: {},
  },
});

export type Theme = typeof LIGHT_THEME;

export const DARK_THEME: Theme = createTheme({
  ...LIGHT_THEME,
  colors: {
    ...LIGHT_THEME.colors,
    mainBackground: Colors.BLACK,
    mainForeground: Colors.GRAY,

    secondaryBackground: Colors.BLEACHED_BLACK,

    mainText: Colors.WHITE,
  },
});
