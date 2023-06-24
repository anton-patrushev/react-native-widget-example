import React from 'react';
import { Text, TextInput, View } from 'react-native';

import { AsyncButton } from 'modules/shared/ui/components/buttons';

import styles from './signIn.styles';
import { useSignIn } from './signIn.hooks';

interface ISignInScreenProps {}

export const SignInScreen: React.FC<ISignInScreenProps> = () => {
  const {
    login,
    password,
    isSubmitEnabled,
    changeLogin,
    changePassword,
    submit,
  } = useSignIn();

  return (
    <View style={styles.screen}>
      <Text style={styles.welcome}>Welcome</Text>

      <Text style={styles.inputLabel}>username</Text>
      <TextInput
        style={styles.input}
        onChangeText={changeLogin}
        value={login}
        textContentType="username"
        autoCapitalize="none"
      />

      <Text style={styles.inputLabel}>password</Text>
      <TextInput
        style={styles.input}
        onChangeText={changePassword}
        value={password}
        textContentType="password"
        secureTextEntry
      />

      <AsyncButton
        style={styles.signIn}
        label="Sign In"
        onPress={submit}
        disabled={!isSubmitEnabled}
      />
    </View>
  );
};
