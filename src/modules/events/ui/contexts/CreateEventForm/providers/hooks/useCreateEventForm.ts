import * as React from 'react';
import { CreateEventForm } from 'modules/events/ui/contexts/CreateEventForm/createEventContext.types';
import { Color } from 'modules/shared/presentation/types/Color';
import { CreateEventContextState } from 'modules/events/ui/contexts/CreateEventForm/createEventContext.state';
import { Colors } from 'modules/shared/presentation/colors/Colors';

type UseCreateEventFormResult = {
  form: CreateEventForm;
  changeFormField<T extends keyof CreateEventForm>(
    field: T,
    fieldValue: CreateEventForm[T],
  ): void;
};

type FieldValueHandlersMap = {
  [Field in keyof CreateEventForm]: (value: CreateEventForm[Field]) => void;
};

const ONE_HOUR_MILLISECONDS = 3600000; // 60 * 60 * 1000

export function useCreateEventForm(): UseCreateEventFormResult {
  const [title, setTitle] = React.useState('');
  const [description, setDescription] = React.useState('');
  const [color, setColor] = React.useState<Color>(Colors.BLUE);
  const [startTime, setStartTime] = React.useState(new Date());
  const [endTime, setEndTime] = React.useState(
    new Date(Date.now() + ONE_HOUR_MILLISECONDS),
  );

  const fieldValueHandlersMap: FieldValueHandlersMap = React.useMemo(
    () => ({
      title: setTitle,
      description: setDescription,
      color: setColor,
      startTime: setStartTime,
      endTime: setEndTime,
    }),
    [],
  );

  return React.useMemo<CreateEventContextState>(
    () => ({
      form: { title, description, color, startTime, endTime },
      changeFormField: (field, value) => {
        fieldValueHandlersMap[field](value);
      },
    }),
    [color, description, endTime, fieldValueHandlersMap, startTime, title],
  );
}
