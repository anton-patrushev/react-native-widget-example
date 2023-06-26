import * as React from 'react';

import { useCreateEventFormContext } from 'modules/events/ui/contexts/CreateEventForm/hooks/useCreateEventFormContext';
import { SelectDateTime } from 'modules/shared/ui/screens/SelectDateTime/SelectDateTime';

import {
  addOneMinute,
  isBeforeForMoreThanOneMinute,
} from '../selectDateTimeForEvent.utils';

interface SelectStartDateTimeForEventProps {}

export const SelectStartDateTimeForEvent =
  ({}: SelectStartDateTimeForEventProps) => {
    const { form, changeFormField } = useCreateEventFormContext();

    const submitDate = (date: Date) => {
      changeFormField('startTime', date);

      if (!isBeforeForMoreThanOneMinute(date, form.endTime)) {
        changeFormField('endTime', addOneMinute(date));
      }
    };

    return (
      <SelectDateTime submitDate={submitDate} initialDate={form.startTime} />
    );
  };
