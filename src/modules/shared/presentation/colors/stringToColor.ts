import { Color } from 'modules/shared/presentation/types/Color';
import { Colors, ColorsMap } from 'modules/shared/presentation/colors/Colors';

export function stringToColor(str: string): Color {
  return ColorsMap[str as Color] || Colors.BLUE;
}
