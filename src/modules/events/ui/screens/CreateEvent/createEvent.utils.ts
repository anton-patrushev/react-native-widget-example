import { Alert } from 'react-native';
import format from 'date-fns/format';
import { CreateEventDictionary } from 'modules/events/ui/screens/CreateEvent/createEvent.dictionary';

export function formatEventTime(time: Date): string {
  return format(time, 'dd MMM yyyy, p');
}

export function showErrorAlert(message: string) {
  Alert.alert(CreateEventDictionary.ERROR_ALERT_TITLE, message);
}
