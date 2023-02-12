import React from 'react';

import {
  CreateEventContext,
  ICreateEventContextValue,
} from 'modules/events/ui/contexts/CreateEventContext';
import { CreateEventForm } from 'modules/events/ui/contexts/createEventContext.types';

export function useCreateEventContext(): ICreateEventContextValue {
  const createEventContextValue = React.useContext(CreateEventContext);

  if (!createEventContextValue) {
    throw new Error(
      "`CreateEventContext` was not initialized. Make sure you try to access it's value inside of `CreateEventContextProvider`",
    );
  }

  return createEventContextValue;
}

export function useCreateEventContextForm(): CreateEventForm {
  return useCreateEventContext().state.form;
}

export function useCreateEventContextChangeFieldMethod() {
  return useCreateEventContext().methods.changeFormField;
}
