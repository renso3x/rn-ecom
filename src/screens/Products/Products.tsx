import React, { useContext } from 'react';
import { ScrollView, SafeAreaView } from 'react-native';
import { Headline } from 'react-native-paper';

import { AppContext } from '../../contexts/AppContext';
import { STYLING } from '../../config/constants';
import { ProductItem } from '../../components/Product';
import { styles } from './styles';

export interface Props {}

const Products: React.SFC<Props> = ({ navigation }) => {
  const {state, dispatch} = useContext(AppContext);

  return (
    <SafeAreaView style={STYLING.flex}>
      <ScrollView
        contentContainerStyle={styles.content}
      >
        <Headline style={styles.headline}>PRODUCTS</Headline>
        <ProductItem />
        <ProductItem />
        <ProductItem />
        <ProductItem />
        <ProductItem />
      </ScrollView>
    </SafeAreaView>
  );
}

export { Products };
