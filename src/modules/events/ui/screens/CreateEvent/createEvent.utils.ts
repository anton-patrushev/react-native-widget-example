import { Alert } from 'react-native';
import format from 'date-fns/format';
import addHours from 'date-fns/addHours';
import subtractHours from 'date-fns/subHours';
import isAfter from 'date-fns/isAfter';

import { CreateEventDictionary } from 'modules/events/ui/screens/CreateEvent/createEvent.dictionary';

export function formatEventTime(time: Date): string {
  return format(time, 'dd MMM yyyy, p');
}

export function showErrorAlert(message: string) {
  Alert.alert(CreateEventDictionary.ERROR_ALERT_TITLE, message);
}

export function addOneHour(date: Date): Date {
  return addHours(date, 1);
}

export function isBeforeForMoreThanOneHour(
  date: Date,
  compareDate: Date,
): boolean {
  return !isAfter(date, subtractHours(compareDate, 1));
}
