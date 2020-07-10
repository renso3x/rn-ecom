import React, { useState, useContext } from 'react';
import { StyleSheet, SafeAreaView, View } from 'react-native';
import { Button, TextInput } from 'react-native-paper';
import { AppContext } from '../contexts/AppContext';
import { LoginProps } from '../config/types';
import { authenticate } from '../actions/login';

const Login: React.SFC<LoginProps> = ({ navigation }) => {
  const { state: { auth }, dispatch } = useContext(AppContext);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    authenticate({ email, password }, dispatch);
  };

  const handleRegister = () => {
    navigation.navigate('Register');
  };

  React.useEffect(() => {
    if (auth.userToken) {
      return navigation.navigate('Main');
    }
  }, [auth]);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.formView}>
        <TextInput
          accessibilityStates
          mode="outlined"
          label="Email"
          value={email}
          onChangeText={val => setEmail(val)}
        />
        <TextInput
          accessibilityStates
          secureTextEntry={true}
          mode="outlined"
          label="Password"
          value={password}
          onChangeText={val => setPassword(val)}
        />
      </View>

      <Button onPress={handleLogin} mode="contained">
        Login
      </Button>
      <Button onPress={handleRegister}>
        Register
      </Button>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    marginHorizontal: 16,
  },
  formView: {
    marginBottom: 15,
  },
});

export { Login };

