import * as React from 'react';
import { useNavigation } from '@react-navigation/native';

import { useCreateEventPresenter } from 'modules/events/presentation/presenters/CreateEventPresenter/CreateEventPresenter';
import { CreateEventInput } from 'modules/events/presentation/inputs/CreateEventInput';
import { showErrorAlert } from 'modules/events/ui/screens/CreateEvent/createEvent.utils';
import { useCreateEventFormContext } from 'modules/events/ui/contexts/CreateEventForm/hooks/useCreateEventFormContext';
import { CreateEventForm } from 'modules/events/ui/contexts/CreateEventForm/createEventContext.types';
import { CreateEventNavigationProp } from 'modules/events/ui/routers/CreateEventRouter/CreateEventRouter.types';
import { CreateEventRouterScreens } from 'modules/events/ui/routers/CreateEventRouter/CreateEventRouter.screens';

type UseCreateEventScreenResult = {
  inProgress: boolean;
  form: CreateEventForm;
  createEvent(): void;
  produceChangeFormField<T extends keyof CreateEventForm>(
    field: T,
  ): (fieldValue: CreateEventForm[T]) => void;

  openColorPicker(): void;
  openStartDateTimePicker(): void;
  openEndDateTimePicker(): void;
};

export function useCreateEventScreen(): UseCreateEventScreenResult {
  const createEventPresenter = useCreateEventPresenter();
  const { form, changeFormField } = useCreateEventFormContext();
  const [creating, setCreating] = React.useState(false);

  const navigation = useNavigation<CreateEventNavigationProp>();

  const createEvent = async () => {
    try {
      setCreating(true);

      await createEventPresenter.createEvent(
        new CreateEventInput(
          form.title,
          form.description,
          form.color,
          form.startTime,
          form.endTime,
        ),
      );

      navigation.pop();
    } catch (e) {
      if (e instanceof Error) {
        showErrorAlert(e.message);
      }

      setCreating(false);
    } finally {
    }
  };

  const openColorPicker = () => {
    navigation.push(CreateEventRouterScreens.SELECT_COLOR);
  };

  const openStartDateTimePicker = () => {
    navigation.push(CreateEventRouterScreens.SELECT_START_DATE_TIME);
  };

  const openEndDateTimePicker = () => {
    navigation.push(CreateEventRouterScreens.SELECT_END_DATE_TIME);
  };

  return {
    inProgress: creating,
    form,
    createEvent,
    produceChangeFormField: (field) => {
      return (value) => changeFormField(field, value);
    },
    openColorPicker,
    openStartDateTimePicker,
    openEndDateTimePicker,
  };
}
