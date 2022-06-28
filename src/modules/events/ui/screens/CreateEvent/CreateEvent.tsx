import React from 'react';
import {
  ActivityIndicator,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';

import styles from './createEvent.styles';
import { useCreateEventScreen } from 'modules/events/ui/screens/CreateEvent/createEvent.hooks';
import { useNavigation } from '@react-navigation/native';
import { CreateEventNavigationProp } from 'modules/app/ui/routers/SharedRouter/sharedRouter.types';
import { CreateEventDictionary } from 'modules/events/ui/screens/CreateEvent/createEvent.dictionary';
import { Colors } from 'modules/shared/presentation/colors/Colors';
import { formatEventTime } from 'modules/events/ui/screens/CreateEvent/createEvent.utils';

function useCreateEventHeader(createEvent: () => void, loading: boolean) {
  const navigation = useNavigation<CreateEventNavigationProp>();

  React.useEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <TouchableOpacity
          onPress={createEvent}
          style={styles.submitButton}
          disabled={loading}>
          {loading ? (
            <ActivityIndicator color={Colors.WHITE} />
          ) : (
            <Text style={styles.submitButtonLabel}>
              {CreateEventDictionary.SUBMIT_BUTTON_LABEL}
            </Text>
          )}
        </TouchableOpacity>
      ),
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [createEvent, loading]);
}

interface ICreateEventScreenProps {}

// TODO: 1) Implement Color picker
export const CreateEventScreen: React.FC<ICreateEventScreenProps> = () => {
  const {
    form,
    produceChangeFormField,
    inProgress,
    createEvent,
    openStartDateTimePicker,
    openEndDateTimePicker,
  } = useCreateEventScreen();

  useCreateEventHeader(createEvent, inProgress);

  const areFieldsEditable = !inProgress;

  return (
    <View style={styles.screen}>
      <View style={styles.inputContainer}>
        <Text style={styles.inputLabel}>
          {CreateEventDictionary.TITLE_INPUT_LABEL}
        </Text>
        <TextInput
          value={form.title}
          placeholder={CreateEventDictionary.TITLE_INPUT_PLACEHOLDER}
          placeholderTextColor={Colors.LIGHT_GRAY}
          onChangeText={produceChangeFormField('title')}
          style={styles.input}
          editable={areFieldsEditable}
        />
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.inputLabel}>
          {CreateEventDictionary.DESCRIPTION_INPUT_LABEL}
        </Text>
        <TextInput
          value={form.description}
          placeholder={CreateEventDictionary.DESCRIPTION_INPUT_PLACEHOLDER}
          placeholderTextColor={Colors.LIGHT_GRAY}
          onChangeText={produceChangeFormField('description')}
          style={styles.input}
          editable={areFieldsEditable}
        />
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.inputLabel}>
          {CreateEventDictionary.COLOR_INPUT_LABEL}
        </Text>
        <TouchableOpacity
          style={[styles.colorPickerButton, { backgroundColor: form.color }]}
        />
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.inputLabel}>
          {CreateEventDictionary.START_TIME_INPUT_LABEL}
        </Text>
        <TouchableOpacity
          style={styles.datePickerButton}
          onPress={openStartDateTimePicker}>
          <Text style={styles.datePickerButtonLabel}>
            {formatEventTime(form.startTime)}
          </Text>
        </TouchableOpacity>
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.inputLabel}>
          {CreateEventDictionary.END_TIME_INPUT_LABEL}
        </Text>
        <TouchableOpacity
          style={styles.datePickerButton}
          onPress={openEndDateTimePicker}>
          <Text style={styles.datePickerButtonLabel}>
            {formatEventTime(form.endTime)}
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
