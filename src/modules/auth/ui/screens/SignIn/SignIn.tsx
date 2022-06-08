import React from 'react';
import { Button, Text, TextInput, View } from 'react-native';

import styles from './signIn.styles';
import { useSignIn } from './signIn.hooks';

interface ISignInScreenProps {}

const SignInScreen = (_props: ISignInScreenProps) => {
  const { login, password, changeLogin, changePassword, submit } = useSignIn();

  return (
    <View style={styles.screen}>
      <Text style={styles.welcome}>Welcome</Text>
      <TextInput
        style={styles.input}
        onChangeText={changePassword}
        value={password}
      />
      <TextInput
        style={styles.input}
        onChangeText={changeLogin}
        value={login}
      />
      <Button title="Sign In" onPress={submit} />
    </View>
  );
};

export default SignInScreen;
