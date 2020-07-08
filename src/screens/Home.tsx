import React, { useContext } from 'react';
import { View, Text } from 'react-native';
import { Button } from 'react-native-paper';
import { AppContext } from '../contexts/AppContext';
import { logout } from '../actions/login';

export interface Props {}

const Home: React.SFC<Props> = ({ navigation }) => {
  const {state, dispatch} = useContext(AppContext);

  const handleLogout = () => {
    logout(dispatch);
    navigation.navigate('Login');
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Home!</Text>
      <Button
        onPress={handleLogout}
        mode="contained"
      >
        Sign Out
      </Button>
    </View>
  );
}

export { Home };
