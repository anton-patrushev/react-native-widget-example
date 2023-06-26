import * as React from 'react';

import { CreateEventForm } from './createEventContext.types';

export type CreateEventContextState = {
  form: CreateEventForm;
  changeFormField<T extends keyof CreateEventForm>(
    field: T,
    fieldValue: CreateEventForm[T],
  ): void;
};

const defaultCreateEventContextState = null;

export const CreateEventContext =
  React.createContext<CreateEventContextState | null>(
    defaultCreateEventContextState,
  );
