import { useNavigation, useRoute } from '@react-navigation/native';

import type { ScreenNavigation } from 'modules/app/ui/contexts/Navigation/types';

export function useScreenNavigation<
  T extends ScreenNavigation<Record<string, any>, string>,
>(): T {
  const navigation = useNavigation<T['navigation']>();
  const route = useRoute<T['route']>();

  return { navigation, route } as T;
}
