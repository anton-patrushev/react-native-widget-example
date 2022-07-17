import { Colors } from 'modules/shared/presentation/colors/Colors';
import { ColorPickerDictionary } from 'modules/shared/ui/screens/ColorPicker/colorPicker.dictionary';

export const COLORS_OPTIONS = [
  { value: Colors.BLUE, name: ColorPickerDictionary.COLORS[Colors.BLUE] },
  { value: Colors.BLACK, name: ColorPickerDictionary.COLORS[Colors.BLACK] },
  { value: Colors.GRAY, name: ColorPickerDictionary.COLORS[Colors.GRAY] },
  {
    value: Colors.LIGHT_GRAY,
    name: ColorPickerDictionary.COLORS[Colors.LIGHT_GRAY],
  },
  { value: Colors.WHITE, name: ColorPickerDictionary.COLORS[Colors.WHITE] },
  { value: Colors.YELLOW, name: ColorPickerDictionary.COLORS[Colors.YELLOW] },
  { value: Colors.RED, name: ColorPickerDictionary.COLORS[Colors.RED] },
  { value: Colors.PURPLE, name: ColorPickerDictionary.COLORS[Colors.PURPLE] },
  { value: Colors.GREEN, name: ColorPickerDictionary.COLORS[Colors.GREEN] },
];
