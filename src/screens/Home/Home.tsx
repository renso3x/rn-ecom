import React, { useContext } from 'react';
import { ScrollView, SafeAreaView } from 'react-native';
import { Headline } from 'react-native-paper';

import { AppContext } from '../../contexts/AppContext';
import { SearchBar } from '../../components/SearchBar';
import { STYLING } from '../../config/constants';
import { StoreList } from '../../components/Store';
import { styles } from './styles';

export interface Props {}

const Home: React.SFC<Props> = ({ navigation }) => {
  const {state, dispatch} = useContext(AppContext);

  return (
    <SafeAreaView style={STYLING.flex}>
      <SearchBar />
      <ScrollView
        contentContainerStyle={styles.content}
      >
        <Headline style={styles.headline}>STORES</Headline>
        <StoreList />
        <StoreList />
        <StoreList />
        <StoreList />
      </ScrollView>
    </SafeAreaView>
  );
}

export { Home };
