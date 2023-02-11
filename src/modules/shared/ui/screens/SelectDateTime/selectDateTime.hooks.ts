import React from 'react';
import { useRoute } from '@react-navigation/native';
import { SelectDateTimeRouteProp } from 'modules/app/ui/routers/SharedRouter/sharedRouter.types';

type UseSelectDateTime = {
  minimumDate?: Date;
  date: Date;
  changeDate(date: Date): void;
};

export function useSelectDateTimeScreen(): UseSelectDateTime {
  const route = useRoute<SelectDateTimeRouteProp>();

  const [date, setDate] = React.useState(route.params.initialDate);

  const changeDate = (value: Date) => {
    setDate(value);
  };

  return { date, changeDate, minimumDate: route.params.minimumDate };
}
