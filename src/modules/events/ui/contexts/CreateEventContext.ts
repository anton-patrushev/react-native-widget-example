import React from 'react';

import { CreateEventForm } from 'modules/events/ui/contexts/createEventContext.types';

type CreateEventContextMethods = {
  changeFormField<T extends keyof CreateEventForm>(
    field: T,
    fieldValue: CreateEventForm[T],
  ): void;
};

type CreateEventContextState = {
  form: CreateEventForm;
};

export interface ICreateEventContextValue {
  state: CreateEventContextState;
  methods: CreateEventContextMethods;
}

export const CreateEventContext = React.createContext<ICreateEventContextValue | null>(
  null,
);
