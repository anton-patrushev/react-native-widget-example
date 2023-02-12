import React from 'react';

import { ONE_HOUR_MILLISECONDS } from 'modules/events/ui/contexts/createEventContext.consts';
import {
  CreateEventContext,
  ICreateEventContextValue,
} from 'modules/events/ui/contexts/CreateEventContext';
import { CreateEventForm } from 'modules/events/ui/contexts/createEventContext.types';

import { Colors } from 'modules/shared/presentation/colors/Colors';
import { Color } from 'modules/shared/presentation/types/Color';

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

interface ICreateEventContextProviderProps {
  children: ArrayOrItem<JSX.Element>;
}

export const CreateEventContextProvider: React.FC<
  ICreateEventContextProviderProps
> = (props) => {
  const { form, changeFormField } = useCreateEventForm();

  const contextValue: ICreateEventContextValue = {
    state: { form },
    methods: { changeFormField },
  };

  return (
    <CreateEventContext.Provider value={contextValue}>
      {props.children}
    </CreateEventContext.Provider>
  );
};
