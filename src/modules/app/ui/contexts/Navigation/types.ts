import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RouteProp } from '@react-navigation/native';

export type ScreenNavigation<
  ParamsList extends Record<string, any>,
  Screen extends string,
> = {
  navigation: NativeStackNavigationProp<ParamsList, Screen>;
  route: RouteProp<ParamsList, Screen>;
};
