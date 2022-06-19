import { Color } from 'modules/shared/presentation/types/Color';
import React from 'react';
import { Colors } from 'modules/shared/presentation/colors/Colors';
import { ONE_HOUR_MILLISECONDS } from 'modules/events/ui/screens/CreateEvent/createEvent.consts';
import { useCreateEventPresenter } from 'modules/events/presentation/presenters/CreateEventPresenter';
import { CreateEventInput } from 'modules/events/presentation/inputs/CreateEventInput';

type CreateEventForm = {
  title: string;
  description: string;
  color: Color;
  startTime: Date;
  endTime: Date;
};

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

function useCreateEventForm(): UseCreateEventFormResult {
  const [title, setTitle] = React.useState('');
  const [description, setDescription] = React.useState('');
  const [color, setColor] = React.useState<Color>(Colors.BLUE);
  const [startTime, setStartTime] = React.useState(new Date());
  const [endTime, setEndTime] = React.useState(
    new Date(Date.now() + ONE_HOUR_MILLISECONDS),
  );

  const fieldValueHandlersMap: FieldValueHandlersMap = {
    title: setTitle,
    description: setDescription,
    color: setColor,
    startTime: setStartTime,
    endTime: setEndTime,
  };

  return {
    form: { title, description, color, startTime, endTime },
    changeFormField: (field, value) => {
      fieldValueHandlersMap[field](value);
    },
  };
}

type UseCreateEventScreenResult = {
  inProgress: boolean;
  form: UseCreateEventFormResult['form'];
  createEvent(): void;
  produceChangeFormField<T extends keyof CreateEventForm>(
    field: T,
  ): (fieldValue: CreateEventForm[T]) => void;
};

export function useCreateEventScreen(): UseCreateEventScreenResult {
  const { createEvent: presenterCreateEvent } = useCreateEventPresenter();
  const { form, changeFormField } = useCreateEventForm();
  const [creating, setCreating] = React.useState(false);

  const createEvent = async () => {
    try {
      setCreating(true);

      await presenterCreateEvent(
        new CreateEventInput(
          form.title,
          form.description,
          form.color,
          form.startTime,
          form.endTime,
        ),
      );
    } catch {
    } finally {
      setCreating(false);
    }
  };

  return {
    inProgress: creating,
    form,
    createEvent,
    produceChangeFormField: (field) => {
      return (value) => changeFormField(field, value);
    },
  };
}
