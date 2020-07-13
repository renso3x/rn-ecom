import React, { useContext } from 'react';
import { View, Text, ScrollView, SafeAreaView } from 'react-native';
import { AppContext } from '../contexts/AppContext';
import { logout } from '../actions/login';

import AppBar from '../components/AppBar';
import {SearchBar} from '../components/SearchBar';

export interface Props {}

const Home: React.SFC<Props> = ({ navigation }) => {
  const {state, dispatch} = useContext(AppContext);

  const handleLogout = () => {
    logout(dispatch);
    navigation.navigate('Login');
  };

  return (
    <SafeAreaView style={{ flex: 1}}>
      <SearchBar />
      <ScrollView
        contentContainerStyle={{ flex: 1 }}>
        <Text>Home!</Text>
      </ScrollView>
    </SafeAreaView>
  );
}

export { Home };
