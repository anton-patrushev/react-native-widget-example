import { useCreateEventFormContext } from 'modules/events/ui/contexts/CreateEventForm/hooks/useCreateEventFormContext';
import { Colors } from 'modules/shared/presentation/colors/Colors';
import { ColorPicker } from 'modules/shared/ui/screens/ColorPicker/ColorPicker';
import * as React from 'react';

interface SelectColorForEventProps {}

export const SelectColorForEvent = ({}: SelectColorForEventProps) => {
  const { form, changeFormField } = useCreateEventFormContext();

  const submitColor = (color: Colors) => {
    changeFormField('color', color);
  };

  return <ColorPicker selectColor={submitColor} selectedColor={form.color} />;
};
