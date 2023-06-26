import { CreateEventContext } from 'modules/events/ui/contexts/CreateEventForm/createEventContext.state';
import * as React from 'react';

export function useCreateEventFormContext() {
  const context = React.useContext(CreateEventContext);

  if (!context) {
    throw new Error(
      '`CreateEventContext` was not initialized. Make sure you accessing context inside provider consumers',
    );
  }

  return context;
}
