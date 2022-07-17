import React, { useEffect } from 'react';

import { Colors } from 'modules/shared/presentation/colors/Colors';
import { useScreenNavigation } from 'modules/app/ui/contexts/Navigation';
import { ColorPickerScreenNavigation } from 'modules/app/ui/routers/SharedRouter/sharedRouter.types';

type UseColorPickerScreenResult = {
  selectedColor?: Colors;
  selectColor(color: Colors): void;
};

export function useColorPickerScreen(): UseColorPickerScreenResult {
  const { route } = useScreenNavigation<ColorPickerScreenNavigation>();

  const [selectedColor, setSelectedColor] = React.useState(
    route.params.initialColor,
  );

  useEffect(() => {
    route.params.submitColor(selectedColor);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedColor]);

  return {
    selectedColor,
    selectColor: setSelectedColor,
  };
}

// export function useColorPickerNavigationOptions(goBack: () => void) {}
