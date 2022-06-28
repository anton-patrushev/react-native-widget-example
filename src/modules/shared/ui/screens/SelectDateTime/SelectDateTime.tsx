import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import DatePicker from 'react-native-date-picker';

import { useNavigation, useRoute } from '@react-navigation/native';
import {
  SelectDateTimeNavigationProp,
  SelectDateTimeRouteProp,
} from 'modules/app/ui/routers/SharedRouter/sharedRouter.types';
import { SelectDateTimeDictionary } from './selectDateTime.dictionary';
import { useSelectDateTimeScreen } from './selectDateTime.hooks';
import styles from './selectDateTime.styles';

function useSelectDateHeader(date: Date): void {
  const navigation = useNavigation<SelectDateTimeNavigationProp>();
  const route = useRoute<SelectDateTimeRouteProp>();

  React.useEffect(() => {
    const submitDate = () => {
      route.params.submitDate(date);
      navigation.pop();
    };

    navigation.setOptions({
      headerRight: () => (
        <TouchableOpacity onPress={submitDate} style={styles.submitButton}>
          <Text style={styles.submitButtonLabel}>
            {SelectDateTimeDictionary.SUBMIT_BUTTON_LABEL}
          </Text>
        </TouchableOpacity>
      ),
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [date]);
}

interface ISelectDateTimeProps {}

export const SelectDateTime: React.FC<ISelectDateTimeProps> = () => {
  const { minimumDate, date, changeDate } = useSelectDateTimeScreen();
  useSelectDateHeader(date);

  return (
    <View style={styles.screen}>
      <DatePicker
        date={date}
        onDateChange={changeDate}
        mode="datetime"
        minimumDate={minimumDate}
      />
    </View>
  );
};
