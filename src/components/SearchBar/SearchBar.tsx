import React, { useState } from 'react';
import { View, TextInput } from 'react-native';
import { IconButton, Searchbar } from 'react-native-paper';
import { COLORS } from '../../config/constants';

export interface Props {}

const styles = {
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    paddingHorizontal: 16,
    maxHeight: 50,
  },
  searchContainer: {
    flex: 2,
  },
};

const SearchBar: React.SFC<Props> = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const onChangeSearch = query => setSearchQuery(query);

  return (
    <View style={styles.container}>
      <Searchbar
        style={styles.searchContainer}
        placeholder="Search"
        onChangeText={onChangeSearch}
        value={searchQuery}
      />
      <IconButton
        icon={require('../../assets/ic-cart.png')}
        size={20}
        onPress={() => console.log('Pressed')}
      />
    </View>
  );
};

export { SearchBar };