import React from 'react';
import { View } from 'react-native';
import DatePicker from 'react-native-date-picker';

import { SelectDateTimeStyle } from './selectDateTime.styles';
import {
  useSelectDateHeader,
  useSelectDateTimeScreen,
} from './selectDateTime.hooks';

interface ISelectDateTimeProps {
  minimumDate?: Date;
  initialDate: Date;
  submitDate: (date: Date) => void;
}

export const SelectDateTime = ({
  minimumDate,
  initialDate,
  submitDate,
}: ISelectDateTimeProps) => {
  const { date, changeDate } = useSelectDateTimeScreen({ initialDate });
  useSelectDateHeader({ date, submitDate });

  return (
    <View style={SelectDateTimeStyle.screen}>
      <DatePicker
        date={date}
        onDateChange={changeDate}
        mode="datetime"
        minimumDate={minimumDate}
      />
    </View>
  );
};
