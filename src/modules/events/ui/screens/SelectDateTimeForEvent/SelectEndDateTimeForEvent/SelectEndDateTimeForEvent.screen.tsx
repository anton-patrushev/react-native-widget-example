import * as React from 'react';

import { useCreateEventFormContext } from 'modules/events/ui/contexts/CreateEventForm/hooks/useCreateEventFormContext';
import { SelectDateTime } from 'modules/shared/ui/screens/SelectDateTime/SelectDateTime';

import {
  isAfterForLessThanOneMinute,
  subtractOneMinute,
} from '../selectDateTimeForEvent.utils';

interface SelectEndDateTimeForEventProps {}

export const SelectEndDateTimeForEvent =
  ({}: SelectEndDateTimeForEventProps) => {
    const { form, changeFormField } = useCreateEventFormContext();

    const submitDate = (date: Date) => {
      changeFormField('endTime', date);

      if (!isAfterForLessThanOneMinute(date, form.startTime)) {
        changeFormField('startTime', subtractOneMinute(date));
      }
    };

    return (
      <SelectDateTime submitDate={submitDate} initialDate={form.endTime} />
    );
  };
