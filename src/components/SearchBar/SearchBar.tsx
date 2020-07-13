import React, { useState } from 'react';
import { View, TextInput } from 'react-native';
import { IconButton } from 'react-native-paper';
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
    position: 'relative',
    backgroundColor: COLORS.offGrey,
    opacity: .3
  },
  searchIcon: {
    position: 'absolute',
    justifyContent: 'center',
    top: 1,
  },
  input: {
    flex: 1,
    paddingLeft: 40,
    height: 40,
    borderColor: 'gray',
    borderWidth: 1
  },
};

const SearchBar: React.SFC<Props> = () => {
  const [query, setQuery] = useState('');

  return (
    <View style={styles.container}>
      <View style={styles.searchContainer}>
        <IconButton
          icon="magnify"
          size={20}
          style={styles.searchIcon}
        />
        <TextInput
          style={styles.input}
          value={query}
          onChangeText={text => setQuery(text)}
        />
      </View>
      <IconButton
        icon="cart"
        size={20}
        onPress={() => console.log('Pressed')}
      />
    </View>
  );
}

export { SearchBar };