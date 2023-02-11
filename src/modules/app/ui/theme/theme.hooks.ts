import { useTheme as useRestyleTheme } from '@shopify/restyle';

import { Theme } from './Theme';

export const useTheme = () => useRestyleTheme<Theme>();
