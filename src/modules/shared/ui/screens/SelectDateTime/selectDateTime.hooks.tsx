import React from 'react';
import { TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { SelectStartDateTimeNavigationProp } from 'modules/events/ui/routers/CreateEventRouter/CreateEventRouter.types';
import { Text } from 'modules/shared/ui/components/Theme';

import { SelectDateTimeDictionary } from './selectDateTime.dictionary';
import { SelectDateTimeStyle } from './selectDateTime.styles';

type UseSelectDateTimeParams = {
  initialDate: Date;
};

type UseSelectDateTimeResult = {
  date: Date;
  changeDate(date: Date): void;
};

export function useSelectDateTimeScreen(
  params: UseSelectDateTimeParams,
): UseSelectDateTimeResult {
  const [date, setDate] = React.useState(params.initialDate);

  return { date, changeDate: setDate };
}

type UseSelectDateHeaderParams = {
  date: Date;
  submitDate: (date: Date) => void;
};

export function useSelectDateHeader(params: UseSelectDateHeaderParams): void {
  const navigation = useNavigation<SelectStartDateTimeNavigationProp>();

  React.useEffect(() => {
    const submitDate = () => {
      params.submitDate(params.date);
      navigation.pop();
    };

    navigation.setOptions({
      headerRight: () => (
        <TouchableOpacity
          onPress={submitDate}
          style={SelectDateTimeStyle.submitButton}>
          <Text style={SelectDateTimeStyle.submitButtonLabel}>
            {SelectDateTimeDictionary.SUBMIT_BUTTON_LABEL}
          </Text>
        </TouchableOpacity>
      ),
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [params.date]);
}
