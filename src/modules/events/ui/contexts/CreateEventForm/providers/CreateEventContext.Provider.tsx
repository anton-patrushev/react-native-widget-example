import * as React from 'react';

import { CreateEventContext } from 'modules/events/ui/contexts/CreateEventForm/createEventContext.state';

import { useCreateEventForm } from './hooks/useCreateEventForm';

interface CreateEventContextProviderProps extends WithChildProps {}

export const CreateEventContextProvider = ({
  children,
}: CreateEventContextProviderProps) => {
  const createEventState = useCreateEventForm();

  return (
    <CreateEventContext.Provider value={createEventState}>
      {children}
    </CreateEventContext.Provider>
  );
};
