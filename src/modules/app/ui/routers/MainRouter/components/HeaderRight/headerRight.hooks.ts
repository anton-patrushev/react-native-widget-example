import {
  CompositeNavigationProp,
  useNavigation,
} from '@react-navigation/native';
import { MainRouterScreens } from 'modules/app/ui/routers/MainRouter/mainRouter.screens';
import { SharedRouterScreens } from 'modules/app/ui/routers/SharedRouter/sharedRouter.screens';
import { SharedRouterNavigationProp } from 'modules/app/ui/routers/SharedRouter/sharedRouter.types';
import { BottomTabNavigationProp } from 'modules/app/ui/routers/MainRouter/mainRouter.types';

type UseHeaderRightResult = {
  openCreateEvent(): void;
};

type HeaderRightNavigationProp = CompositeNavigationProp<
  BottomTabNavigationProp,
  SharedRouterNavigationProp
>;

export function useHeaderRight(): UseHeaderRightResult {
  const navigation = useNavigation<HeaderRightNavigationProp>();

  const openCreateEvent = () => {
    navigation.push(MainRouterScreens.SHARED, {
      screen: SharedRouterScreens.CREATE_EVENT,
    });
  };

  return { openCreateEvent };
}
